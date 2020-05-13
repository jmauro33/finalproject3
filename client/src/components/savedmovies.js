import React, { Component } from "react";
import Container from "./container";
import Nav from "./nav";
import Row from "./row";
import Col from "./col";
import Card from "./card";
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
      API.save(movieController)
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
              <Card>
               
               
              </Card>
            </Col>
            <Col size="md-4">
              <Card>
                
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }
  }
  
  export default AppContainer;
  