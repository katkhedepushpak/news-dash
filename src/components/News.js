import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import Spinner from './Spinner'; // Ensure the path is correct

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      country: this.props.country
    };
  }

  async componentDidMount() {
    this.fetchArticles();
  }
  fetchArticles = async () => {
    console.log("apiKey", this.props.apiKey); 
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=12`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });

    window.scrollTo(0, 0); 
  };

  handlePrevClick = async () => {
    this.setState(
      (prevState) => ({
        page: prevState.page - 1
      }),
      this.fetchArticles
    );
  };

  handleNextClick = async () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1
      }),
      this.fetchArticles
    );
  };

  render() {
    
    const { page, totalResults } = this.state;
    const totalPages = Math.ceil(totalResults / 12);

    return (
      <>
      <div className="container my-3">
        <div className="text-center">

        <h2 classname="text-center">News Dash Top Headlines</h2>
        </div>

        {this.state.loading && <Spinner></Spinner>}
        <div className="row my-3">
          {!this.state.loading && this.state.articles.map((article, index) => (
            console.log(index),
            <div className="col-12 col-md-6 col-lg-4 my-3" key={index}>
              <NewsItem
                title={article.title}
                description={article.description ? article.description.slice(0, 130) : "Visit the news article site for more details"}
                imgUrl={article.urlToImage}
                newsUrl={article.url}
              />

   
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-between mb-4">
        <button disabled={page<=1} type="button" className="btn btn-grey float-right mx-2 my-2" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark float-right mx-2 my-2" onClick={this.handleNextClick} disabled={page >= totalPages}>Next &rarr; </button>
       
        </div>

        
      </div>
      <footer class="bg-dark text-white text-center py-3 mt-4">
          <div class="container">
            <p>&copy; 2024 News Dash Company. This is a learning project.</p>
          </div>
      </footer>
      </>
    );
  }
}

export default News;
