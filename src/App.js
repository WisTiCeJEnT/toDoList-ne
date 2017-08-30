import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header';
import Content from './containers/Content.js';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: '',
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  }
  onInputText = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  addTodo = () => {
    const todo = {
      text: this.state.text
    }
    const todos = [...this.state.todos, todo];
    this.setState({
      todos: [...this.state.todos, todo],
      text: ''
    })
    localStorage.setItem('todos',JSON.stringify(todos))
  }
  removeTodo = (index) => () => {
    this.setState({
      todos: [
        ...this.state.todos.slice(0,index),
        ...this.state.todos.slice(index+1),
      ]
    })
    
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Content 
          onInputText={this.onInputText} 
          text={this.state.text}
          addTodo={this.addTodo}
        />
        {
          this.state.todos.map((todos, index) => (
            <div className="todo-wrapper">
              <div className="todo">{todos.text}</div>
              <input
                type="checkbox"
                className="input-checkbox"
              />
              <botton 
                className="remove-bth"
                onClick={this.removeTodo(index)}
                > x </botton>  
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
