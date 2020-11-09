import React from "react"
import PropTypes from "prop-types"
import Task from "./Task"

class TaskList extends React.Component {
  render () {

    const taskList = this.props.tasks.map((task) =>
      <Task key={task.id.toString()} id={task.id} taskName={task.taskName} taskComplete={task.taskComplete} />
    );

    return (
      <React.Fragment>
        <span>
          TASK LIST <br/>
        </span>
        {taskList}
      </React.Fragment>
    );
  }
}

export default TaskList
