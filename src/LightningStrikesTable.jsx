import React, { Component } from "react";
import {TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from "@material-ui/core";
import axios from "axios";
import "./App.css";

const API_USERNAME = process.env.REACT_APP_METEOMATICS_API_USERNAME
const API_PASSWORD = process.env.REACT_APP_METEOMATICS_API_PASSWORD

class LightningStrikesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  getCurrentDate() {
    var dateObj = new Date();
    var month = ('0' + (dateObj.getUTCMonth() + 1)).slice(-2);
    var day = ('0' + (dateObj.getUTCDate())).slice(-2);
    var year = dateObj.getUTCFullYear();

    return [month, day, year];
  }

  getLightningStrikes(month, day, year) {

    const apiUrl = `https://api.meteomatics.com/get_lightning_list?time_range=2021-04-19T00%3A00%3A00Z--${year}-${month}-${day}T00%3A00%3A00Z&bounding_box=42.01%2C-124.41_32.53%2C-114.13&format=json`

    console.log(apiUrl);

    axios
      .get(
        apiUrl,
        {
          auth: {
            username: API_USERNAME,
            password: API_PASSWORD
          }
        }
      )
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const [month, day, year] = this.getCurrentDate();
    this.getLightningStrikes(month, day, year);
    return (
      <div className="lightning-table">
        <h1>Lightning Strikes</h1>
        <TableContainer component={Paper}>
          <TableHead>
            <TableRow>
              <TableCell>Lightning </TableCell>
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

export default LightningStrikesTable;

