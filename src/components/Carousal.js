import React from 'react';
import briyaniImage from '../asserts/briyaniImage.jpg';
export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel" >
                <div className="carousel-inner" id="carousel">
                    <div className="carousel-item active">
                        <img src={briyaniImage} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={briyaniImage} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x700/?drinks" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}