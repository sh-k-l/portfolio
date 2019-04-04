import React, { Component } from 'react';

import './App.scss';

import Layout from './components/Layout';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <Layout>
        <Projects/>
        <Experience/>
        <About/>
        <Contact/>
      </Layout>
    );
  }
}

export default App;
