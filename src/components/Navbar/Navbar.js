import React, { Component } from 'react';
import {AppBar, Toolbar, Button, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {MenuItems} from "./MenuItems"
import './Navbar.css'
import "../../App.css";


class Navbar extends Component {
    state = {clicked: false}

    render (){
        return(
            <nav className = "NavbarItem">
                <h1 className ="navbar-logo">
                    <i className="fas fa-poo-storm">
                        </i>
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-poo-storm'}></i>
                </div>

                <ul>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}> 
                                <a className={item.Cname} href={item.url} >
                                    {item.title}
                                </a>
                            </li>
                            )
                        }
                    )
                    }
                
                    
                </ul>
            </nav>
        )
    }
}

export default Navbar