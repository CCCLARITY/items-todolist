import React, {Component} from 'react'
import './TodoItem.css'

class TodoItem extends Component{
    render(){
        return (<div className="TodoItem">
            <input type="checkbox" checked={this.props.content.status === 'completed'} onChange={this.toggle.bind(this)}/>
            <span className="title">{this.props.content.value}</span>
            <button onClick={this.delete.bind(this)}>删除</button>
        </div>)
    }

    delete(e){
        this.props.onDelete(e, this.props.content)
    }

    toggle(e){
        this.props.onToggle(e, this.props.content)
    }
}

export default TodoItem;