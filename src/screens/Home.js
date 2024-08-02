import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cards from '../components/Cards';

//import briyaniImage from '../asserts/briyaniImage.jpg';
import image1 from '../asserts/food1.avif';
import image2 from '../asserts/food2.avif';
import image3 from '../asserts/food3.avif';

export default function Home() {

    const [search, setSearch] = useState('');
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        try {
            const response = await fetch("https://foodiebackend-pifb.onrender.com/api/v1/foodData", {
                method: 'POST',
            });
            const data = await response.json();
            setFoodItem(data[0]);
            setFoodCat(data[1]);
        } catch (error) {
            console.error("Error loading data:", error);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <Navbar />
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="d-flex justify-content-center">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className="d-block w-100" alt="..." />
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
            <div className='container'>
                {foodCat.length > 0 ? (
                    foodCat.map((category) => (
                        <div key={category._id} className='row mb-3'>
                            <div className='fs-3 m-3'>
                                {category.CategoryName}
                            </div>
                            <hr />
                            <div className='row'>
                                {foodItem.length > 0 ? (
                                    foodItem
                                        .filter((item) => (item.CategoryName === category.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                                        .map((filteredItem) => (
                                            <div key={filteredItem._id} className='col-12 col-md-6 col-lg-3'>
                                                <Cards foodItem={filteredItem}
                                                    options={filteredItem.options[0]}
                                                />
                                            </div>
                                        ))
                                ) : (
                                    <div>No such data found</div>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No categories found</div>
                )}
            </div>
            <Footer />
        </div>
    );
}
