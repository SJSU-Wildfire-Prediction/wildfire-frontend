import React, { Component } from "react";
import $ from "jquery"
import { TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from "@material-ui/core";
import axios from "axios";
import "../App.css";
import lightning from './dataFiles/2021Lightning.csv';

class csvread extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  getCsvData(input) {
    // need to fix this
    var data = $.csv.toObjects(input);
  }

  render() {
    return (
      <div className="lightning-history">
        <h1>Lightning History</h1>
        <TableContainer component={Paper}>
          <TableHead>
            <TableRow>
              <TableCell>Lightning </TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Count</TableCell>
              <TableCell align="right">Lat</TableCell>
              <TableCell align="right">Lon</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

          </TableBody>
        </TableContainer>
      </div>
    )
  }
}

export default csvread;