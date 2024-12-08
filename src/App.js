import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import './components/css/News.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      isDarkMode: false
    };
  }

  toggleDarkMode = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode }, () => {
      if (this.state.isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });
  };

  render() {
    return (
      <div className={this.state.isDarkMode ? 'dark-mode' : ''}>
        <Navbar toggleDarkMode={this.toggleDarkMode} isDarkMode={this.state.isDarkMode} />
        <News />
      </div>
    );
  }
}

export default App;
