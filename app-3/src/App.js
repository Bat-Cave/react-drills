import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      input: '',
      arr: ['Hey', 'there', 'how', 'are', 'you', '?']
    }
  }

  handleInput(val){
    this.setState({input: val})
  }

  render(){
    let list = this.state.arr.filter((e, i) => {
      return e.includes(this.state.input);
    }).map((e, i) => {
      return <h2 key={i}>{e}</h2>
    })
    return (
      <div className="App">
        <input
          value={this.state.input}
          placeholder='Search...'
          onChange={e => this.handleInput(e.target.value)}
        />
        {list}
      </div>
    );
  }
}
export default App;
