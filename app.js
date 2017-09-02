const Koa = require('koa')
const app = new Koa()
const KoaRouter = require('./routes')
const WebSocketServer = require('ws').Server
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())
app.use(KoaRouter.routes())

let webSocket = new WebSocketServer({
  server: app.listen(3000, ()=>{
    console.log(`${app.env}-Listening on 3000`)
  })
})