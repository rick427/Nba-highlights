import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Header />
          <Route exact path="/" component={Home} />
          <Footer />
        </>
      </Router>
    )
  }
}

export default App;
