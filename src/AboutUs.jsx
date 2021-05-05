import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {AppBar, Toolbar, Button, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {Row, Col} from "reactstrap";


import ryota from './images/ryota.jpg';
import danielle from './images/danielle.jfif';
import matthew from './images/Matthew.jfif';
import sowmya from './images/Sowmya.jfif';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

class AboutUs extends Component {
    constructor(props) {
      super(props);
      this.state = {
  
      }
    }
  
    render() {
      //
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
          
            <Grid item sm={3}>
                <Typography variant="h4" color="inherit">
                   Meet the Team 29 Members
                </Typography>
            </Grid>    
                <Grid item sm={3}>
                <Row>
                    <div class="col-lg-4">
                        <div class="testimonial-item mx-auto mb-5 mb-lg-0 mx-10">
                            <img class="img-fluid rounded-circle mb-3" src={ryota} alt="Ryota" />
                            <h3>Ryota S.</h3>
                            <h4> Major: CMPE </h4>
                            <h5>Responsibilities: Facilitator, Data Gathering, API</h5>                         
                        </div>
                    </div>
            
                    <div class="col-lg-4">
                        <div class="testimonial-item mx-auto mb-5 mb-lg-0 mx-10">
                            <img class="img-fluid rounded-circle mb-3" src={matthew} alt="..." />
                            <h3>Matthew K.</h3>
                            <h4> Major: CMPE </h4>
                            <h5>Responsibilities: Technical Manager, Front-end, UI</h5>     
                        </div>
                    </div>
                </Row>
                </Grid>

                <Grid item sm={6}>
                    <Row>
                        <div class="col-lg-4">
                            <div class="testimonial-item mx-auto mb-5 mb-lg-0 mx-10">
                                <img class="img-fluid rounded-circle mb-3" src={sowmya} alt="..." />
                                <h3>Sowmya B.</h3>
                                <h4> Major: CMPE </h4>
                                <h5>Responsibilities: Coordinator, Back-end, Machine Learning</h5>     
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="testimonial-item mx-auto mb-5 mb-lg-0 mx-10">
                                <img class="img-fluid rounded-circle mb-3" src={danielle} alt="..." />
                                <h3>Danielle S.</h3>
                                <h4> Major: CMPE </h4>
                                <h5>Responsibilities: Lead, Front-end, Data Gathering</h5>     
                            </div>
                        </div>
                    </Row>
                </Grid>
             </Grid>
        </div>    
      )
    }
  }
  
  export default AboutUs;