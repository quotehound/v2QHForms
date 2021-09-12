// Library Imports
import React, {Component} from 'react';
import {Router, useHistory, withRouter} from 'react-router-dom';


// Other Imports {like css, js, and other}
import './auto.css';

//Images Import
import QHLogo from '../../../Images/QHLogo.png';
import HeaderImage from '../../../Images/auto-hero.svg'



class AutoLandingPage extends Component {

    nextStep (values) {
        console.log('next step')
    }

    render(){
        return(

            <section className="pb-20 bg-gray-50">
  <nav className="flex justify-between items-center py-8 px-4 xl:px-10">
    <a className="text-lg font-semibold" href="#" data-config-id="brand">
      <img className="h-7" src={QHLogo} alt="" width="auto" />
    </a>
    <div className="lg:hidden">
      <button className="navbar-burger flex items-center p-3 hover:bg-gray-50 rounded">
        <svg className="block h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>

    {/* We Can use the following Code block if we decide we want to use nav bar */}
    {/* <ul className="hidden lg:flex lg:ml-auto lg:mr-12 lg:items-center lg:w-auto lg:space-x-12">
      <li><a className="text-sm font-medium" href="#" data-config-id="link1">About</a></li>
      <li><a className="text-sm font-medium" href="#" data-config-id="link2">Company</a></li>
      <li><a className="text-sm font-medium" href="#" data-config-id="link3">Services</a></li>
      <li><a className="text-sm font-medium" href="#" data-config-id="link4">Testimonials</a></li>
    </ul> */}
    <div className="hidden lg:block"><a className="inline-block py-3 px-8 text-sm leading-normal font-bold bg-blue-500 hover:bg-blue-400 hover:shadow-xl text-white  rounded transition duration-200" href="#" data-config-id="primary-action">Call For A Free Quote</a></div>
  </nav>
  <div className="container px-4 mx-auto pt-12">
    <div className="flex flex-wrap items-center -mx-4">
      <div className="w-full md:w-1/2 px-4 mb-1 md:mb-0">
        <span className="font-semibold text-md text-blue-400 "  data-config-id="label">Getting a quote has never been easier</span>
        <h2 className="mt-3 mb-1 lg:mb-5 text-4xl lg:text-5xl font-semibold" data-config-id="header">Start saving on your <span className="spanText">Auto Insurance</span>.</h2>
        <div className="max-w-lg mb-1 lg:mb-5">
          <p className="text-xl text-gray-500" data-config-id="desc">Get Your Free Quote Today. Just fill out our quick form and get connected with a quote in less than <span className="spanText">2 minutes</span>.</p>
        </div>
        
        {/* Form Will be connected here */}

        <form>

        <div className="flex justify items-center formSection">
  <input className="appearance-none w-1/2 p-3 text-lg font-semibold leading-none bg-white rounded zipInput " type="text" name="addressField" placeholder="Zip Code" />
  <button className="px-6 py-4 mb-3 m-2 text-md font-semibold bg-blue-500 text-white rounded transition duration-200 zipSubmit" data-config-id="05_button" data-kind="__elements" onClick={(values) => this.nextStep(values)}>Start My Quote</button>

</div>

</form>

      </div>
      <div className="relative w-full md:w-1/2 px-4">
        <img className="relative" src={HeaderImage} alt="" data-config-id="image" />
      </div>
    </div>
  </div>

</section>



            )
    }
}

export default withRouter(AutoLandingPage)
