import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
import SocialMedia from './socialMedia';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light flex-column flex-md-row bd-navbar">
            <Link className="navbar-brand mr-0 mr-md-2" to=""><SocialMedia /></Link>
            
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav bd-navbar-nav flex-row">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">Pencils</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">Pencils</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">Writing with Wood</Link>
                </li>
                </ul>
            </div>
            
                <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Login/SignUp
                  </Link>
                  
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <form class="px-4 py-3">
                    <div class="form-group">
                        <label for="exampleDropdownFormEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                    </div>
                   <div class="form-group">
                        <label for="exampleDropdownFormPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                   </div>
                   <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="dropdownCheck" />
                        <label class="form-check-label" for="dropdownCheck">Remember me</label>
                   </div>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
                    <div>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" to="/">New around here? Sign up</a>
                        <a class="dropdown-item" to="/">Forgot password?</a>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sale">Pricing</Link>
                </li>
                
              </ul>
           </nav> 
        );
    }
}

export default NavBar;