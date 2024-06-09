import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import Carousal from '../components/Carousal';

export default function Home() {
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/v1/foodData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
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
            <Carousal />
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
                                        .filter((item) => item.CategoryName === category.CategoryName)
                                        .map((filteredItem) => (
                                            <div key={filteredItem._id} className='col-12 col-md-6 col-lg-3'>
                                                <Cards foodName={filteredItem.name} 
                                                options={filteredItem.options[0]}
                                                ImgSrc={filteredItem.img}
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
