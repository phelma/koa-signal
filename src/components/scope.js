import format from '../helper/format'
import modify from '../helper/text-modifier'

/* Config and then passed Koa ctx & msg */
export default (config = {}) => (ctx = {}) => {
  const { scopeKey = 'scope' } = config
  const scopeText = ctx[scopeKey]

  return format(config, modify(config, scopeText))
}