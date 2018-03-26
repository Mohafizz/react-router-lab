import React, { Component } from "react";
import "./App.css";
import MyApp from "./MyApp";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./HomePage";
import TacosFeed from "./TacosFeed";
import TwitterFeed from "./TwitterFeed";
import TacoDetails from "./TacoDetails";
import SpecialTacoPage from "./SpecialTacoPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <MyApp />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/tacos" component={TacosFeed} />
          <Route exact path="/twitter" component={TwitterFeed} />
          <Route exact path="/tacos/:id" component={TacoDetails} />
          <Route exact path="/special-tacos-page" component={SpecialTacoPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
