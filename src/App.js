import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      tasks,
    }
  }

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  toggleTask = taskId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if(task.id === taskId) {
          return {
          ...task,
          completed: !task.completed
      };
    } else {
      return task;
    }
        })
      })

  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(task => task.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
          addTask={this.addTask} 
          clearCompleted = {this.clearCompleted}
        />
        <TodoList 
          toggleTask = {this.toggleTask}
          tasks = {this.state.tasks}
        />
      </div>
    );
  }
}

export default App;
