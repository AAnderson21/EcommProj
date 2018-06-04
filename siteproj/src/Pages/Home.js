import React, { Component } from "react";
import NavBar from '../Components/navBar';
import Carousel from '../Components/carousel';
import Footer from '../Components/footer';

class Home extends Component {
    render() {
      return (
        <div>
          <NavBar />
            <div className="container">
            <Carousel />
            <h2> PENCILS</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum est sit amet risus posuere lobortis. Cras et ligula eleifend, elementum mi et, placerat est. Pellentesque sed mauris non neque fermentum dapibus ut in nulla. Curabitur sit amet convallis quam. Vestibulum pretium velit quis purus facilisis ullamcorper. 
                Quisque bibendum gravida sem, laoreet consequat tellus pulvinar iaculis. Vestibulum vulputate tempus tortor nec fringilla.
            </p>
            </div>
            <Footer />
        </div>
      );
    }
  }
  
  export default Home;