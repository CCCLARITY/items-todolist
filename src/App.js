import React, { Component } from 'react';
import './App.css';
import TodoInput from './TodoInput.js';
import TodoItem from './TodoItem.js';
import 'normalize.css';
import './reset.css';
import * as localStorage from './localStore';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo: '',
      todoList: localStorage.load('todoList')||[]
    }
  }

  componentDidUpdate(){
    localStorage.save('todoList', this.state.todoList)
  }

  render() {
    let todos = this.state.todoList.filter((item)=>!item.delete).map((item, index)=>{
      return (
        <li key={index}>
          <TodoItem content={item} 
            onDelete={this.delete.bind(this)}
            onToggle={this.toggle.bind(this)}/>
        </li>
      )
    })

    return (
      <div className="App">
        <h1>我的时间清单</h1>
        <TodoInput content={this.state.newTodo} 
          onChange={this.change.bind(this)}
          onSubmit={this.addTodo.bind(this)}/>
        <ol className="todoList">
          {todos}
        </ol>
      </div>
    );
  }

  delete(e, todo){
    todo.delete = true
    this.setState(this.state)
    console.log(this.state.todoList)
  }
  
  toggle(e, todo){                         //用来完成标记完成和未完成
    todo.status = todo.status === 'completed' ? '':'completed'
    this.setState(this.state)
    console.log(this.state.todoList)
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
      value: event.target.value,
      status: null,
      delete: false
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