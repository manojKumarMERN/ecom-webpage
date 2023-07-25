import React, { useState } from "react";
import HousecarePlants from "./House_Plants_Flowers";
import CareHousePlants from "./care_house_plants";
import Navbar from "./navbar";
import mylogo from './images/logo.png';
import { Link } from "react-router-dom";
import { SlUser } from "react-icons/sl"
import { BiSearchAlt2, BiLogOut } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Footer from "./footer";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function Productpage() {
    const makesOut = sessionStorage.getItem("userss");

    console.log(makesOut);
    const userss = JSON.parse(sessionStorage.getItem("loginVal"));
    const usersss = userss.username;
    const capsuser = usersss.toUpperCase();
    console.log(capsuser);

    const incountWiscare = JSON.parse(sessionStorage.getItem('incountWiscare'));
    const badgeWish = incountWiscare;

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            
            <Navbar/>
            <div style={{ textAlign: "center" }}>
                <HousecarePlants />
                <hr />
                <CareHousePlants />
            </div>
            <div className=" container d-flex justify-content-end ">
                <button type="button" className=" btn" style={{ borderRadius: "20%", backgroundColor: "white", color: "darkgreen" }} >
                    <AiOutlineArrowUp />
                </button>
            </div>
            <Footer />
        </>
    )
}