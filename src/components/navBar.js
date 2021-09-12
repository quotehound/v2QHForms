import React, {Component} from 'react';

import QHLogo from '../Images/QHLogo.png';

import './mainPage/main.css';

class Navbar extends Component {

    render(){
        return(
            <section className="py-4">
  <div className="container px-4 mx-auto">
    <nav>
      <div className="flex justify-between items-center">
        <a className="text-lg font-medium" href="#" data-config-id="brand">
          <img className="h-7" src={QHLogo} alt="" width="auto" />
        </a>
        <div className="lg:hidden">
          <button className="flex items-center p-3 bg-blue-600 text-white rounded">
            Call For A Free Quote
          </button>
        </div>
        <ul className="hidden lg:flex lg:ml-auto lg:mr-12 lg:items-center lg:w-auto lg:space-x-12">
          <li className="navLink"><a className="font-medium text-sm hover:text-blue-500" href="/auto" data-config-id="link1">Auto Insurance</a></li>
        </ul>
        <div className="hidden lg:block"><a className="inline-block py-3 px-8 text-sm text-white font-medium leading-normal bg-blue-600 hover:bg-blue-500 rounded transition duration-200" href="#">Call For A Free Quote</a></div>
      </div>
    </nav>
  </div>
  <div className="hidden navbar-menu relative z-50">
    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
      <div className="flex items-center mb-8">
        <a className="mr-auto text-2xl font-medium leading-none" href="#" data-config-id="brand">
          <img className="h-7" src="zeus-assets/logo/logo-zeus-red.svg" alt="" width="auto" />
        </a>
        <button className="navbar-close">
          <svg className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div>
        <ul>
          <li className="mb-1"><a className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded" href="#" data-config-id="link1">About</a></li>
          <li className="mb-1"><a className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded" href="#" data-config-id="link2">Company</a></li>
          <li className="mb-1"><a className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded" href="#" data-config-id="link3">Services</a></li>
          <li className="mb-1"><a className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded" href="#" data-config-id="link4">Testimonials</a></li>
        </ul>
      </div>
      <div className="mt-auto">
        <div className="pt-6"><a className="block py-3 text-center text-sm text-white leading-normal bg-red-400 hover:bg-red-300 font-medium rounded transition duration-200" href="#" data-config-id="primary-action">Contact Us</a></div>
        <p className="mt-6 mb-4 text-sm text-center text-gray-500">
          <span data-config-id="copy">© 2021 All rights reserved.</span>
        </p>
      </div>
    </nav>
  </div>
</section>


        )
    }

}

export default Navbar;