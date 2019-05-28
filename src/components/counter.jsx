import React, { Component } from "react";
import { link } from "fs";

class Counter extends Component {
  //'state' is a object property which store data which is used by component
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formetCount()}</span>
        <button
          onClick={this.handelIncrement}
          className="btn btn-success btn-sm"
        >
          Increment
        </button>
        {this.renderTags()}
      </div>
    );
  }

  formetCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  //dynamically manage the class
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There is no tags here</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  //   constructor() {
  //     super();
  //     this.handelIncrement = this.handelIncrement.bind(this);
  //   }

  //this line convert this function into an arrow function
  handelIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
}

export default Counter;
