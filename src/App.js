import React, { Component } from "react";
import "./App.css";
import List from "./components/List";
import NewTask from "./components/NewTask";

class App extends Component {
  state = {
    list: [],
  };

  handleAddTask = (task) => {
    this.setState({ list: [...this.state.list, task] });
  };

  render() {
    return <div className="App">
      <h1>My to-do list:</h1>
      <NewTask add={this.handleAddTask}/>
      <List tasks={this.state.list}/>
    </div>

  }
}

export default App;
