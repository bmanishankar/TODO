import React, { Component } from "react";

class ListTodo extends Component {
  state = {
    todos: []
  };

  componentWillMount() {
    console.log(localStorage["todos"]);
    this.setState({
      tudos: JSON.parse(localStorage.getItem("todos"))
    });
  }

  render() {
    let x = this.state.todos.map(data => {
      return (
        <div>
          <h1>data.title</h1>
          <h2>data.description</h2>
          <h2>data.priority</h2>
        </div>
      );
    });
    return <h4> {x} ListTodo</h4>;
  }
}

export default ListTodo;
