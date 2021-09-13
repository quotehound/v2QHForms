import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';


import AutoLandingPage from './autoLanding';
import CarYear from './CarYear';

class AutoMain extends Component {

    // Set State 

    state = {
        route: '/auto',
        routes: ['/auto/step1'],

        // Set Post Data
        postData: {
            zip_code: '',
        },
    };


    changeRoute = () => {
        this.setState({
            route: '/auto',
        });
    };

    render() {
        return  (
            <div> 
                <Switch>
                    <Route exact path='/auto'> 
                        <AutoLandingPage
                        setZipCode={(v) =>{
                            this.setState({
                                postData: {
                                    ...this.state.postData,
                                    zip_code: v,
                                },
                            });
                        console.log('shit got updated')
                        }}
                        
                        />
                    </Route>

                    <Route path='/auto/step1'>
                        <CarYear />
                    </Route>
                </Switch>

            </div>
        )
    }

}

export default withRouter(AutoMain);