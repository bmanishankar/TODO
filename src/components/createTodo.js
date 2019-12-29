import React, { Component } from "react";
import uuid from "uuid";

class CreateTodo extends Component {
  state = {
    priority: "",
    description: "",
    title: "",
    index: ""
  };
  handlChange = event => {
    console.log(event.target);
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleClick = async () => {
    let id = await uuid.v4();
    this.setState({
      index: id
    });
    console.log(this.state);
    let todos = localStorage.getItem("todos");
    console.log(todos);
    if (todos === null) {
      let newList: [];
      newList.push(this.state);
      console.log(newList);
      localStorage.setItem("todos", JSON.stringify(newList));
    } else {
      let updatedTodos = JSON.parse(todos);
      console.log(updatedTodos);
      updatedTodos.push(this.state);
      console.log(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h4>Add your tasks here</h4>
        <input
          type="text"
          name="title"
          placeholder="Enter your title"
          onChange={this.handlChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Enter description"
          onChange={this.handlChange}
        />
        <input
          type="number"
          name="priority"
          placeholder="give priority"
          onChange={this.handlChange}
        />
        <button onClick={this.handleClick}>Add to your list</button>
      </div>
    );
  }
}

export default CreateTodo;
