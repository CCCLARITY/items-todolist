import React, {Component} from 'react';

class TodoInput extends Component{
    render(){
        return <input type="text" value={this.props.content}
        onChange={this.change.bind(this)}
        onKeyPress={this.submit.bind(this)} />
    }

    change(e){
        this.props.onChange(e)
    }

    submit(e){
        if(e.key === 'Enter'){
            this.props.onSubmit(e);
        }
    }
};

export default TodoInput;