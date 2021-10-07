import React from 'react'
import './ContactForm.scss'

const ContactForm = (props) => {
    return (
        <div>
            <h1 className="title">Contactează-ne!</h1>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <form className="mt-3">
                <input type="text" placeholder="Nume" className="Input"/>
                <input type="email" placeholder="Email" className="Input mt-3"/>
                <textarea placeholder="Scrie-ne un mesaj" rows="5" className="Textarea mt-3"/>
                <button className="Button mt-3" onClick={(e) => e.preventDefault()}>Trimite</button>
            </form>
        </div>
    )
}

export default ContactForm;