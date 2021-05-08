import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {AppBar, Toolbar, Button, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {Row, Col} from "reactstrap";


import data from './images/data.png';

const style = { height: "270px" };

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

class AboutModel extends Component {
    constructor(props) {
      super(props);
      this.state = {
  
      }
    }
  
    render() {
      //
      return (
        <div class = ''>

                
                <Grid item xs={8}>
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

                <Grid item sm={3}>
                    <Row>
                    <div class = "relative">
                        <h1 align = "center">Sample data</h1>
                        <img class="img-fluid rounded-circle mb-3" src={data} style={style} alt="data" />                            
                    </div>
                    </Row>
                </Grid>

                <Grid item sm={8}>
                    <Row>
                    <h1>Models Tested on Data</h1>
                    <Grid item sm={8}>
                    <TableContainer component={Paper}>
                    <TableHead>
                        <TableRow>
                        <TableCell>Model </TableCell>
                        <TableCell align="right">Accuracy</TableCell>
                        <TableCell align="right">Precision</TableCell>
                        <TableCell align="right">Recall</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                        <TableCell>Logistic Regression </TableCell>
                        <TableCell align="right">0.903</TableCell>
                        <TableCell align="right">0.98</TableCell>
                        <TableCell align="right">0.93</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell>Random Forest </TableCell>
                        <TableCell align="right">0.902</TableCell>
                        <TableCell align="right">0.99</TableCell>
                        <TableCell align="right">0.908</TableCell>
                        </TableRow>
                    </TableBody>
                    </TableContainer>
                    </Grid>
                    </Row>
                </Grid>
        </div>    
      )
    }
  }
  
  export default AboutModel;