import React from 'react';
import { Route } from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

// Import nav component
import Nav from './components/Nav';

export default class Main extends React.Component {
  render() {
    return(
      <div className="warapper">
        <Nav />
        
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/portpolio" component={Portfolio} />
      </div>
    );
  }
}