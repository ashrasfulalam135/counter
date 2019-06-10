import React, { Component } from "react";

class NavBar extends Component {
  render() {
    const { totalNumberOfCounters } = this.props;
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Shopping Cart
          <span className="badge badge-primary m-2">
            {/*this.props.totalNumberOfCounters*/}
            {totalNumberOfCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
