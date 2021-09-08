
// Import for libraries
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import './App.css';

//Import for pages
import MainLanding from './components/mainPage/main'

class App extends Component {


  // Handle change Route
  changeRoute = () => {
    this.setState({
      route: '',
    });
  };

  render() {
    return this.state.route === '/' && this.state.routes.indexOf(window.location.pathname) === -1 ? (<Route exact path='/' render={(props) => <MainLanding changeRoute={this.changeRoute} {...props} />} />) : (
      <div> 
        
      </div>
    )
  }
}

export default withRouter(App)