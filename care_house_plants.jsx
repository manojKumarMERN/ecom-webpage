import React from "react";
import carePLants from './plants.json';
import { useState } from "react";
import { MdOutlineAdd, MdRemove } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Card1 from "./cards1 copy";
import { useNavigate } from "react-router-dom";



export default function CareHousePlants() {

    const careHouse = carePLants[" Care_House_Plants"];
    console.log(careHouse);
    const [fillIt, setFillit] = useState(false);
    const [buy, setBuy] = useState(false);
    const navigate=useNavigate();

    //________________________________________________________________________________________

    const [empty, setEmpty] = useState([]);

    const find = JSON.parse(sessionStorage.getItem("wishCare"))

    const [wishVal, setWishval] = useState(find ? find : empty);

    sessionStorage.setItem("wishCare", JSON.stringify(wishVal));

    const funcAdd = (item) => {
        console.log(item)
        setWishval([...wishVal, item]);
        navigate("/products")
    }

    //________________________________________________________________________________

    const buycare = JSON.parse(sessionStorage.getItem("buycare"));

    const [buyVal, setBuyval] = useState(buycare ? buycare : empty);

    console.log(buyVal);

    sessionStorage.setItem("buycare", JSON.stringify(buyVal));

    const funcBuy = (item) => {
        console.log(item);
        setBuyval([...buyVal, item]);
    }

    //__________________________________________________________________________________________________

    const deleteWishCare = (id) => {
       
        const existingWishCare = JSON.parse(sessionStorage.getItem('wishCare'));
      
        const updatedWishCare = existingWishCare.filter((plant) => plant.id !== id);
      
        sessionStorage.setItem('wishCare', JSON.stringify(updatedWishCare));

        
      
      };


    //_________________________________________________________________________________________________________

    

    return (
        <>
            <div className="container my-5" >
                <h2 className="text-center" style={{ fontFamily: 'Playfair Display', fontSize: "30px", fontWeight: "300", letterSpacing: "5px", color: "#F5DEB3", textShadow: "1px 1px 2px black" }}> CARE HOUSE PLANT </h2>
                <div className="row">
                    {careHouse.map((plants) => {
                        return (
                            <>
                                <Card1 plants={plants} funcAdd={funcAdd} funcBuy={funcBuy} deleteWishCare={deleteWishCare}  />
                                {console.log(plants)}
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}