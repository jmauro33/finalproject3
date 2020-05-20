import React, { Component } from "react";
import Container from "./container";
import Nav from "./nav";
import Row from "./row";
import Col from "./col";
import Card from "./card";
import SearchDetails from "./SearchDetails";
import API from "../utils/API";
import DeleteBtn from "./deleteBtn";
class AppContainer extends Component {
    state = {
      result: {}
    };

    componentDidMount() {
      console.log ("Test")
      API.retrive().then((results)=>{
      console.log(results);
        this.setState({result:results.data})
      })
      
    }
    handleDeleteMovie(){
      console.log ("Test")
      API.delete().then((results)=>{
        this.setState({result:results.data})
      })
    }


    render() {
      return (
        <Container>
          <Nav></Nav>
          <Row>
          {this.state.result.length > 0 ? this.state.result.map (movie => {
            return (
              <SearchDetails
                title={movie.title}
                src={movie.imageURL}
                director={movie.director}
                genre={movie.genre}
                released={movie.released}
                plot={movie.plot}
                isSaved = {true}
                handleDeleteMovie={()=> this.handleDeleteMovie(this.state.result)}
              />
            ) 
          }): (
                <h3>No Results to Display</h3>
              )}
          </Row>
        </Container>
      );
    }
  }
  
  export default AppContainer;
  