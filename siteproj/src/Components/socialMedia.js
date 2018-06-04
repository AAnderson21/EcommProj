import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './socialMedia.css';

class SocialMedia extends Component {
    render() {
        return (
<div className="s-m">
      <Link to="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
      <Link to="https://twitter.com/"><i className="fab fa-twitter"></i></Link>
      <Link to="https://www.youtube.com/"><i className="fab fa-youtube"></i></Link>
      <Link to="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link>
    </div>
        );
    }
}

export default SocialMedia;