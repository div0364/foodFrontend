import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/api/v1/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
                location: credentials.geolocation
            })
        });
        const json = await response.json();
        console.log(json);

        if (!json.success) {
            alert("Enter valid credentials");
        }
    };

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    };

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
                    <h2 className="card-title text-center mb-4">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name='name'
                                value={credentials.name}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                name='email'
                                value={credentials.email}
                                onChange={onChange}
                                required
                            />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                name='password'
                                value={credentials.password}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="geolocation" className="form-label">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="geolocation"
                                name='geolocation'
                                value={credentials.geolocation}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-success mb-3">Submit</button>
                            <Link to="/login" className="btn btn-danger">Already a user</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
