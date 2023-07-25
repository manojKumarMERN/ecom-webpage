import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./navbar";
import Card from "./cards2";
import Card1 from "./cards2 copy"
import Footer from "./footer";
import { useEffect } from "react";

export default function Wishlist() {

    const navigate = useNavigate();

    const location = useLocation();

    const userss = JSON.parse(sessionStorage.getItem("loginVal"));
    const usersss = userss.username;
    const capsuser = usersss.toUpperCase();
    console.log(capsuser);



    const wishCare = JSON.parse(sessionStorage.getItem("wishCare"))
    console.log(wishCare);

    const wishHome = JSON.parse(sessionStorage.getItem("wishHome"));

    const incountWiscare = JSON.parse(sessionStorage.getItem('incountWiscare'));
    const [badgeWish, setbadgeWis] = useState(incountWiscare);

    //________________________________________________________________________________________________________________

    const [empty, setEmpty] = useState([]);

    const find = JSON.parse(sessionStorage.getItem("wishToBuy"))

    const [wishBuy, setwishBuy] = useState(find ? find : empty);

    sessionStorage.setItem("wishToBuy", JSON.stringify(wishBuy));



    const funcBuyWish = (item) => {
        console.log(item)
        setwishBuy([...wishBuy, item]);
    }


    const deleteWishHome = (id) => {
        const existingWishCare = JSON.parse(sessionStorage.getItem('wishHome'));

        const updatedWishCare = existingWishCare.filter((plant) => plant.id !== id);

        sessionStorage.setItem('wishHome', JSON.stringify(updatedWishCare));

        navigate("/wishlist");

    };

    const [wisHome, setWisHome] = useState([]);
    const [wisCare, setWisCare] = useState([]);
    const [countOfWish, setCountOfWish] = useState(0);


    useEffect(() => {
        const wisHomeData = JSON.parse(sessionStorage.getItem("wishHome")) || [];
        const wisCareData = JSON.parse(sessionStorage.getItem("wishCare")) || [];
        setWisHome(wisHomeData);
        setWisCare(wisCareData);

        const countOfWish = wisHomeData.length + wisCareData.length;
        setCountOfWish(countOfWish);
    }, []);


    console.log(countOfWish);



    //________________________________________________________________________________________________________


    const deleteWishCare = (id) => {

        const existingWishCare = JSON.parse(sessionStorage.getItem('wishCare'));

        const updatedWishCare = existingWishCare.filter((plant) => plant.id !== id);

        sessionStorage.setItem('wishCare', JSON.stringify(updatedWishCare));

        navigate("/wishlist");

    };


    //_________________________________________________________________________________________________________




    return (
        <>
           <Navbar/>
            <div className="container my-5" >
                <h2 className="text-center" style={{ fontFamily: 'Playfair Display', fontSize: "30px", fontWeight: "300", letterSpacing: "5px", color: "#F5DEB3", textShadow: "1px 1px 2px black" }}>W I S H - L I S T </h2>

                <h2 className="text-center" style={{ fontFamily: 'Playfair Display', fontSize: "30px", fontWeight: "300", letterSpacing: "5px", color: "#F5DEB3", textShadow: "1px 1px 2px black" }}>HOUSE PLANT FLOWERS</h2>

                <div className="row">
                    {
                        wishHome.length !== 0 ?
                            wishHome.map((plants) => {


                                return (
                                    <>
                                        <Card plants={plants} funcBuyWish={funcBuyWish} deleteWishHome={deleteWishHome} />
                                    </>
                                )
                            }) : <p style={{ fontFamily: 'poppins', textAlign: "center", fontSize: "20px", fontWeight: "300", letterSpacing: "5px", color: "#black", textShadow: "1px 1px 2px grey" }}>there is no selection house plants flowers in the wish cart </p>
                    }
                </div>
            </div>
            <div className="container my-5" >
                <h2 className="text-center" style={{ fontFamily: 'Playfair Display', fontSize: "30px", fontWeight: "300", letterSpacing: "5px", color: "#F5DEB3", textShadow: "1px 1px 2px black" }}> CARE HOUSE PLANT </h2>

                <div className="row">

                    {
                        wishCare.length !== 0 ?
                            wishCare.map((plants) => {
                                return (
                                    <>
                                        <Card1 plants={plants} funcBuyWish={funcBuyWish} deleteWishCare={deleteWishCare} />
                                    </>
                                )
                            }) : <p style={{ fontFamily: 'poppins', textAlign: "center", fontSize: "20px", fontWeight: "300", letterSpacing: "5px", color: "#black", textShadow: "1px 1px 2px grey" }}>there is no selection care house plants in the wish cart </p>
                    }
                </div>
            </div>


            <Footer />

        </>
    )
}