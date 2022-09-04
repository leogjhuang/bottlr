import React, { Component } from "react";
//import { Container, Button } from "reactstrap";
//import AppNavbar from "./AppNavbar";

class New extends Component {
  render() {
    return (
      <div className="row" style={{ "margin-top": "5vh" }}>
        <div className="col-md-8 offset-md-2">
          <h1>Create a New Bottle</h1>

          <form>
            <div className="mb-3">
              <label className="form-label">Title:</label>
              <input
                className="form-control"
                type="text"
                name="title"
                id="title"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="location">
                Origin of Message:
              </label>
              <input
                className="form-control"
                type="text"
                name="origin"
                id="location"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFileMultiple" className="form-label">
                File Upload:
              </label>
              <input
                className="form-control"
                type="file"
                id="formFileMultiple"
                name="file"
                multiple
              />
            </div>
            {/* <div className="mb-3">
                    <label className="form-label " htmlFor="price">Campground Price</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="price-label">$</span>
                        </div>
                        <input type="text" name="campground[price]"className="form-control" placeholder="0.00" id="price" aria-label="price" aria-describedby="price-label" required/>
                    </div>
                </div> */}

            <div className="mb-3">
              <label className="form-label" htmlFor="location">
                Message
              </label>
              <textarea
                name="message"
                type="text"
                id="textarea"
                style={{ height: "150px" }}
                className="form-control"
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <button className="btn btn-success">Add Bottle</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default New;
