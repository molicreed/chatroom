const Koa = require('koa')
const app = new Koa()
const KoaRouter = require('./routes')
const WebSocketServer = require('./websocket.js')
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())
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
