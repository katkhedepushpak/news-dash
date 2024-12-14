import React, { Component } from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    const savedMode = localStorage.getItem('mode') || 'dark';
    this.state = {
      mode: savedMode
    };
    document.body.className = savedMode;
  }

  handleCountrySelect = (countryCode) => {
    this.props.onCountryChange(countryCode);
  };

  handleCategorySelect = (category) => {
    this.props.onCategoryChange(category);
  };

  toggleMode = () => {
    const newMode = this.state.mode === 'dark' ? 'light' : 'dark';
    this.setState({ mode: newMode });
    document.body.className = newMode;
    localStorage.setItem('mode', newMode);
  };

  render() {
    const countryCodes = [
      'ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'
    ];

    const selectedCountry = this.props.selectedCountry;

    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${this.state.mode} bg-${this.state.mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src="/img/logo-1.png" alt="Logo" className={`logo-${this.state.mode}`} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/business" onClick={() => this.handleCategorySelect('business')}>
                    Business
                  </Link>
                </li>
                <span className="nav-separator">|</span>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology" onClick={() => this.handleCategorySelect('technology')}>
                    Technology
                  </Link>
                </li>
                <span className="nav-separator">|</span>
                <li className="nav-item">
                  <Link className="nav-link" to="/health" onClick={() => this.handleCategorySelect('health')}>
                    Health
                  </Link>
                </li>
                <span className="nav-separator">|</span>
                <li className="nav-item">
                  <Link className="nav-link" to="/science" onClick={() => this.handleCategorySelect('science')}>
                    Science
                  </Link>
                </li>
                <span className="nav-separator">|</span>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports" onClick={() => this.handleCategorySelect('sports')}>
                    Sports
                  </Link>
                </li>
                <span className="nav-separator">|</span>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment" onClick={() => this.handleCategorySelect('entertainment')}>
                    Entertainment
                  </Link>
                </li>
              </ul>
              <div className="d-flex ms-auto small-nav-size">
                <div className="form-check form-switch me-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="modeSwitch"
                    checked={this.state.mode === 'dark'}
                    onChange={this.toggleMode}
                    style={{ backgroundColor: this.state.mode === 'dark' ? 'red' : '' }}
                  />
                  <label className="form-check-label" htmlFor="modeSwitch">
                    {this.state.mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
                  </label>
                </div>
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className={`flag-icon flag-icon-${selectedCountry}`}></span> {selectedCountry.toUpperCase()}
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                      {countryCodes.map((code) => (
                        <li key={code}>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => this.handleCountrySelect(code)}
                          >
                            <span className={`flag-icon flag-icon-${code}`}></span> {code.toUpperCase()}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
                <form className="d-flex ms-3" role="search">
                  <input
                    className="form-control me-2 small-nav-size"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-light small-nav-size" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
