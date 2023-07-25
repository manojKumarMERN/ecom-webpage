import React from "react";
import { useState } from "react";
import { MdOutlineAdd, MdRemove } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Card({plants,funcAdd}) {
    const [fillIt, setFillit] = useState(false);
    const [buy, setBuy] = useState(false);

    const navigate = useNavigate();

    const deletecart = (id) => {

        const existingWishCare = JSON.parse(sessionStorage.getItem('buycare'));

        const updatedWishCare = existingWishCare.filter((plant) => plant.id !== id);

        sessionStorage.setItem('buycare', JSON.stringify(updatedWishCare));

        navigate("/buyinglist");

    };

    const [quantity, setQuantity] = useState(plants.quantity);
    const [price, setPrice] = useState(plants.price);

    const handleIn = () => {
        const newQunatity = quantity + 1;
        setQuantity(newQunatity);
        setPrice(price * newQunatity);
    }

    const handleDe = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            setPrice(newQuantity * plants.price);
        }
    }

        return (
            <div className="col-lg-4 col-md-2  mt-5" key={plants.id}>
                <div className="card" style={{ backgroundColor: "white", boxShadow: "1px 1px 10px 4px black", alignItems: "center", textAlign: "center" }}>
                    <img class="card-img-top" src={plants.image} alt={plants.image} />
                    <div className="card-body" style={{ height: "32%", fontFamily: 'Inter' }}>
                        <h4 className="card-title" style={{ fontSize: "18px", fontWeight: "bolder" }}>{plants.name}</h4>


                        <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between" }}>
                            <button className="btn" style={{ backgroundColor: "palegreen", color: "black", fontWeight: "bolder", borderRadius: "35px" }}
                                onClick={() => {
                                    handleIn();
                                }}
                            >+</button>
                            <p style={{ fontWeight: "bold", marginBottom: "5px" }}> price:${price}</p>

                            {console.log(plants.quantity)}
                            <button className="btn" style={{ backgroundColor: "crimson", color: "black", fontWeight: "bolder", borderRadius: "35px", outline: "none" }}
                                onClick={() => {
                                    handleDe();
                                }}
                            >-</button>

                        </div>
                        <p style={{ fontWeight: "bold" }}> quantity:{quantity}nos</p>
                        <button className="btn me-3" style={{ backgroundColor: "palegreen", width: "100%" }} onClick={() => {

                        }}><MdRemove />buy now </button>
                        <button className="btn me-3 bg-danger" style={{ width: "100%", marginTop: "10px" }} onClick={() => {
                            deletecart(plants.id);
                        }}><MdRemove />delete </button>


                    </div>
                </div>
            </div>
        )


    }