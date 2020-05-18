import React from 'react';
import AppContainer from "./components/Appcontainer";
import SavedMovies from "./components/savedmovies";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
function App() {
  return (<Router>
 

  
    <Switch>
      
      <Route path="/savedmovies">
        <SavedMovies/>
      </Route>
      <Route path="/">
        <AppContainer />
      </Route>
    </Switch>

</Router>)
  
}

export default App;
