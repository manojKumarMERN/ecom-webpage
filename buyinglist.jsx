import React from "react";
import { Link } from "react-router-dom";
import mylogo from './images/logo.png';
import { BiSearchAlt2, BiLogOut } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { SlUser } from "react-icons/sl"
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Card from "./cards3";
import Card1 from "./cards3-1";
import Card2 from "./cards3-2";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Buyinglist() {

    useEffect(() => {
        AOS.init();
    }, []);

    const navigate = useNavigate();

    const location = useLocation();

    const userss = JSON.parse(sessionStorage.getItem("loginVal"));
    const usersss = userss.username;
    const capsuser = usersss.toUpperCase();
    console.log(capsuser);

    const buyHome = JSON.parse(sessionStorage.getItem("buyHome"));
    console.log(buyHome);

    const buycare = JSON.parse(sessionStorage.getItem("buycare"));
    console.log(buycare);

    const wishToBuy = JSON.parse(sessionStorage.getItem("wishToBuy"));


    const [empty, setEmpty] = useState([]);

    const find = JSON.parse(sessionStorage.getItem("totalVal"));

    const [totalVal, setTotalVal] = useState(find ? find : empty)

    const combinedVal = [...buyHome, ...buycare, ...wishToBuy];

    sessionStorage.setItem("totalVal", JSON.stringify(combinedVal));

    console.log(totalVal);


    //delete button for the value of total value 
    const deleteCartItem = (id) => {
        const existingTotalVal = JSON.parse(sessionStorage.getItem("totalVal"));
        const updatedTotalVal = existingTotalVal.filter((plant) => plant.id !== id);
        sessionStorage.setItem("totalVal", JSON.stringify(updatedTotalVal));

        const updatedBuyHome = buyHome.filter((plant) => plant.id !== id);
        const updatedBuyCare = buycare.filter((plant) => plant.id !== id);
        const updatedWishToBuy = wishToBuy.filter((plant) => plant.id !== id);

        sessionStorage.setItem("buyHome", JSON.stringify(updatedBuyHome));
        sessionStorage.setItem("buycare", JSON.stringify(updatedBuyCare));
        sessionStorage.setItem("wishToBuy", JSON.stringify(updatedWishToBuy));

        setTotalVal(updatedTotalVal);
        navigate("/buyinglist");
    };


    //total price function for display 
    const totalPriceVal = () => {
        let cumulativeVal = 0;
        totalVal.forEach((plant) => {
            cumulativeVal += plant.price * plant.quantity;
        });
        return cumulativeVal;
    }

    const updateQuantity = (itemId, newQuantity) => {
        const updatedTotalVal = totalVal.map((plant) => {
            if (plant.id === itemId) {
                return { ...plant, quantity: newQuantity };
            }
            return plant;
        });
        setTotalVal(updatedTotalVal);
    };

    return (
        <>

            <Navbar />
            <div className="container my-5" >
                <div className="row">
                    {
                        totalVal.length !== 0 ?
                            totalVal.map((plants) => {
                                return (
                                    <>
                                        <Card plants={plants} funcAdd={updateQuantity} deleteCartItem={deleteCartItem} />

                                    </>
                                )
                            }) : <p style={{ fontFamily: 'poppins', textAlign: "center", fontSize: "20px", fontWeight: "300", letterSpacing: "5px", color: "#black", textShadow: "1px 1px 2px grey" }}>there is no selection cart house care plants in the buying cart </p>
                    }
                </div>
            </div>

            <hr></hr>

            <p style={{ fontFamily: 'poppins', textAlign: "center", fontSize: "20px", fontWeight: "300", letterSpacing: "5px", color: "#black", textShadow: "1px 1px 2px grey" }}>this the total price of the products:${totalPriceVal()}</p>

            <Footer />
        </>
    )
}
