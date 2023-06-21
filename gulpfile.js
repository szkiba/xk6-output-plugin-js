const { task } = require('gulp')
const shell = require('gulp-shell')

task(
  'default',
  shell.task(
    [
      'proto-loader-gen-types ',
      '--includeComments ',
      '--outDir ../src ',
      '--grpcLib @grpc/grpc-js ',
      'output.proto'
    ].join(' '),
    { cwd: './proto' }
  )
)

task('docs', shell.task('typedoc'))
