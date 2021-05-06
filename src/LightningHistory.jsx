import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {AppBar, Toolbar, Button, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {Row, Col} from "reactstrap";
import Navbar from "./components/Navbar/Navbar";

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
        <div class = ''>
        
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
                    Group 29
                  </Typography>
                </Toolbar>
              </AppBar>
            </Grid>

            <Grid item xs={12}></Grid>
            <Grid item xs={1}></Grid>



             
             </Grid>
        </div>    
      )
    }
  }
  
  export default LightningHistory;