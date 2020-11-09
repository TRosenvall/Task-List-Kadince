import React from "react"
import PropTypes from "prop-types"
class Task extends React.Component {
  render () {
    return (
      <React.Fragment>
        <button>{this.props.taskName}</button><br/>
      </React.Fragment>
    );
  }
}

Task.propTypes = {
  taskName: PropTypes.string,
  taskComplete: PropTypes.bool
};
export default Task
