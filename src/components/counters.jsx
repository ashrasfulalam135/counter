import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4, title: "counter #1" },
      { id: 2, value: 0, title: "counter #2" },
      { id: 3, value: 0, title: "counter #3" },
      { id: 4, value: 0, title: "counter #4" }
    ]
  };

  handelDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handelReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  handelIncrement = counter => {
    console.log(counter);
    const counters = [...this.state.counters]; //cloneing the array
    const index = counters.indexOf(counter); //get clicked counter's index
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handelReset}
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handelDelete}
            onIncrement={this.handelIncrement}
            counter={counter}
          >
            <p>{counter.title}</p>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
