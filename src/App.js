
// Import for libraries
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import './App.css';

//Import for pages
import MainLanding from './components/mainPage/main'

//Import For Auto Pages 
import AutoLandingPage from './components/Auto/autov2_0.1/autoLanding.jsx'

class App extends Component {


  // Handle change Route
  changeRoute = () => {
    this.setState({
      route: '',
    });
  };

  render() {
    return (
      <div> 
        <AutoLandingPage />
      </div>
    )
  }
}

export default withRouter(App)