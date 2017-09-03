import React from 'react'

class InputMsg extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsElapsed: 0
    }
  }
  render() {
    return (
      <div id="message-input">
        <input type="text" placeholder={this.state.secondsElapsed}/>
        <button>submit</button>
      </div>
    )
  }
}

export default InputMsg