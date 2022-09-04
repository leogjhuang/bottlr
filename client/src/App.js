import React, { Component } from "react";
// import Feed from './components/Feed'

import { Container } from "reactstrap";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import AppNavbar from "./components/AppNavbar";
import Main from "./components/Main.js";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <Main />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
