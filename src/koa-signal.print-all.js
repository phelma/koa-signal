import { dim } from 'chalk'
import Signal from './koa-signal.js'
const signal = new Signal()

console.log()
console.log(dim('-- Process functions'))

signal.start('Starting!')
signal.end('Stopping!')
signal.success('Everything worked out okay')

console.log()
console.log(dim('-- Logging functions'))

signal.access({ req: { path: '/post/to/a/path', method: 'POST' }, res: { responseTime: 200, statusCode: 503 } })
signal.access({ req: { path: '/get/a/resource', method: 'GET' }, res: { responseTime: 1232, statusCode: 200 } })
signal.access({ req: { path: '/unknown', method: 'GET' }, res: { responseTime: 1232, statusCode: 404 } })

console.log()
console.log(dim('-- Runtime functions'))

signal.trace({
  state: { id: '123456-7890=1232' },
  timeDiff: 1232,
  initDiff: 5423,
  scope: 'scope'
}, 'This is happening')

signal.info({}, { code: 'ISIGNAL', property: 'Message with a property' })

signal.info('This is an info message')
signal.warn('This is a warning message')
signal.error('Error message', new Error('This is an error'))

signal.zipkin({
  state: { trace: '123123123', parent: '456456456', scope: '789789789' },
  res: { statusCode: 200, duration: 1001232 },
  req: { url: 'http://example.com/mypath', method: 'GET', kind: 'SERVER' }
})
