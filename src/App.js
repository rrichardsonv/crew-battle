import React, { Component } from 'react';
import ModalConductor from './ModalConductor/index';
import MainScreen from './Games/index';
import Team from './Teams/index';
import Bans from './Bans';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './App.css';
import {
  redAndWhiteDiv,
  BlueAndYellowDivFactory,
  GreenAndBlackDiv,
  PinkAndPurpleDiv,
  BlackAndRedDiv,
  Counter
} from './Tutorial';

const store = createStore(rootReducer, applyMiddleware(thunk));

const tStyle = {
  width: '50vw',
  height: '100px',
  margin: '20px',
  padding: '20px'
};

const appWithRedux = (
  <Provider store={store}>
    <div className="main-grid">
      <ModalConductor />
      <div className="team-bar left">
        <Team side="west" />
        <Bans side="west" />
      </div>
      <MainScreen />
      <div className="team-bar right">
        <Team side="east" />
        <Bans side="east" />
      </div>
    </div>
  </Provider>
);

const Button = props => {
  return <button onClick={this.props.onClick} />;
};

// redAndWhiteDiv,
// BlueAndYellowDivFactory,
// GreenAndBlackDiv,
// PinkAndPurpleDiv,
// BlackAndRedDiv,

class App extends Component {
  render() {
    return (
      <div>
        <div style={tStyle}>
          <GreenAndBlackDiv msg="Hi Bob" />
        </div>
      </div>
    );
  }
}
/* <BlackAndRedDiv title="hello" var="hi" /> */

export default App;
