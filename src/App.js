import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo: 'first',
      todoList: [
        {id: '1', value: '第一件事情'}
      ]
    }
  }

  render() {
    let todos = this.state.todoList.map((item, index)=>{
      return <li>{item.value}</li>
    })

    return (
      <div className="App">
        <h1>我的待办</h1>
        <input type="text" value={this.state.newTodo} />
        <ol>
          {todos}
        </ol>
      </div>
    );
  }
}

export default App;
