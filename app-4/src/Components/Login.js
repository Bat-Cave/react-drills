import React, { Component } from 'react'

export default class Login extends Component {
  constructor(){
    super()

    this.state = {
      username: '',
      password: ''
    }

  }

  handleUserName(val){
    this.setState({username: val})
  }

  handlePassword(val){
    this.setState({password: val})
  }

  alert(user, pass){
    alert('Username: ' + user + ' Password' + pass)
  }

  render(){
    return(
      <div>
        <input placeholder='Username' onChange={(e) => this.handleUserName(e.target.value)}/>
        <input placeholder='Password' onChange={(e) => this.handlePassword(e.target.value)} />
        <button onClick={() => this.alert(this.state.username, this.state.password)}>Login</button>
      </div>
    )
  }

}
