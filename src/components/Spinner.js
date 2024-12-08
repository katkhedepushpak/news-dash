import React, { Component } from 'react';
import loading from './loading.gif';

export class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <img src={loading} alt="Loading..." />
          </div>
        </div>
      </div>
    );
  }
}

export default Spinner;
