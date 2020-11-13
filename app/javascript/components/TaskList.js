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
      newRows: [],
      currTask: null
    }

    this.newRowOnClick = this.newRowOnClick.bind(this)
    this.setTaskName = this.setTaskName.bind(this)
    this.clearTaskName = this.clearTaskName.bind(this)
  }

  newRowOnClick(event) {
    event.preventDefault();

    let newRows = this.state.newRows;
    newRows.push({ id: newRows.length, taskName: ''});

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

  setTaskName(id) {
    let newRows = this.state.newRows;
    let index = newRows.findIndex(newRow => newRow.id === id);
    newRows[index].taskName = event.target.value
    
    this.setState(state => ({
      currTask: event.target.value
    }));
  }

  clearTaskName(event) {
    this.setState(state => ({
      currTask: event.target.value
    }));
  }

  newTaskOnClick = (id) => {
    let tasks = this.state.tasks;
    let taskName = this.state.currTask
    
    let max = 0;
    this.state.tasks.forEach(task => {
      if (task.id > max) {
        max = task.id;
      }
    });
    max += 1

    let task = {id: max, taskName: taskName, taskComplete: false}
    tasks.push( task )

    this.setState(state => ({
        tasks: tasks
    }));

    let newRows = this.state.newRows;
    let index = newRows.findIndex(newRow => newRow.id === id);
    newRows.splice(index, 1)

    this.setState(state => ({
      newRows: newRows
    }));
  }

  editTaskOnClick = (id) => {
    let tasks = this.state.tasks;
    let index = tasks.findIndex(task => task.id === id);
    let currTask = tasks[index].taskName
    tasks.splice(index, 1)

    let newRows = this.state.newRows;
    newRows.push({ id: newRows.length, taskName: currTask});

    this.setState(state => ({
      tasks: tasks,
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
      <Task key={task.id.toString()} id={task.id} taskName={task.taskName} taskComplete={task.taskComplete} editTaskOnClick={event=> this.editTaskOnClick(task.id)} deleteTaskOnClick={event => this.deleteTaskOnClick(task.id)}/>
    );

    const newRows = this.state.newRows.map((newRow) =>
      <NewRow key={newRow.id.toString()} id={newRow.id} taskName={newRow.taskName} setTaskName={event => this.setTaskName(newRow.id)} clearTaskName={this.clearTaskName} newTaskOnClick={event => this.newTaskOnClick(newRow.id)} deleteRowOnClick={event => this.deleteRowOnClick(newRow.id)}/>
    );

    return (
      <React.Fragment>
        <div className="task">
          <div className="title">
            <h3 className="taskListTitle">Task List</h3>
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
