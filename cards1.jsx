import React from "react";
import { useState } from "react";
import { MdOutlineAdd, MdRemove } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";



export default function Card({ plants, funcAdd, funcBuy }) {
    const [fillIt, setFillit] = useState(false);
    const [buy, setBuy] = useState(false);
    const Navigate = useNavigate();

    const deleteWishHome = (id) => {
        const existingWishCare = JSON.parse(sessionStorage.getItem('wishHome'));

        const updatedWishCare = existingWishCare.filter((plant) => plant.id !== id);

        sessionStorage.setItem('wishHome', JSON.stringify(updatedWishCare));

    };

    const navgation = () => {
        Navigate("/products")
    };

    const deletecart = (id) => {

        const existingWishCare = JSON.parse(sessionStorage.getItem('buyHome'));

        const updatedWishCare = existingWishCare.filter((plant) => plant.id !== id);

        sessionStorage.setItem('buyHome', JSON.stringify(updatedWishCare));

    };

    const deleteWishCare = (id) => {

        const existingWishCare = JSON.parse(sessionStorage.getItem('wishHome'));

        const updatedWishCare = existingWishCare.filter((plant) => plant.id !== id);

        sessionStorage.setItem('wishHome', JSON.stringify(updatedWishCare));

    };

    //_________________________________________________________________________________________________________________________________________

    return (
        <div className="col-lg-4 col-md-2  mt-5" key={plants.id}>
            <div className="card" style={{ backgroundColor: "white", boxShadow: "1px 1px 10px 4px black", alignItems: "center", textAlign: "center" }}>
                <img class="card-img-top" src={plants.image} alt={plants.image} />
                <div className="card-body" style={{ height: "32%", fontFamily: 'Inter' }}>
                    <h4 className="card-title" style={{ fontSize: "18px", fontWeight: "bolder" }}>{plants.name}</h4>
                    <p className="card-text" style={{ fontSize: "15px", fontWeight: "bold" }}>{plants.discription}</p>
                    <p style={{ fontWeight: "bold" }}> price:${plants.price}</p>

                    {
                        plants.buy ? <button className="btn me-3" style={{ backgroundColor: "crimson" }} onClick={() => {
                            plants.buy = false;
                            setBuy(!buy);
                            deletecart(plants.id);
                        }}><MdRemove />remove cart </button> :
                            <button className="btn me-3" style={{ backgroundColor: "#77dd77", textAlign: "center" }} onClick={() => {
                                funcBuy(plants);
                                plants.buy = true;
                                setBuy(!buy);
                                navgation();
                            }}><MdOutlineAdd />add cart </button>
                    }
                    {
                        plants.wished ?
                            <button className="btn me-3" style={{ backgroundColor: "#F5DEB3" }} onClick={() => {
                                plants.wished = false;
                                setFillit(!fillIt);
                                navgation();
                                deleteWishHome(plants.id);
                                console.log(plants)
                            }}><AiFillHeart style={{ color: "red" }} />unwish</button> :
                            <button className="btn me-3" style={{ backgroundColor: "#77dd77", textAlign: "center" }} onClick={() => {
                                funcAdd(plants);
                                plants.wished = true;
                                setFillit(!fillIt);
                                navgation();
                            }}><AiOutlineHeart />wish</button>
                    }

                </div>
            </div>
        </div>
    )



}