import React, { Component } from "react";

export default class instructorFeedback extends Component {
    generateTableRow = feedback => {
        return (
          <tr key={feedback._id}>
                          <td>{feedback.instructorID}</td>
                          <td>{feedback.message}</td>
                          <td>{moment(feedback.timestamp).format("L")}</td>
                          <td>
                            <button className="btn btn-primary" onClick={this.editFeedback.bind(this, feedback._id)}>Edit</button>
                            </td>
                          <td>
                            <button className="btn btn-danger" onClick={this.deleteFeedback.bind(this, feedback._id)}>Delete</button>
                            </td> 
                        </tr>
        );
      };
    render() {
        return (
            <div className="container">
            <a href="/instructorFeedback">Instructor Feedback</a>
        <br></br>
        <div>
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
                <label>Instructor ID:</label>
                <input className="form-control" ref="instructorID" />
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
          <br></br>
        </form>
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th>Instructor ID</th>
                  <th>Message</th>
                  <th>Timestamp</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
            </table>
            </div>
            </div>
         </div>
        <br></br>
         <div className="row">
          <div className="col">
            <form>
              <label>
                Filter by instructor:
              </label>
              <input ref="filterInstructor" className="form-control" onChange={this.filterInstructor} />
            </form>
          </div>
        </div>
        </div>
       ) 
        }
    }

