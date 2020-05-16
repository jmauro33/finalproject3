import React, { Component } from "react";
import Container from "./container";
import Nav from "./nav";
import Row from "./row";
import Col from "./col";
import Card from "./card";

import API from "../utils/API";

class AppContainer extends Component {
    state = {
      result: {}
    };

    componentDidMount() {
      // call API.retrive
      // update the state with the resutls
    }
     
    render() {
      return (
        <Container>
          <Nav></Nav>
          {/* loop and display the state.results */}
        </Container>
      );
    }
  }
  
  export default AppContainer;
  