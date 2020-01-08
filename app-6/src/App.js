import React, { Component } from 'react';
import './App.css';
import Todo from './Components/Todo'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      list: [],
      input: ''
    };

    this.pushTodo = this.pushTodo.bind(this)

  };

  handleChange(val){
    this.setState({input: val});
  };

  pushTodo(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    });
  }

  render(){
    let list = this.state.list.map((todo, i) => {
      return <Todo key={i} task={todo} />;
    });

    return (
      <div>
        <h2>My to-do list:</h2>
        <input value={this.state.input} placeholder='Enter New Task' onChange={(e) => this.handleChange(e.target.value)} />
        <button onClick={this.pushTodo}>Add</button>
        <Todo />
      {list}
      </div>
    );
  }
}

