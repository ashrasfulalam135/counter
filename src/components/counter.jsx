import React, { Component } from "react";
import { link } from "fs";

class Counter extends Component {
  //'state' is a object property which store data which is used by component
  state = {
    value: this.props.counter.value
    //tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <div>
        <span className="m-2">{this.props.children.props.children}</span>
        <span className={this.getBadgeClasses()}>{this.formetCount()}</span>
        <button
          //onClick={this.handelIncrement}
          //onClick={product => this.handelIncrement(product)} // for passing arguments
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-success btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/*this.renderTags()*/}
      </div>
    );
  }

  formetCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }

  //dynamically manage the class
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There is no tags here</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  //   constructor() {
  //     super();
  //     this.handelIncrement = this.handelIncrement.bind(this);
  //   }

  //this line convert this function into an arrow function
  /*handelIncrement = () => {
    //for passing arguments
    //handelIncrement = product => {
    this.setState({ value: this.state.value + 1 });
  };*/
}

export default Counter;
