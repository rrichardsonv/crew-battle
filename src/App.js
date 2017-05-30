import React, { Component } from 'react'
import ModalConductor from './ModalConductor/index'
import MainScreen from './Games/index'
import Team from './Teams/index'
import Bans from './Bans'
import { Provider } from 'react-redux'
import rootReducer from './rootReducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import './App.css'

const store = createStore(rootReducer, applyMiddleware(thunk))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="main-grid">
        <ModalConductor />
          <div className="team-bar left">
            <Team side='west' />
            <Bans side='west' />
          </div>
          <MainScreen />
          <div className="team-bar right">
            <Team side='east'/>
            <Bans side='east' />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App;
