# xk6-output-plugin-js

JavaScript plugin SDK for [xk6-output-plugin](https://github.com/szkiba/xk6-output-plugin).

## Documentation

[API documentation](https://github.com/szkiba/xk6-output-plugin-js/tree/master/docs)

**yarn**

```bash
yarn add xk6-output-plugin-js
```

**npm**
```bash
npm add xk6-output-plugin-js
```

## Example

```js
import { serve, Info } from 'xk6-output-plugin-js'

class Example {
  init (params) {
    console.info('init')
    return { description: 'example-js plugin' }
  }

  start () {
    console.info('start')
  }

  stop () {
    console.info('stop')
  }

  addMetrics (metrics) {
    console.info('metrics')
    metrics.forEach(metric => {
      console.info(
        { 'metric.type': metric.type, 'metric.contains': metric.contains },
        metric.name
      )
    })
  }

  addSamples (samples) {
    console.info('samples')
    samples.forEach(sample => {
      console.info(
        { 'sample.time': new Date(sample.time).toISOString(), 'sample.value': sample.value },
        sample.metric
      )
    })
  }
}

serve(new Example())
```

<details>
  <summary>Output</summary>

```plain
          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

INFO[0000] init                                          plugin=example.js
  execution: local
     script: script.js
     output: example-js plugin

  scenarios: (100.00%) 1 scenario, 1 max VUs, 10m30s max duration (incl. graceful stop):
           * default: 1 iterations for each of 1 VUs (maxDuration: 10m0s, gracefulStop: 30s)

INFO[0000] start                                         plugin=example.js
INFO[0001] metrics                                       plugin=example.js
INFO[0001] http_reqs                                     metric.contains=DEFAULT metric.type=COUNTER plugin=example.js
INFO[0001] http_req_duration                             metric.contains=TIME metric.type=TREND plugin=example.js
INFO[0001] http_req_blocked                              metric.contains=TIME metric.type=TREND plugin=example.js
INFO[0001] http_req_connecting                           metric.contains=TIME metric.type=TREND plugin=example.js
INFO[0001] http_req_tls_handshaking                      metric.contains=TIME metric.type=TREND plugin=example.js
INFO[0001] http_req_sending                              metric.contains=TIME metric.type=TREND plugin=example.js
INFO[0001] http_req_waiting                              metric.contains=TIME metric.type=TREND plugin=example.js
INFO[0001] http_req_receiving                            metric.contains=TIME metric.type=TREND plugin=example.js
INFO[0001] http_req_failed                               metric.contains=DEFAULT metric.type=RATE plugin=example.js
INFO[0001] samples                                       plugin=example.js
INFO[0001] http_reqs                                     plugin=example.js sample.time="2023-06-23T07:19:16.636Z" sample.value=1
INFO[0001] http_req_duration                             plugin=example.js sample.time="2023-06-23T07:19:16.636Z" sample.value=122.422427
INFO[0001] http_req_blocked                              plugin=example.js sample.time="2023-06-23T07:19:16.636Z" sample.value=138.24792
INFO[0001] http_req_connecting                           plugin=example.js sample.time="2023-06-23T07:19:16.636Z" sample.value=122.250959
INFO[0001] http_req_tls_handshaking                      plugin=example.js sample.time="2023-06-23T07:19:16.636Z"
INFO[0001] http_req_sending                              plugin=example.js sample.time="2023-06-23T07:19:16.636Z" sample.value=0.068827
INFO[0001] http_req_waiting                              plugin=example.js sample.time="2023-06-23T07:19:16.636Z" sample.value=122.270076
INFO[0001] http_req_receiving                            plugin=example.js sample.time="2023-06-23T07:19:16.636Z" sample.value=0.083524
INFO[0001] http_req_failed                               plugin=example.js sample.time="2023-06-23T07:19:16.636Z"
INFO[0001] http_reqs                                     plugin=example.js sample.time="2023-06-23T07:19:17.015Z" sample.value=1
INFO[0001] http_req_duration                             plugin=example.js sample.time="2023-06-23T07:19:17.015Z" sample.value=127.856718
INFO[0001] http_req_blocked                              plugin=example.js sample.time="2023-06-23T07:19:17.015Z" sample.value=250.898776
INFO[0001] http_req_connecting                           plugin=example.js sample.time="2023-06-23T07:19:17.015Z" sample.value=124.567128
INFO[0001] http_req_tls_handshaking                      plugin=example.js sample.time="2023-06-23T07:19:17.015Z" sample.value=126.245516
INFO[0001] http_req_sending                              plugin=example.js sample.time="2023-06-23T07:19:17.015Z" sample.value=0.05719
INFO[0001] http_req_waiting                              plugin=example.js sample.time="2023-06-23T07:19:17.015Z" sample.value=127.653513
INFO[0001] http_req_receiving                            plugin=example.js sample.time="2023-06-23T07:19:17.015Z" sample.value=0.146015
INFO[0001] http_req_failed                               plugin=example.js sample.time="2023-06-23T07:19:17.015Z"
INFO[0002] metrics                                       plugin=example.js
INFO[0002] vus                                           metric.contains=DEFAULT metric.type=GAUGE plugin=example.js
INFO[0002] vus_max                                       metric.contains=DEFAULT metric.type=GAUGE plugin=example.js
INFO[0002] data_sent                                     metric.contains=DATA metric.type=COUNTER plugin=example.js
INFO[0002] data_received                                 metric.contains=DATA metric.type=COUNTER plugin=example.js
INFO[0002] iteration_duration                            metric.contains=TIME metric.type=TREND plugin=example.js
INFO[0002] iterations                                    metric.contains=DEFAULT metric.type=COUNTER plugin=example.js
INFO[0002] samples                                       plugin=example.js
INFO[0002] vus                                           plugin=example.js sample.time="2023-06-23T07:19:17.375Z" sample.value=1
INFO[0002] vus_max                                       plugin=example.js sample.time="2023-06-23T07:19:17.375Z" sample.value=1
INFO[0002] data_sent                                     plugin=example.js sample.time="2023-06-23T07:19:18.015Z" sample.value=542
INFO[0002] data_received                                 plugin=example.js sample.time="2023-06-23T07:19:18.015Z" sample.value=17338
INFO[0002] iteration_duration                            plugin=example.js sample.time="2023-06-23T07:19:18.015Z" sample.value=1640.163223
INFO[0002] iterations                                    plugin=example.js sample.time="2023-06-23T07:19:18.015Z" sample.value=1
INFO[0002] stop                                          plugin=example.js

     data_received..................: 17 kB 11 kB/s
     data_sent......................: 542 B 330 B/s
     http_req_blocked...............: avg=194.57ms min=138.24ms med=194.57ms max=250.89ms p(90)=239.63ms p(95)=245.26ms
     http_req_connecting............: avg=123.4ms  min=122.25ms med=123.4ms  max=124.56ms p(90)=124.33ms p(95)=124.45ms
   ✓ http_req_duration..............: avg=125.13ms min=122.42ms med=125.13ms max=127.85ms p(90)=127.31ms p(95)=127.58ms
       { expected_response:true }...: avg=125.13ms min=122.42ms med=125.13ms max=127.85ms p(90)=127.31ms p(95)=127.58ms
   ✓ http_req_failed................: 0.00% ✓ 0        ✗ 2  
     http_req_receiving.............: avg=114.76µs min=83.52µs  med=114.76µs max=146.01µs p(90)=139.76µs p(95)=142.89µs
     http_req_sending...............: avg=63µs     min=57.19µs  med=63µs     max=68.82µs  p(90)=67.66µs  p(95)=68.24µs 
     http_req_tls_handshaking.......: avg=63.12ms  min=0s       med=63.12ms  max=126.24ms p(90)=113.62ms p(95)=119.93ms
     http_req_waiting...............: avg=124.96ms min=122.27ms med=124.96ms max=127.65ms p(90)=127.11ms p(95)=127.38ms
     http_reqs......................: 2     1.219317/s
     iteration_duration.............: avg=1.64s    min=1.64s    med=1.64s    max=1.64s    p(90)=1.64s    p(95)=1.64s   
     iterations.....................: 1     0.609659/s
     vus............................: 1     min=1      max=1
     vus_max........................: 1     min=1      max=1


running (00m01.6s), 0/1 VUs, 1 complete and 0 interrupted iterations
default ✓ [======================================] 1 VUs  00m01.6s/10m0s  1/1 iters, 1 per VU
```
</details>