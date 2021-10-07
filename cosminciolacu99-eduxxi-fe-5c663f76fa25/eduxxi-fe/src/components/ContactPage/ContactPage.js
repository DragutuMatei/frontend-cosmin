import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
const ContactPage = (props) => {
    return (
        <div className="container paddingTop pb-5">
            <h1 className="title text-center pt-5">
                Ai întrebări? Iți vom răspunde!
            </h1>
            <div className="row mx-0 mt-5">
                <div className="col-6 align-items-center justify-content-center">
                    <img src="/contactForm_animation.svg" className="img-fluid"/>
                </div>
                <div className="col-6">
                    <ContactForm/>
                </div>
                
            </div>
            
        </div>
    )
}

export default ContactPage;