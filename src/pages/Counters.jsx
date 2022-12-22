import React, { Component } from "react";
import Counter from "../Counter";

const counters = [
  { id: 1, count: 0, steps: 1 },
  { id: 2, count: 0, steps: 1 },
  { id: 3, count: 0, steps: 1 },
];

export default class Counters extends Component {
  state = {
    counters,
    totals: 0,
  };
 

  onIncrement = (id, steps = 1) => {
    this.setState((prevState) => {
      return {
        counters: prevState.counters.map((item) => {
          if (item.id === id) {
             return {
              ...item,
              count: item.count + steps,
            };
          }
          return item;
        }),
        totals:this.state.totals + steps
      };
    });
    
  };
  onDecrement = (id, steps = 1) => {
    this.setState((prevState) => {
      return {
        counters: prevState.counters.map((item) => {
          if (item.id === id) {
            if (Number(item.count) >= 1) {
              return { ...item, count: item.count - steps };
            }
          }
          return item;
        }),
       totals: this.state.totals - steps
       };
    });
  };

 
  render() {
    return (
      <div className="all__conter">
        {this.state.counters.map((item) => (
           <Counter
            key={item.id}
            {...item}
            onIncrement={this.onIncrement}
            decrement={this.onDecrement}
          />
        ))}
         <p className="counterTotal">{this.state.totals}</p> 

      </div>
    );
  }
}
