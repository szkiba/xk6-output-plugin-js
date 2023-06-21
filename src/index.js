const path = require('path')
const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')

const packageDefinition = protoLoader.loadSync(
  path.join(__dirname, '..', 'proto', 'output.proto'), {longs: Number, enums: String}
)

const proto = grpc.loadPackageDefinition(packageDefinition)

const pino = require('pino')

const {
  service: HealthService,
  servingStatus,
  Implementation: HealthImpl
} = require('grpc-js-health-check')
const { format } = require('util')

const statusMap = {
  '': servingStatus.SERVING,
  'grpc.test.TestServiceNotServing': servingStatus.NOT_SERVING,
  'grpc.test.TestServiceServing': servingStatus.SERVING
}

class wrapper {
  constructor (impl) {
    this.impl = impl
  }

  init (call, callback) {
    callback(null, { info: this.impl.init(call.request) })
  }

  start (call, callback) {
    this.impl.start()
    callback(null, {})
  }

  stop (call, callback) {
    this.impl.stop()
    callback(null, {})
  }

  addMetrics (call, callback) {
    this.impl.addMetrics(call.request.metrics)
    callback(null, {})
  }

  addSamples (call, callback) {
    this.impl.addSamples(call.request.samples)
    callback(null, {})
  }
}

function serve (impl) {
  const server = new grpc.Server()
  server.addService(proto.xk6_output_plugin.output.Output.service, new wrapper(impl))
  server.addService(HealthService, new HealthImpl(statusMap))
  server.bindAsync(
    '127.0.0.1:0',
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      server.start()
      process.stdout.write(format('1|1|tcp|127.0.0.1:%d|grpc\n', port))
    }
  )
}

function initLogging () {
  const formatters = {
    level (label, number) {
      return { '@level': label }
    },
    bindings (bindings) {
      return {}
    }
  }

  const log = pino(
    { formatters, timestamp: false, messageKey: '@message' },
    pino.destination(2)
  )

  console.trace = (...args) => log.trace(...args)
  console.debug = (...args) => log.debug(...args)
  console.log = (...args) => log.info(...args)
  console.info = (...args) => log.info(...args)
  console.warn = (...args) => log.warn(...args)
  console.error = (...args) => log.error(...args)
}

initLogging()

module.exports = { serve }
