import React from 'react'
import './main.scss'

class ChatWindow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msgs: []
    }
  }
  render() {
    let messages = this.state.msgs
    return (
      <ul id="chat-window" >
        {messages.map(msg =>
          <li key={msg.id}>
            <div>{msg.content}</div>
          </li>
        )}
      </ul>
    )
  }
}

class InputMsg extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ''
    }
  }

  render() {
    return (
      <div id="input-msg">
        <input type="text" />
      </div>
    )
  }
}

class MainWindow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsElapsed: 0
    }
  }
  render() {
    return (
      <div id="main-window">
        <ChatWindow />
        <InputMsg />
      </div>
    )
  }
}

export default MainWindow