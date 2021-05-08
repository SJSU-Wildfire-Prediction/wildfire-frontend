import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { Row, Col } from "reactstrap";
import Navbar from "./components/Navbar/Navbar";
import csvread from "./components/csvread";
import LoadingSpinner from "./LoadingSpinner";
import LightningStrikesTable from "./LightningStrikesTable";
import { lightningData } from "./components/dataFiles/2021lightning";

const API_USERNAME = process.env.REACT_APP_METEOMATICS_API_USERNAME
const API_PASSWORD = process.env.REACT_APP_METEOMATICS_API_PASSWORD

class LightningHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div class=''>

        <Grid container spacing={8}>
          <Grid item xs={12}>
            <AppBar className="general-top-bar" position="absolute">
              <Toolbar className="topbar-toolbar">
                <Typography variant="h5" color="inherit">
                  <b>SJSU</b> CMPE '21
                  </Typography>
                <Typography variant="h5" color="inherit">
                  Wildfire Analysis Through Lightning
                  </Typography>

                <Typography variant="h5" color="inherit">
                  History Data
                  </Typography>

                <Typography variant="h5" color="inherit">
                  Group 29
                  </Typography>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item sm={15}>
            <Row>
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
            </Row>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default LightningHistory;