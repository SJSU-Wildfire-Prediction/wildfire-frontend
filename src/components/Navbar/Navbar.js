import React, { Component } from 'react';
import {MenuItems} from "./MenuItems"
import './Navbar.css'
import "../../App.css";
import {Button} from "../Button"


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
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
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
                <Button></Button>
            </nav>

        )
    }
}

export default Navbar