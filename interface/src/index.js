import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import axios from 'axios'
import store from './store'
import { Provider } from 'react-redux'

axios.defaults.baseURL = "http://localhost:5000"

ReactDom.render(
        <Provider store={store}>
        <App/></Provider>,document.getElementById('root')
)