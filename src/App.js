import { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello Andre Ashmeade",
      newTodo: "",
      todos: [
        {
          title: "Learn React",
          done: false,
        },
        {
          title: "Learn JSX",
          done: false,
        },
      ],
    };
  }

  newTodoChanged(event) {
    this.setState({
      newTodo: event.target.value,
    });
  }

  formSubmitted(event) {
    event.preventDefault();
    this.setState({
      newTodo: "",
      todos: [
        ...this.state.todos,
        {
          title: this.state.newTodo,
          done: false,
        },
      ],
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  }

  toggleTodoDone(event, index) {
    const todos = [...this.state.todos]; // copy the array
    todos[index] = { ...todos[index] }; // copy the todo can also use Object.assign
    todos[index].done = event.target.checked; // update done property copied todos
    this.setState({
      todos,
    });
  }

  allDone() {
    const todos = this.state.todos.map((todo) => {
      return {
        title: todo.title,
        done: true,
      };
    });

    this.setState({
      todos,
    });
  }

  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <NewTodoForm
          newTodo={this.state.newTodo}
          formSubmitted={this.formSubmitted.bind(this)}
          newTodoChanged={this.newTodoChanged.bind(this)}
        />
        <button onClick={() => this.allDone()}>All Done</button>
        <TodoList
          todos={this.state.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.removeTodo.bind(this)}
        />
      </div>
    );
  }
}

export default App;
