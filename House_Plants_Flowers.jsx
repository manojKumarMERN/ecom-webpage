import React from "react";
import housePLants from './plants.json'

// import { SlBasketLoaded } from "react-icons/si";
import { useState } from "react";
import Card from "./cards1";
import { Navigate } from "react-router-dom";



export default function HousecarePlants() {
    const housecare = housePLants[" House_Plants_Flowers"];
    // console.log(housecare);


    const [empty, setEmpty] = useState([]);
    //_______________________________________________________________
    const find = JSON.parse(sessionStorage.getItem("wishHome"));

    const [wishValue, setwishValue] = useState(find ? find : empty);

    sessionStorage.setItem("wishHome", JSON.stringify(wishValue));

    const funcAdd = (item) => {
        console.log(item)
        setwishValue([...wishValue, item]);
        
    }

    //______________________________________________________________

    const buyAdd = JSON.parse(sessionStorage.getItem("buyHome"));

    const [buyVal, setBuyval] = useState(buyAdd ? buyAdd : empty);

    sessionStorage.setItem("buyHome", JSON.stringify(buyVal));

    const funcBuy = (item) => {
        console.log(item);
        setBuyval([...buyVal, item]);
        
    }
    //_________________________________________________________________

    return (
        <>
            <div className="container my-5" >
                <h2 className="text-center" style={{ fontFamily: 'Playfair Display', fontSize: "30px", fontWeight: "300", letterSpacing: "5px", color: "#F5DEB3", textShadow: "1px 1px 2px black" }}>HOUSE PLANT FLOWERS</h2>
                <div className="row">
                    {housecare.map((plants) => {
                        return (
                            <>
                                <Card plants={plants} funcAdd={funcAdd} funcBuy={funcBuy}  />
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}