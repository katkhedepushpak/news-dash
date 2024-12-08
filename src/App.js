import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import './components/css/News.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isDarkMode: false,
      selectedCountry: 'us' // Default country
    };
  }

  apiKey = '7e41a51979ee4cd49e141ac9ee174eab';

  toggleDarkMode = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode }, () => {
      if (this.state.isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });
  };

  handleCountryChange = (countryCode) => {
    this.setState({ selectedCountry: countryCode });
  };

  render() {
    return (
      <div>
        <Navbar
          toggleDarkMode={this.toggleDarkMode}
          isDarkMode={this.state.isDarkMode}
          onCountryChange={this.handleCountryChange}
        />
        <News apiKey={this.apiKey} country={this.state.selectedCountry} />
      </div>
    );
  }
}

export default App;
