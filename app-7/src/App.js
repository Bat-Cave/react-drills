import React, { Component } from 'react';
import './App.css';
import NewTask from './Components/NewTask';
import List from './Components/List';


class App extends Component {
  constructor(){
    super()

    this.state = {
      list: []
    }
    this.pushToList = this.pushToList.bind(this);
  }

  pushToList(task){
    this.setState({ list: [...this.state.list, task] })
  }

  render(){
    return (
      <div className="App">
        <h3>My to-do list:</h3>
        <NewTask add={this.pushToList}/>
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;
