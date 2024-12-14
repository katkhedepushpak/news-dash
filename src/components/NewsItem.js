import React, { Component } from "react";

import "./css/NewsItem.css";


export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    let defaultImgUrl= './img/logo.png'
    return (
      <div className="mx-1">
        <div className="card fixed-height-card" style={{ width: "23rem" }}>
          <img src={!imgUrl?defaultImgUrl:imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <hr />
            <div className="card-text-container">
              <p className="card-text">{description}...</p>
            </div>
            <a
                href={newsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary"
            > 
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
