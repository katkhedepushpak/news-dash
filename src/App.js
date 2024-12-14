import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import Error404 from './components/Error404';
import ErrorBoundary from './components/ErrorBoundary';
import './components/css/News.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isDarkMode: false,
      selectedCountry: 'us', // Default country
      selectedCategory: 'general' // Default category
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

  handleCategoryChange = (category) => {
    this.setState({ selectedCategory: category });
  };

  render() {
    return (
      <div>
        <Router>
          <ErrorBoundary>
            <Navbar
              toggleDarkMode={this.toggleDarkMode}
              isDarkMode={this.state.isDarkMode}
              onCountryChange={this.handleCountryChange}
              selectedCountry={this.state.selectedCountry}
              onCategoryChange={this.handleCategoryChange}
            />
            <Routes>
            <Route exact path="/" key="general" element={<News apiKey={this.apiKey} country={this.state.selectedCountry} category="general" />} />
            <Route path="/business" key="business" element={<News apiKey={this.apiKey} country={this.state.selectedCountry} category="business" />} />
            <Route path="/technology" key="technology" element={<News apiKey={this.apiKey} country={this.state.selectedCountry} category="technology" />} />
            <Route path="/health" key="health" element={<News apiKey={this.apiKey} country={this.state.selectedCountry} category="health" />} />
            <Route path="/science" key="science" element={<News apiKey={this.apiKey} country={this.state.selectedCountry} category="science" />} />
            <Route path="/sports" key="sports" element={<News apiKey={this.apiKey} country={this.state.selectedCountry} category="sports" />} />
            <Route path="/entertainment" key="entertainment" element={<News apiKey={this.apiKey} country={this.state.selectedCountry} category="entertainment" />} />
            <Route path="*" key="404" element={<Error404 />} />
          </Routes>
          </ErrorBoundary>
        </Router>
      </div>
    );
  }
}

export default App;
