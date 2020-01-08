import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      input: ''
    }
  }

  handleInput(val){
    this.setState({input: val})
  }

  render(){
    return (
      <div className="App">
        <input 
          value={this.state.input} 
          placeholder="Start typing..."
          onChange={e => this.handleInput(e.target.value)}
        />
        <p>{this.state.input}</p>
      </div>
    );
  }
}

export default App;
