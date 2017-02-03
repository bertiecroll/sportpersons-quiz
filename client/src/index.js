import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

const url = "https://gist.githubusercontent.com/joshheald/d26b89b0fbaf4e26cb423913ada21b83/raw/174a7ac0916919d4ae171adcfc0af78811b185f3/sportspeople.json"

window.onload = function() {
  ReactDOM.render(
    <App url={url}/>,
    document.getElementById('app')
  )
}