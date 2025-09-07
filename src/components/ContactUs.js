import React, { useState } from "react";
import "./ContactUs.css";
import Header from "./elements/Header";
import { useHistory } from "react-router-dom";
function ContactUs() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    const saveContactUs = async (event) => {
        event.preventDefault();
        const data = {
            name: name,
            email: email,
            phone: phone
        };

        const response = await fetch("https://e-commerce-project-01-98d08-default-rtdb.firebaseio.com/contact.json", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const responseData = await response.json();
        console.log(responseData);
        history.push('/')
    }

    return (
        <>
            <Header />
            <div className="coiner2">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card shadow p-4">
                                <h2 className="text-center mb-4">Contact Us</h2>
                                <form onSubmit={saveContactUs}>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="name"
                                            className="form-label"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Enter your name"
                                            name='name'
                                            value={name}
                                            onChange={(event) => setName(event.target.value)}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label
                                            htmlFor="email"
                                            className="form-label"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name='email'
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label
                                            htmlFor="phone"
                                            className="form-label"
                                        >
                                            Phone
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                            placeholder="Type your phone no."
                                            name='phone'
                                            value={phone}
                                            onChange={(event) => setPhone(event.target.value)}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ContactUs;
