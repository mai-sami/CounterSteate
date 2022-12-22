import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <>
      <div className='rowCounter' style={{ padding: 20 }}>
      <p className='counterText'>{this.props.count}</p>
        <button className='btn_decrement' disabled={this.props.count===0?"0":""} onClick={() => this.props.decrement(this.props.id, this.props.steps)}>-</button>
        <button className='btn_onIncrement' onClick={() => this.props.onIncrement(this.props.id, this.props.steps)}>+</button>
      </div>
        </>
    );
  }
}

export default Counter;
