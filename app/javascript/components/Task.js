import React from "react"
import PropTypes, { string } from "prop-types"
import Style from "../styles/style.css"

class Task extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      taskName: this.props.taskName,
      taskComplete: this.props.taskComplete
    }

    this.taskComplete = this.taskComplete.bind(this)
  }

  taskComplete(event) {
    this.setState(state => ({
      taskComplete: !state.taskComplete
    }));

    const element = event.target;
    element.classList.toggle("taskButton")
    element.classList.toggle("taskButtonComplete");
  }

  render () {
    return (
      <div className="task">
        <div className="left">
          <button className={this.state.taskComplete?'taskButtonComplete':'taskButton'} onClick={this.taskComplete}>{this.state.taskName}</button>
        </div>
        <div className="right">
          <button className="editButton" onClick={this.props.editTaskOnClick}></button>
          <button className="deleteButton" onClick={this.props.deleteTaskOnClick}></button>
        </div>
        <br/>
      </div>
    );
  }
}

Task.propTypes = {
  taskName: PropTypes.string,
  taskComplete: PropTypes.bool
};

export default Task
