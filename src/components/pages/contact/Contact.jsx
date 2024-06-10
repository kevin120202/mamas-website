import React from 'react'
import { motion } from "framer-motion"
import "./Contact.css"

function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "cdd0173b-9eb8-4c63-a849-95679c8113a7");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='contact'
        >
            <h1>Contact</h1>
            <div className="container">
                <div className="contact-col">
                    <h3>Send us a message</h3>
                    <p>Feel free to reach out through contact form or find our contact information below. Your questions are important to us as we strive to provide exceptional service to our clients.
                    </p>
                    <ul>
                        <li>contact@cocosuns@gmail.com</li>
                        <li>123456789</li>
                    </ul>
                </div>
                <div className="contact-col">
                    <form onSubmit={onSubmit}>
                        <label htmlFor="fullname">Your Fullname</label>
                        <input type="text" name='name' placeholder='Enter your fullname' id='fullname' required />
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" name='phone' placeholder='Enter your phone number' id='phone' required />
                        <label htmlFor="message">Write your message here</label>
                        <textarea name="message" id="message" cols="6" placeholder='Enter your message'></textarea>
                        <button>Submit now</button>
                    </form>
                    <span>{result}</span>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact