import React from 'react'
import './LandingPage.scss'
import ContactForm from '../ContactForm/ContactForm'
const LandingPage = (props) => {
    return (
        <div className="paddingTop container pb-5">
            <div className="row mx-0 ">
                <div className="col-6 d-flex justify-content-center flex-column">
                    <h1 className="title">Învață matematică</h1>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-center">
                    <img src="/landingLogo1.svg" className="img-fluid"/>
                </div>
            </div>
            <div className="row mx-0 mt-5">
                <div className="col-6 d-flex align-items-center justify-content-center">
                    <img src="/landingLogo2.svg" className="img-fluid"/>
                </div>
                <div className="col-6 d-flex justify-content-center flex-column">
                    <h1 className="title">Ești profesor?</h1>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                
            </div>
            <div className="row mx-0 mt-5">
                <div className="col-6 d-flex justify-content-center flex-column">
                    <h1 className="title">Cauți meditații individuale?</h1>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-center">
                    <img src="/landingLogo3.svg" className="img-fluid"/>
                </div>
            </div>
            <div className="row mx-0 mt-5">
                <h1 className="title mb-3 text-center">Cum funcționează?</h1>
                <div className="row mx-0">
                    <div className="col-3 d-flex align-items-center justify-content-center flex-column">
                        <img src="/landingSmall1.svg" className="img-fluid"/>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="col-3 d-flex align-items-center justify-content-center flex-column">
                        <img src="/landingSmall2.svg" className="img-fluid"/>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="col-3 d-flex align-items-center justify-content-center flex-column">
                        <img src="/landingSmall3.svg" className="img-fluid"/>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="col-3 d-flex align-items-center justify-content-center flex-column">
                        <img src="/landingSmall4.svg" className="img-fluid"/>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div className="row mx-0 my-5">
                <div className="col-6 d-flex align-items-center justify-content-center">
                    <img src="/landingLogo4.svg" className="img-fluid"/>
                </div>
                <div className="col-6 d-flex justify-content-center flex-column">
                    <h1 className="title">Ești reprezentantul unei instituții de învățământ?</h1>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                
            </div>
            <h1 className="title text-center mt-5">Incă mai ai întrebări?</h1>
            <div className="row mt-5 mx-0">
                <div className="col-6 d-flex align-items-center justify-content-center">
                    <img src="/landingLogoContact.svg" className="img-fluid"/>
                </div>
                <div className="col-6 d-flex justify-content-center flex-column">
                    
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default LandingPage;