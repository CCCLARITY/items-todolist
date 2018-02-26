import React, { Component } from 'react';
import './App.css';
import TodoInput from './TodoInput.js';
import TodoItem from './TodoItem.js';
import 'normalize.css';
import './reset.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo: '',
      todoList: []
    }
  }

  render() {
    let todos = this.state.todoList.map((item, index)=>{
      return <li key={index}><TodoItem content={item.value}/></li>
    })

    return (
      <div className="App">
        <h1>我的时间清单</h1>
        <TodoInput content={this.state.newTodo} 
          onChange={this.change.bind(this)}
          onSubmit={this.addTodo.bind(this)}/>
        <ol>
          {todos}
        </ol>
      </div>
    );
  }

  change(event){                    //从defaultValue变成了onChange的函数，修改输入框的值
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    })
  }

  addTodo(event){                    //这里实现的是将输入的东西添加到列表里
    this.state.todoList.push({
      id: idAdd(),
      value: event.target.value
    })
    this.setState({
      newTodo: '',
      todoList: this.state.todoList
    })
  }
}

export default App;

let id = 0;
function idAdd(){
  id +=1;
  return id;
}