import React, { Component } from "react";
import axios from "axios";
import "./App.css"
import {Input, InputGroup, InputGroupAddon, Button } from "reactstrap";
import {Row, Col} from "reactstrap";

const BACKEND_API = process.env.REACT_APP_BACKEND_API

class MLTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lon: null,
      testOutput: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    var lat = Math.abs(this.state.lat);
    var lon = Math.abs(this.state.lon);

    this.setState({
      testOutput: ""
    });

    axios
      .get(BACKEND_API + `/ml?lat=${lat}&lon=${lon}`)
      .then(resp => {
        console.log(resp.data)
        console.log(resp.status)
        if (resp.status === 200) {
          this.setState({
            testOutput: `Machine Learning Output: ${resp.data.MLOutput}`
          })
        } else {
          this.setState({
            testOutput: "Error calculating. Please try again"
          })
        }
      })
      .catch(err => {
        this.setState({
          testOutput: "Error calculating. Please try again"
        })
        console.log(err);
        if (err.message) {
          console.log(err.message);
        }
      })

  }

  render() {
    return (
      <div className="ml-test-div">
        <Row>
          <InputGroup>
            <Input
              id="lat"
              name="lat"
              placeholder="Latitude"
              onChange={this.handleChange}
              value={this.state.lat}
            />
            <Input
              id="lon"
              name="lon"
              placeholder="Longitude"
              onChange={this.handleChange}
              value={this.state.lon}
            />
            <InputGroupAddon addonType="append">
              <Button
                className="btn-ml"
                type="submit"
                onClick={this.handleSubmit}
                disabled={this.state.lat == "" || this.state.lon == ""}
              >
              Submit
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Row>
        <Row>
          {/* <span>This is to demo our ML model. Output will give either a 0 or 1</span> */}
          <span>Output: {this.state.testOutput}</span>
        </Row>
      </div>
    )
  }
}

export default MLTest;
