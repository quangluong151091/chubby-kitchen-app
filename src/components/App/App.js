import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import AppRouter from '../../RouterURL/AppRouter';
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />

          <AppRouter />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App
