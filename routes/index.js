const Router = require('koa-router')

let router = new Router()

router.use(async (ctx, next) =>{
  console.log(`Process ${ctx.request.method} ${ctx.request.url}`)
  await next()
})

router.get('/', async ctx=>{
  console.log('anything-----')
  ctx.response.redirect('/index.html')
})

module.exports = router