import React from 'react'

class TodoForm extends React.Component{
  constructor() {
    super();
    this.state = {
      newTask: ''
    }
  }

  handleChanges = e => {
    this.setState({
      newTask: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.newTask);
    this.setState({
        newTask:''
    })
  }

  render(){
      return (
          <div>
          <form onSubmit={this.handleSubmit}>
              <input
                type = 'text'
                name = 'task'
                value = {this.state.newTask}
                onChange = {this.handleChanges}
              />
              <button>Add Todo</button>
          </form>
          <button 
            className = 'clear-btn'
            onClick = {this.props.clearCompleted}>
                Clear Completed
          </button>

          </div>
      )
  }
}

export default TodoForm