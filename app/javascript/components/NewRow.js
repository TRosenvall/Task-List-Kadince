import React from "react"
import PropTypes from "prop-types"

class NewRow extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="task">
          <div className="inputLeft">
            <input className="newTaskField" type="text" name="taskName" placeholder="New Task..." onChange={this.props.setTaskName} onFocus={this.props.clearTaskName} />
          </div>
          <div className="right">
            <button className="acceptButton" onClick={this.props.newTaskOnClick}></button>
            <button className="deleteButton" onClick={this.props.deleteRowOnClick}></button>
          </div>
          <br/>
        </div>
      </React.Fragment>
    );
  }
}

NewRow.propTypes = {
  taskName: PropTypes.string
};

export default NewRow
