
// Import for libraries
import React, {Component} from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import './App.css';

//Import for pages
import MainLanding from './components/mainPage/main.jsx';

//Import For Auto Pages 
import AutoLandingPage from './components/Auto/autov2_0.1/autoLanding.jsx'
import CarYear from './components/Auto/autov2_0.1/CarYear.jsx';
class App extends Component {

  state = {
    route: '/',
    routes: [
        '/',
        //auto
        '/auto',
        '/auto/step1',
    ]
  }


  // Handle change Route
  changeRoute = () => {
    this.setState({
      route: '',
    });
  };

  render() {
    return (
      <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={MainLanding} exact />
          <Route path="/auto" component={AutoLandingPage} exact/>
          <Route path='/auto/step1' component={CarYear} exact />
          
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default withRouter(App)