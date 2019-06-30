import React from "react";
import "./App.css";
import firebase, {db} from "./firebase";
import Title from "./Title";
import InputTodo from "./InputTodo";
import TodoItems from "./TodoItems";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoInput: "",
      list: []
    };
  }

  componentWillMount() {

  }

  addTodoList = () => {
    if (this.state.todoInput !== "") {
      this.setState({
        list: [
          ...this.state.list,
          { detail: this.state.todoInput, isDone: false }
        ],
        todoInput: ""
      });
    }
  };

  handleTodoOnchange = event => {
    this.setState({ todoInput: event.target.value });
  };

  deleteList = index => {
    let tempDel = this.state.list;
    tempDel.splice(index, 1);
    console.log(tempDel);
    this.setState({ list: tempDel });
  };

  handleTodoDone = index => {
    let tempDo = this.state.list;
    console.log(tempDo);
    tempDo[index].isDone = !tempDo[index].isDone;
    this.setState({ list: tempDo });
  };

  render() {
    return (
      <div className="App">
        <Title title="To do List with Component" />
        <InputTodo
          value={this.state.todoInput}
          onChange={this.handleTodoOnchange}
          onClick={this.addTodoList}
        />
        {this.state.list.map((val, index) => (
          <TodoItems
            key={index}
            val={val}
            index={index}
            handleTodoDone={this.handleTodoDone}
            deleteList={this.deleteList}
          />
        ))}
        <Title title="Todo List with Firebase" />
      </div>
    );
  }
}

export default App;
