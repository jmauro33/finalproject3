import React, { Component } from "react";
import Container from "./container";
import Nav from "./nav";
import Row from "./row";
import Col from "./col";
import Card from "./card";
import SearchForm from "./Search";
import SearchDetails from "./SearchDetails";
import API from "../utils/API";

class AppContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  
  componentDidMount() {
    this.searchMovies("");
  }

  searchMovies = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };
  handleSaveMovie = movieController => {


    const movieData = { 
         title: movieController.Title,
         imageURL: movieController.Poster,
         director: movieController.Director,
         plot: movieController.Plot,
         date: movieController.Released
       }

    API.save(movieData)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  }
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };

  render() {
    return (
      <Container>
        <Nav></Nav>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Search for a Movies or TV Show to Begin"}
            >
              {this.state.result.Title ? (
                <SearchDetails
                  title={this.state.result.Title}
                  src={this.state.result.Poster}
                  director={this.state.result.Director}
                  genre={this.state.result.Genre}
                  released={this.state.result.Released}
                  plot={this.state.result.Plot}
                  handleSaveMovie={()=> this.handleSaveMovie(this.state.result)}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AppContainer;
