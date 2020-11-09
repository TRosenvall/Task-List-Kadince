import React from "react"
import PropTypes from "prop-types"

class NewRow extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="task">
          <div className="inputLeft">
            <input className="newTaskField" placeholder="New Task..."></input>
          </div>
          <div className="right">
            <button className="acceptButton"></button>
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
