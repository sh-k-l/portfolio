import React, { Component } from 'react';

import './App.scss';

import Layout from './components/Layout';
import Landing from './components/Landing';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <Layout>
        <Landing/>
        <Projects/>
        {/* <Experience/>
        <About/>
        <Contact/> */}
      </Layout>
    );
  }
}

export default App;
