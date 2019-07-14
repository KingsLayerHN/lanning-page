import React, { Component } from 'react';
import Principal from './components/Principal';
import Discover from './components/Discover';
import Ipad from './components/Ipad';
import Elements from './components/Elements';

class App extends Component {

  render() {
    return (
      <div>
        <Principal />
        <Discover />
        <Ipad />
        <Elements />
      </div>
    )
  }
}
export default App; 