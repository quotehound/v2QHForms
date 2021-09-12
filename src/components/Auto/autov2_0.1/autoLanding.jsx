// Library Imports
import React, {Component} from 'react';
import {Router, useHistory, withRouter} from 'react-router-dom';



// Other Imports {like css, js, and other}
import './auto.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

//Images Import
import QHLogo from '../../../Images/QHLogo.png';
import HeaderImage from '../../../Images/auto-hero.svg'



class AutoLandingPage extends Component {

    constructor(props) {
      super(props);

      this.state = {zip_code: ''};

      this.nextStep = this.nextStep.bind(this);
      this.nextStep = this.nextStep.bind(this);
    }


    nextStep (values) {
        
      let zipValue = document.getElementById('zipCode').value;

      if(zipValue.length < 5){
          toast.error(" 😬 Please enter a valid zip code!");  
          
          values.preventDefault();
      }

      else{

        values.preventDefault();

        toast.dismiss();

        console.log("success: ", zipValue);

        this.setState({zip_code: zipValue})

        // this.props.setZipCode(zipValue);

        console.log("updated props with value: ", zipValue);

        this.props.history.push("/auto/step2");
      }
        
    }

    autoFocusClick() {
      document.getElementById('zipCode').focus();
    }

    render(){
        return(

          <div> 

            {/* Header with Form */}

            <section className="pb-20 bg-gray-50">
  <nav className="flex justify-between items-center py-8 px-4 xl:px-10">
    <a className="text-lg font-semibold" data-config-id="brand">
      <img className=" logo" src={QHLogo} alt="" />
    </a>
    <div className="lg:hidden">
    <a className=" callButton inline-block py-3 px-8 text-sm leading-normal font-bold bg-blue-500 hover:bg-blue-400 hover:shadow-xl text-white  rounded transition duration-200" href="#" data-config-id="primary-action">Call For A Free Quote</a>
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
        <ToastContainer 
          position="top-center"
          autoClose={5000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={'colored'}
        />
        <span className="font-semibold text-md text-blue-400 "  data-config-id="label">Getting a quote has never been easier</span>
        <h2 className="mt-3 mb-1 lg:mb-5 text-4xl lg:text-5xl font-semibold" data-config-id="header">Start saving on your <span className="spanText">Auto Insurance</span>.</h2>
        <div className="max-w-lg mb-1 lg:mb-5">
          <p className="text-xl text-gray-500" data-config-id="desc">Get Your Free Quote Today. Just fill out our quick form and get connected with a quote in less than <span className="spanText">2 minutes</span>.</p>
        </div>
        
        {/* Form Will be connected here */}

        <form onSubmit={this.nextStep} >

        <div className="flex justify items-center formSection">
  <input className="appearance-none w-1/2 p-3 text-lg font-semibold leading-none bg-white rounded zipInput " type="text" name="addressField" placeholder="Zip Code" value={this.state.value} id="zipCode" maxLength={5}/>
  <button className="px-6 py-4 mb-3 m-2 text-md font-semibold bg-blue-500 text-white rounded transition duration-200 zipSubmit" type="submit">Start My Quote</button>

</div>

</form>

      </div>
      <div className="relative w-full md:w-1/2 px-4">
        <img className="relative" src={HeaderImage} alt="" data-config-id="image" />
      </div>
    </div>
  </div>

</section>

{/* End of header with Form */}

{/* Start Of how it works */}

<section className="py-20">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap -mx-4">
      <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
        <span className="text-md text-blue-400 font-semibold" data-config-id="label">How does it work? </span>
        <h2 className="mt-8 mb-10 text-4xl font-semibold font-heading" data-config-id="header">It's simple to start saving!</h2>
        <p className="max-w-lg mb-12 text-xl text-gray-500" data-config-id="desc">Learn how thousands of people how already saved over <span className="spanText">$300</span> on average!</p>
        <a className="inline-block px-8 py-4 text-sm text-white font-medium leading-normal bg-blue-500 hover:bg-blue-600 rounded transition duration-200" onClick={this.autoFocusClick}>Start Your Free Quote!</a>
      </div>
      <div className="w-full lg:w-1/2 px-4">
        <div className="bg-gray-50 rounded-xl px-10">
          <div className="py-8 border-b">
            <div className="flex items-start">
              <span className="mr-6 flex-shrink-0 flex justify-center items-center w-12 h-12 rounded-full bg-blue-400 text-white">1</span>
              <p className="text-gray-500" data-config-id="desc1">Our Form is short, and basic to use! Just answer all our simple questions. We only ask what we need to help save you money!
              </p>
            </div>
          </div>
          <div className="py-8 border-b">
            <div className="flex items-start">
              <span className="mr-6 flex-shrink-0 flex justify-center items-center w-12 h-12 rounded-full bg-green-400 text-white">2</span>
              <p className="text-gray-500" data-config-id="desc2">Based on your answers we use our super magic powers and match you with our partners who give you the best rate.</p>
            </div>
          </div>
          <div className="py-8">
            <div className="flex items-start">
              <span className="mr-6 flex-shrink-0 flex justify-center items-center w-12 h-12 rounded-full bg-red-400 text-white">3</span>
              <p className="text-gray-500" data-config-id="desc3">Sit back and start saving! Once you are matched with an insurer, you can start saving and thank Quotehound!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* End of how it works */}

{/* CTA Section Start */}
<section className="relative py-20  bg-gray-100">
  <div className="relative container px-4 mx-auto">
    <div className="flex flex-wrap items-center -mx-4">
    <div className="relative w-full lg:w-1/2 px-4">
        <img className="rounded-xl object-cover" src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" data-config-id="image" />
      </div>
      <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0 ">
        <div className="max-w-lg ">
          <span className="text-lg text-blue-400 font-semibold" data-config-id="label">Start Saving On Your <span className="spanText">Auto Insurance</span></span>
          <h2 className="mt-8 mb-6 lg:mb-10 lg:pr-8 text-4xl font-semibold" data-config-id="header">Saving at your finger tips...</h2>
          <p className="text-md text-gray-500" data-config-id="desc">Car insurance is required in almost every U.S. state, but finding the right policy at a good price can be a challenge. If you're wondering which insurer provides the best rates or what type of coverage you need, the answers to these questions depend on a number of factors. <br/> Fortunately, there is <span className="spanText">Quotehound</span>. Just fill out our quick form and start saving hundreds!</p>
          <a className="inline-block px-8 py-4 mt-5 text-sm text-white font-medium leading-normal bg-blue-500 hover:bg-blue-600 rounded transition duration-200" onClick={this.autoFocusClick}>Start Your Free Quote!</a>

        </div>
      </div>

    </div>
  </div>
  <img className="hidden xl:block absolute top-0 right-0 mt-52" src="zeus-assets/icons/dots/yellow-dot-right-shield.svg" alt="" />
</section>

{/* CTA Section End */}


{/* Footer  */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-between items-center -mx-4">
      <div className="w-full lg:w-2/6 px-4">
        <a className="inline-block mb-6 text-gray-900 text-lg font-semibold" href="#" data-config-id="brand">
          <img className="h-7" src={QHLogo} alt="" width="auto" />
        </a>
        <p className="hidden lg:block text-sm text-gray-500" data-config-id="copy">All rights reserved © Quotehound 2021</p>
      </div>
      <div className="w-full lg:w-4/6 px-4">
        <div className="flex flex-wrap items-center justify-end">
          <ul className="w-full lg:w-auto inline-flex flex-wrap mb-4 lg:mb-0 md:mr-6 lg:mr-12">
            <li className="mr-12 mb-2 md:mb-0"><a className="text-sm font-medium" href="#" data-config-id="01_link1">Do Not Sell</a></li>
            <li className="mr-12 mb-2 md:mb-0"><a className="text-sm font-medium" href="#" data-config-id="01_link2">Privacy Policy</a></li>
            <li className="mr-12 mb-2 md:mb-0"><a className="text-sm font-medium" href="#" data-config-id="01_link3">Terms & Conditions</a></li>
          </ul>
          <a className="inline-block mr-auto lg:mr-0 py-4 px-8 text-sm text-white font-medium leafing-normal bg-blue-500 hover:bg-blue-300 rounded" onClick={this.autoFocusClick} data-config-id="primary-action">Get Your Free Quote</a>
        </div>
        <p className="mt-6 lg:hidden text-sm text-gray-500" data-config-id="copy">All rights reserved © Quotehound 2021</p>
      </div>
    </div>
  </div>
</section>

{/* End Footer */}


</div>




            )
    }
}

export default withRouter(AutoLandingPage)
