import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <footer className="container">
            <div className="d-flex justify-content-between py-4 my-4 border-top">
                <p>&copy; 2024 FoodHub, Inc. All rights reserved.</p>
                <ul className="list-unstyled d-flex">
                    <li className="ms-3">
                        <Link className="link-dark" to="#">
                            <i className="bi bi-twitter" style={{ fontSize: '24px' }}></i>
                        </Link>
                    </li>
                    <li className="ms-3">
                        <Link className="link-dark" to="#">
                            <i className="bi bi-instagram" style={{ fontSize: '24px' }}></i>
                        </Link>
                    </li>
                    <li className="ms-3">
                        <Link className="link-dark" to="#">
                            <i className="bi bi-facebook" style={{ fontSize: '24px' }}></i>
                        </Link>
                    </li>
                    <li className="ms-3">
                        <Link className="link-dark" to="#">
                            <i className="bi bi-whatsapp" style={{ fontSize: '24px' }}></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
