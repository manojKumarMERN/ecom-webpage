import React from "react";
import { useState } from "react";
import { AiOutlineDelete, AiFillHeart } from "react-icons/ai";
import { BsBasket } from "react-icons/bs"
import { useNavigate } from "react-router-dom";

export default function Card({ plants, funcAdd, funcBuyWish, deleteWishCare }) {
    const [fillIt, setFillit] = useState(false);
    const [buy, setBuy] = useState(false);

    const navigate= useNavigate()

    

    const deletecart = (id) => {

        const existingWishCare = JSON.parse(sessionStorage.getItem('buyHome'));

        const updatedWishCare = existingWishCare.filter((plant) => plant.id !== id);

        sessionStorage.setItem('buyHome', JSON.stringify(updatedWishCare));

       // navigate("/buyinglist");

    };



    return (
        <div className="col-lg-4 col-md-2  mt-5" key={plants.id}>
            <div className="card" style={{ backgroundColor: "white", boxShadow: "1px 1px 10px 4px black", alignItems: "center", textAlign: "center" }}>
                <img class="card-img-top" src={plants.image} alt={plants.image} />
                <div className="card-body" style={{ height: "32%", fontFamily: 'Inter' }}>
                    <h4 className="card-title" style={{ fontSize: "18px", fontWeight: "bolder" }}>{plants.name}</h4>

                    <p style={{ fontWeight: "bold" }}> price:${plants.price}</p>

                    {
                        fillIt ?<button className="btn me-3" style={{ backgroundColor: "#F5DEB3"  }}
                            onClick={()=>{
                                deletecart();
                                setFillit(!fillIt);
                            }}
                        >
                        <AiOutlineDelete/> Delete cart
                        </button> : <button className="btn me-3" style={{ backgroundColor: "palegreen"  }} onClick={() => {
                            funcBuyWish(plants);
                            plants.delete =true;
                            setFillit(!fillIt);
                        }}><BsBasket />buying cart </button>
                    }
                    <button className="btn me-3" style={{ backgroundColor: "palegreen" }} onClick={() => {
                        console.log("--------")
                        console.log(plants);
                        deleteWishCare(plants.id);
                    }}><AiFillHeart style={{ color: "red" }} />unwish</button>

                </div>
            </div>
        </div>
    )



}