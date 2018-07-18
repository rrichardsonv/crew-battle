import React from 'react';

// At its simplest

export const redAndWhiteDiv = React.createElement(
  'h1',
  { style: { backgroundColor: 'red', color: 'white' } },
  'hello world'
);

<h1 style={{ backgroundColor: 'red', color: 'white' }}>hello world</h1>

// React elements can be thought of as templated elements

export const BlueAndYellowDivFactory = React.createFactory('div');

// Factories are functions that produce elements
// DivFactory() => DivElement;

// The jsx syntax <DivFactory /> === DivFactory()
// Every time you see <UpperCaseName /> that is a function being called
// which will throw an error if it doesnt return null or a DOM node

// You can see how it would be useful to have compound templates

// <header>
//   <img src={'./public' + props.title + .jpg}>
//   <div className={props.title === 'bells' ? 'red' : 'blue'}>
//     <h1>
//       {props.title}
//     </h1>
//   </div>
// </header>

export const BlackAndRedDiv = function (props) {
  return (
    <div style={{ backgroundColor: 'black', color: 'red' }}>
      {props.title + props.var}
    </div>
  );
};

// The modern way to present factories is as above ^
// As you can see it is simply a function that takes in props
// and returns a DOM node
// If you call it a million times with the same props
// it should never return a different value

export class GreenAndBlackDiv extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  handleBtnClick = event => {
    event && event.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  handleClick(event) {
    event && event.preventDefault();
    alert('HEY');
  }

  render() {
    return (
      <div style={{ backgroundColor: 'red', color: 'white' }}>
        <h1>{!this.state.counter ? null : this.state.counter}</h1>
        {this.props.msg ? this.props.msg : 'Hello world'}
        <button onClick={this.handleBtnClick}>Counter</button>
        <button onClick={this.handleClick}>Alert</button>
      </div>
    );
  }
}

export const Counter = React.createClass({
  render() {
    return <div />;
  }
});

const piPurp = {
  backgroundColor: 'pink',
  color: 'purple'
};

const colors = ['blue', 'yellow', 'green', 'red', 'pink', 'black'];

export class PinkAndPurpleDiv extends React.Component {
  state = { counter: 1 };

  handleClick = event => {
    event.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    const backgroundIndex = this.state.counter + 1;
    return (
      <div
        style={{
          backgroundColor: colors[backgroundIndex % 6],
          color: colors[this.state.counter % 6]
        }}
        onClick={this.handleClick}
      >
        WUT
      </div>
    );
  }
}
