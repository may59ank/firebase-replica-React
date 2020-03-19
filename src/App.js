import React, { Component } from 'react'
import './scss/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Features from './components/Features';
import Challenges from './components/Challenges';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebook, faAndroid } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faArrowAltCircleRight, fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee, faFacebook, faAndroid );
library.add(fas, faArrowAltCircleRight);

class App extends Component {
  render() {
    return (
      <>
      <Features />
      <Challenges />
      </>
    )
  }
}

export default App;
