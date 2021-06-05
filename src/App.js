import React, { Component } from 'react'; 
import TodoCard from './TodoCard' 
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      isClicked: false,
      inputValue: "",
      todoList: []
    }
  }

  handleClick = () =>{
    if(this.state.isClicked === false){
      this.setState({isClicked: true});
    }else{
      this.setState({isClicked: false}); 
    }
  }

  handleChange = (event) =>{
    this.setState({inputValue: event.target.value})
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    this.setState({todoList: [...this.state.todoList, this.state.inputValue]})
    this.setState({inputValue: ""})
  }

  handleDelete = (index) =>{
    console.log("item at index " + index + " was clicked");
    let copyOfTodoList = this.state.todoList; 
    copyOfTodoList.splice(index, 1); 
    this.setState({todoList: [...copyOfTodoList]})
    console.log("todo deleted at index " + index); 
  }


  render(){
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <button onClick={this.handleClick}>Click Me!</button>
        <p>{this.state.isClicked ? "true" : "false"}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.inputValue} onChange={this.handleChange}></input>
          <button type="submit">Submit</button>
        </form>
        <ol>{this.state.todoList.map((todo, index) => {
          return <TodoCard key={index} index={index} title={todo} clickToRemove={this.handleDelete}/>
          })}</ol>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          {this.props.name}
        </a>
      </header>
    </div>
  );
}
}

export default App;
