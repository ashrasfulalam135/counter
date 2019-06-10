import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={/*this.props.onReset*/ onReset}
        >
          Reset
        </button>
        {/*this.props.counters*/ counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={/*this.props.onDelete*/ onDelete}
            onIncrement={/*this.props.onIncrement*/ onIncrement}
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
