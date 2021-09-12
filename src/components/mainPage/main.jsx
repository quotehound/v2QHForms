import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Link, Redirect } from 'react-router-dom';

import Navbar from '../navBar';

import HappyPerson from '../../Images/happyPerson.jpg'
import FormIcon from '../../Images/formIcon.png';
import AlgoIcon from '../../Images/algoIcon.png';
import SaveIcon from '../../Images/saveIcon.png';
import Computer from '../../Images/computer.png';

class HomeLanding extends Component {
    render() {
        return (
            <div>
                <Navbar />
                {/* Header Section Start */}

                <section className="bg-gray-500 pb-8 headerSection">
                    <div className="container px-4 mx-auto mb-8 pt-10">
                        <div className="max-w-4xl mx-auto text-center mb-24">
                            <span className="text-lg text-gray-200" data-config-id="label">Match. Save. Relax.</span>
                            <h2 className="mb-8 mt-2 text-5xl lg:text-6xl text-white font-bold font-heading" data-config-id="header">Free Yourself From Insurance Prices</h2>
                            <a className="inline-block w-full lg:w-auto py-3 px-6 text-gray-50 font-semibold bg-blue-600 hover:bg-blue-500 hover:shadow-lg rounded transition duration-200" href="/auto" data-config-id="hero-primary-action">Get Your Free Quote</a>
                        </div>
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full sm:w-1/2 lg:w-1/3 flex px-4 mb-8">
                                <div className="mr-6">
                                    <img src={FormIcon} className="icons" />
                                </div>
                                <div className="w-2/3 mb-4">
                                    <h3 className="mb-2 text-2xl text-gray-50 font-bold font-heading" data-config-id="header1">Simple Form</h3>
                                    <p className="text-lg text-gray-200" data-config-id="desc1">Gone are the hard questions. Just answer our basic form</p>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 lg:w-1/3 flex px-4 mb-8">
                                <div className="mr-6">
                                    <img src={AlgoIcon} className="icons" />
                                </div>
                                <div className="w-2/3 mb-4">
                                    <h3 className="mb-2 text-2xl text-gray-50 font-bold font-heading" data-config-id="header2">You Get Matched</h3>
                                    <p className="text-lg text-gray-200" data-config-id="desc2">Based on your answers we match you with our partners</p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 flex px-4 mb-8">
                                <div className="mr-6">
                                    <img src={SaveIcon} className="icons" />

                                </div>
                                <div className="w-2/3 mb-4">
                                    <h3 className="mb-2 text-2xl text-gray-50 font-bold font-heading" data-config-id="header3">Save $$$</h3>
                                    <p className="text-lg text-gray-200" data-config-id="desc3">Get matched, sign up and save Hundreds</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>
                {/* Header Section End */}

                {/* List insruance start */}

                <section className="py-20">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                                <span className="text-md text-blue-400 font-semibold" data-config-id="label">How does it work? </span>
                                <h2 className="mt-8 mb-10  text-xl md:text-3xl mt-3 font-bold font-headingg" data-config-id="header">It's simple to start saving!</h2>
                                <p className="max-w-lg mb-12 text-xl text-gray-500" data-config-id="desc">Learn how thousands of people how already saved over <span className="spanText">$300</span> on average!</p>
                                <a className="inline-block px-8 py-4 text-sm text-white font-medium leading-normal bg-blue-500 hover:bg-blue-600 rounded transition duration-200" href="/auto">Start Your Free Quote!</a>
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
                {/* list Insurance Ends */}

                {/* Features Start */}
                <section className="py-20 bg-gray-50">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap items-center -mx-4">
                            <div className="w-full lg:w-1/2 px-4">
                                <div>
                                    <h2 className="mb-12 text-xl md:text-3xl mt-3 font-bold font-heading text-blue-500" data-config-id="header">We have helped thousands save real $$$</h2>
                                    <div className="flex mb-6">
                                        <div className="mr-5 text-gray-500">
                                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div className="max-w-sm">
                                            <h3 className="mb-2 -mt-1 text-2xl font-bold font-heading text-blue-500" data-config-id="header1">Budget Friendly Prices
                                            </h3>
                                            <p className="text-gray-500 leading-loose" data-config-id="desc1">By comparing several companies at once it will allow you to choose what’s best for your budget.</p>
                                        </div>
                                    </div>
                                    <div className="flex mb-6">
                                        <div className="mr-5 text-gray-500">
                                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div className="max-w-sm">
                                            <h3 className="mb-2 -mt-1 text-2xl font-bold font-heading text-blue-500" data-config-id="header2">Empower Yourself
                                            </h3>
                                            <p className="text-gray-500 leading-loose" data-config-id="desc2">Getting a quote across multiple insurance companies empowers you to know what works best for you.

                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="mr-5 text-gray-500">
                                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div className="max-w-sm">
                                            <h3 className="mb-2 -mt-1 text-2xl font-bold font-heading text-blue-500" data-config-id="header3">2 Minutes</h3>
                                            <p className="text-gray-500 leading-loose" data-config-id="desc3">Some companies take 15 minutes. It only takes 2 minutes to enter your information and receive quotes.

                                            </p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                                <img className="rounded-lg w-full object-cover" src={Computer} alt="" data-config-id="image" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Features End */}

                {/* Start of insurance types */}
                <section className="p-20">
                    <h3 className="text-3xl mb-5 leading-tight font-semibold font-heading text-center" data-config-id="header">What we help you save on</h3>
                    <div className="flex flex-wrap -mx-8">
                        <div className="md:w-1/3 py-4 px-8 mb-4 md:mb-0">
                            <h3 className="text-2xl font-semibold font-heading" data-config-id="col1-header">Auto Insurance</h3>
                            <p className="my-4 text-gray-800 leading-relaxed" data-config-id="col1-desc">Save on the thing that takes you places. Users save on average <span className="spanText">$275</span></p>
                            <a className="text-blue-600 hover:underline" href="/auto" data-config-id="col1-link">Get My Free Quote »</a>
                        </div>
                        <div className="md:w-1/3 py-4 px-8 mb-4 md:mb-0">
                            <h3 className="text-2xl font-semibold font-heading" data-config-id="col1-header">Auto Insurance</h3>
                            <p className="my-4 text-gray-800 leading-relaxed" data-config-id="col1-desc">Save on the thing that takes you places. Users save on average <span className="spanText">$275</span></p>
                            <a className="text-blue-600 hover:underline" href="/auto" data-config-id="col1-link">Get My Free Quote »</a>
                        </div>
                        <div className="md:w-1/3 py-4 px-8 mb-4 md:mb-0">
                            <h3 className="text-2xl font-semibold font-heading" data-config-id="col1-header">Auto Insurance</h3>
                            <p className="my-4 text-gray-800 leading-relaxed" data-config-id="col1-desc">Save on the thing that takes you places. Users save on average <span className="spanText">$275</span></p>
                            <a className="text-blue-600 hover:underline" href="/auto" data-config-id="col1-link">Get My Free Quote »</a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default withRouter(HomeLanding)
