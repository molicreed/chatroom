import React from 'react'
import ReactDOM from 'react-dom'
import Main from './main.jsx'
import TabBar from './tabbar.jsx'
import Information from './information.jsx'

require('./app.scss')

function main() {
  ReactDOM.render(
    <div className="wrap">
      <TabBar />
      <Main />
      <Information />
    </div>,
    document.getElementById('root'))
}

main()