import React, { Component } from 'react';

import { Router } from 'react-router-dom';

import Main from './Components/Container/Main';

import ReactGA from 'react-ga';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory()

history.listen((location, action) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});


class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
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
      <Router history={history}> 
        <div>
          <button onClick={this.someTrackingHandler}>Trigger</button>
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
