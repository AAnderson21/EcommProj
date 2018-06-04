import React, { Component } from 'react';
import './footer.css';


class Footer extends Component {
    render() {
        return (
<footer className="footer fixed-bottom">
      <div className="container">
        <span className="text-muted font-weight-light">Writing With Wood &#169; {new Date().getFullYear()}</span>
      </div>
    </footer>
        );
    }
}

export default Footer;