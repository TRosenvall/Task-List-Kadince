import React from "react"
import PropTypes from "prop-types"
import Style from "../styles/style.css"

class Task extends React.Component {
  constructor(props) {
    super(props)

    this.taskComplete = this.taskComplete.bind(this)
  }

  taskComplete(event) {
    const element = event.target;
    element.classList.toggle("crossed-line");
  }

  render () {
    return (
      <React.Fragment>
        <button onClick={this.taskComplete}>{this.props.taskName}</button><br/>
      </React.Fragment>
    );
  }
}

Task.propTypes = {
  taskName: PropTypes.string,
  taskComplete: PropTypes.bool
};
export default Task
