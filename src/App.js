import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';

import Main from './Components/Container/Main';

import ReactGA from 'react-ga';



class App extends Component {
  constructor(props) {
    super(props);

    ReactGA.initialize('UA-149928935-1');
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  someTrackingHandler = () => {
    ReactGA.event({
      category: "User",
      action: "button clicked"
    });
  }

  render() {
    return (
      <BrowserRouter> 
        <div>
          <button onClick={this.someTrackingHandler}>Trigger</button>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
