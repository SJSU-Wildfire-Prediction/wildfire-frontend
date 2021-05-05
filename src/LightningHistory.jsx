import React, { Component } from "react";
import {TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from "@material-ui/core";
import axios from "axios";
import "./App.css";

const API_USERNAME = process.env.REACT_APP_METEOMATICS_API_USERNAME
const API_PASSWORD = process.env.REACT_APP_METEOMATICS_API_PASSWORD

class LightningHistory extends Component {
    constructor(props) {
      super(props);
      this.state = {
  
      }
    }
  
    render() {
      //
      return (
        <div></div>
      )
    }
  }
  
  export default LightningHistory;