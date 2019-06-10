import React, { Component } from "react";
import NavBar from "./components/navBar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
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
      <React.Fragment>
        <NavBar
          totalNumberOfCounters={
            this.state.counters.filter(c => c.value > 0).length
          }
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handelReset}
            onIncrement={this.handelIncrement}
            onDelete={this.handelDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
