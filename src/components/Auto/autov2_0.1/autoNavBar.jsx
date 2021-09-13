import React, {Component} from 'react';

import QHLogo from '../../../Images/QHLogo.png';


class AutoNav extends Component {
    render(){
        return(
            <nav className="flex justify-between items-center py-8 px-4 xl:px-10 bg-white">
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
            )
    }
}

export default AutoNav;