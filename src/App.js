import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter,Route } from 'react-router-dom' 
import Global from './style.js'
import Icon from './iconfont/iconfont'
import store from './store'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path='/' exact></Route>
          <Route path='/detail' exact></Route>
          <Header />
          <Home />
          <Global />
          <Icon/> 
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
