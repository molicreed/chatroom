const Koa = require('koa')
const app = new Koa()
const path = require('path')
const KoaRouter = require('./routes')
const WebSocketServer = require('./lib/websocket.js')
const bodyParser = require('koa-bodyparser')
const staticResourse = require('koa-static')

app.use(bodyParser())
app.use(staticResourse(path.join(__dirname, './public')))
app.use(KoaRouter.routes())

let server = app.listen(3000, ()=>{
  console.log(`${app.env}-Listening on 3000`)
})

let webSocketServer = new WebSocketServer(server)


webSocketServer.on('connection', (ws, req)=>{
  console.log(ws.upgradeReq)
  console.log(req)
  ws.on('message', msg=>{
    console.log('Receive Message--', msg)
    if (msg && msg.trim()) {
      webSocketServer.handleMsg(msg, ws.user)
    }
  })
})
