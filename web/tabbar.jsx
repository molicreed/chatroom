import React from 'react'
import './tabbar.scss'


class InputMsg extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsElapsed: 0
    }
  }
  render() {
    return (
      <div id="tab-bar">
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    )
  }
}

export default InputMsg