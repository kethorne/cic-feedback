import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withTracker } from "meteor/react-meteor-data";
import { Feedback } from "../api/feedback";
import moment from "moment"

class App extends Component {
  createFeedback = event => {
    event.preventDefault();
    const studentID = ReactDOM.findDOMNode(this.ref.studentID).value;
    const message = ReactDOM.findDOMNode(this.refs.message).value;

    Feedback.insert({ studentID, message, timestamp: new Date() });

    ReactDOM.findDOMNode(this.ref.message).value = "";
    ReactDOM.findDOMNode(this.ref.studentID).value = "";
  };
  render() {
    // console.log(this.props.feedback);
    return (
      <div className="container">
        <form onSubmit={this.createFeedback}>
          <div className="row">
            <div className="col-md">
              <div className="form-group">
                <label>Message:</label>
                <input className="form-control" ref="message" />
              </div>
            </div>
            <div className="col-med">
              <div className="form-group">
                <label>Student ID:</label>
                <input className="form-control" ref="studentID" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <button type="submit" className="btn btn-primary">
                Save Feedback
              </button>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {this.props.feedback.map(feedback => {
                  return (
                    <tr key={feedback._id}>
                      <td>{feedback.studentID}</td>
                      <td>{feedback.message}</td>
                      <td>{moment(feedback.timestamp).format("L")}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    feedback: Feedback.find({}).fetch(),
  };
})(App);
