import React, { Component } from 'react';  
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      isClicked: false,
      inputValue: "",
      todoList: []
    }
  }

  handleChange = (event) =>{
    this.setState({inputValue: event.target.value})
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    this.setState({todoList: [...this.state.todoList, this.state.inputValue]})
    this.setState({inputValue: ""})
  }


  render(){
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.inputValue} onChange={this.handleChange}></input>
          <button type="submit">Submit</button>
        </form>
        <ol>{this.state.todoList.map((todo, index) => {
          return <li key={index}>{todo}</li>
        })}</ol>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
