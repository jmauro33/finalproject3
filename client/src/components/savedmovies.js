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
      save: ""
    };
   
    handleSaveMovie = movieController => {
      API.save(movieController)
        .then(res => this.setState({ result: res.data }))
        .catch(err => console.log(err));
    }
   
  
  
  
    render() {
      return (
        <Container>
          <Nav></Nav>
          <Row>
            <Col size="md-8">
              <Card></Card>
            </Col>
            <Col size="md-4">
          

              
            </Col>
          </Row>
        </Container>
      );
    }
  }
  
  export default AppContainer;
  