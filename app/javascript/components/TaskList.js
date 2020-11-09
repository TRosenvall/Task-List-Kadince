import React from "react"
import PropTypes from "prop-types"
import Task from "./Task"
import NewRow from "./NewRow"
import Style from "../styles/style.css"

class TaskList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: this.props.tasks,

      newRows: []
    }

    this.newRowOnClick = this.newRowOnClick.bind(this)
  }

  newRowOnClick(event) {
    event.preventDefault();

    let newRows = this.state.newRows;
    newRows.push({ id: newRows.length});

    this.setState(state => ({
      newRows: newRows
    }));
  }

  deleteRowOnClick = (id) => {
    let newRows = this.state.newRows;
    let index = newRows.findIndex(newRow => newRow.id === id);
    newRows.splice(index, 1)

    this.setState(state => ({
      newRows: newRows
    }));
  }

  deleteTaskOnClick = (id) => {
    let tasks = this.state.tasks;
    let index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1)

    this.setState(state => ({
      tasks: tasks
    }));
  }

  render() {

    const taskList = this.state.tasks.map((task) =>
      <Task key={task.id.toString()} id={task.id} taskName={task.taskName} taskComplete={task.taskComplete} deleteTaskOnClick={event => this.deleteTaskOnClick(task.id)}/>
    );

    const newRows = this.state.newRows.map((newRow) =>
      <NewRow key={newRow.id.toString()} id={newRow.id} deleteRowOnClick={event => this.deleteRowOnClick(newRow.id)}/>
    );

    return (
      <React.Fragment>
        <div className="task">
          <div className="title">
            <h3>Task List</h3>
          </div>
          <div className="right">
            <button className="newButton" onClick={this.newRowOnClick}></button>
          </div>
          <br/>
        </div>
        {taskList}
        {newRows}
      </React.Fragment>
    );
  }
}

export default TaskList
