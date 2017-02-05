import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import QuizReducer from './reducers/quiz'
import App from './containers/App'

const url = "https://gist.githubusercontent.com/joshheald/d26b89b0fbaf4e26cb423913ada21b83/raw/174a7ac0916919d4ae171adcfc0af78811b185f3/sportspeople.json"

const store = createStore(QuizReducer)

window.onload = function() {
  ReactDOM.render(
    <Provider store={store}>
      <App url={url}/>
    </Provider>,
    document.getElementById('app')
  )
}