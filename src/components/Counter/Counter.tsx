import { Component } from 'react';
import './Counter.css';

export default class Counter extends Component {
  state = {
    counter: 0
  };

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  double = () => {
    this.setState({ counter: this.state.counter * 2 });
  };

  half = () => {
    this.setState({ counter: this.state.counter / 2 });
  };

  render() {
    return (
      <div className='counter-wrapper'>
        <h1 data-testid='counter'>Counter: {this.state.counter}</h1>

        <div className='buttons-wrapper'>
          <button data-testid='decrement-button' onClick={this.decrement}>
            Decrement
          </button>
          <button data-testid='increment-button' onClick={this.increment}>
            Increment
          </button>
        </div>

        <div className='buttons-wrapper'>
          <button data-testid='half-button' onClick={this.half}>
            Half
          </button>
          <button data-testid='double-button' onClick={this.double}>
            Double
          </button>
        </div>
      </div>
    );
  }
}
