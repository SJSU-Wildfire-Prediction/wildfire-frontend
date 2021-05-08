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
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Count</TableCell>
              <TableCell align="center">Lat</TableCell>
              <TableCell align="center">Lon</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">20210104 </TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">39.8</TableCell>
              <TableCell align="center">-122.3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">20210104 </TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">39.9</TableCell>
              <TableCell align="center">-122</TableCell>
            </TableRow>
          </TableBody>
        </TableContainer>
      </div>
    )
  }
}

export default csvread;