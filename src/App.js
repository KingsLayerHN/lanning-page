import React, { Component } from 'react';
import Principal from './components/Principal';
import Discover from './components/Discover';
import Ipad from './components/Ipad';
import Elements from './components/Elements';
import Integrated from './components/Integrated';
import Footer from './components/Footer';

import Carrousel from './components/Carrousel';
import { far } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';


library.add(far, fab); //agrega los prefijos para usar fontAwesomeregular y brands respectivamente

class App extends Component {

  render() {
    return (
      <div className="pincipal-content">
        <Principal />
        <Discover />
        <Ipad />
        <Elements />
        <Carrousel />
        <Integrated />
        <Footer />
      </div>
    )
  }
}
export default App; 