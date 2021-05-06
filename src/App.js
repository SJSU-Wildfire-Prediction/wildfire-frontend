import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Grid } from "@material-ui/core";

import Dashboard from "./Dashboard"
import LightningHistory from "./LightningHistory"
import AboutUs from "./AboutUs"
import Navbar from "./components/Navbar/Navbar"

require('dotenv').config();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null,
    };
  }

  componentDidMount() {
    document.title = "Wildfire Lightning";
    const token = localStorage.getItem("User-Access-Token");
    this.setState({
      token: token,
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App-header">
          <Navbar/>
          {/* <Grid container spacing={8}> */}
            <Route
              exact
              path="/dashboard"
              component={Dashboard}
              // render={() => Dashboard}
            />
            <Route
              exact
              path="/aboutus"
              component={AboutUs}
              // render={() => AboutUs}
            />
            
             <Route
              exact
              path="/LightningHistory"
              component={LightningHistory}
            />
          {/* </Grid> */}
        </div>
      </BrowserRouter>
    )
  }

}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
