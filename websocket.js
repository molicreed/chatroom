const WebSocketServer = require('ws').Server

let messageIndex = 0
function createMessage(type, user, data){
  messageIndex ++
  return JSON.stringify({
    id: messageIndex,
    type: type,
    user: user,
    data: data
  })
}

class MyWebSocketServer extends WebSocketServer{
  constructor(server){
    super({server})
  }

  broadcast(data){
    this.clients.forEach(client=>{
      client.send(data)
    })
  }

  handleMsg(msg, user){
    let message = createMessage('chat', user, msg.trim())
    this.broadcast(message)
  }
}

module.exports = MyWebSocketServer