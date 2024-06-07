import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-success p-4">
                <div className="container-fluid">
                    <Link className="navbar-brand text-primary" to="/">FoodMania</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-secondary" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-primary" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
