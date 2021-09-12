import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';


import AutoLandingPage from './autoLanding';


class AutoMain extends Component {

    // Set State 

    state = {
        route: '/auto/auto-landing',
        routes: [''],

        // Set Post Data
        postData: {
            zip_code: '',
        },
    };


    changeRoute = () => {
        this.setState({
            route: '',
        });
    };

    render() {
        return this.state.route == '/auto/landing' && this.state.routes.indexOf(window.location.pathname) === -1 ? (
			<Route exact path='/auto/landing' render={(props) => <AutoLandingPage changeRoute={this.changeRoute} {...props} 
            setZipCode={(v) =>{
                this.setState({
                    postData: {
                        ...this.state.postData,
                        zip_code: v,
                    },
                });
            console.log('shit got updated')
            }}
            />} />
		) : (
            <div> 

            </div>
        )
    }

}

export default withRouter(AutoMain);