import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import mylogo from './images/logo.png'
import { BiSearchAlt2, BiLogOut } from "react-icons/bi"
import { SlUser } from "react-icons/sl"
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar() {

    useEffect(() => {
        AOS.init();
    }, [])

    const [isLogIn, setIsLogIn] = useState(true);

    console.log(isLogIn);

    const navigate = useNavigate();

    const location = useLocation();

    const userss = JSON.parse(sessionStorage.getItem("loginVal"));
    const usersss = userss.username;
    const capsuser = usersss.toUpperCase();
    console.log(capsuser);

    const incountWiscare = JSON.parse(sessionStorage.getItem('incountWiscare'));
    const [badgeWish, setbadgeWis] = useState(incountWiscare);

    const [wisHome, setWisHome] = useState([]);
    const [wisCare, setWisCare] = useState([]);
    const [countOfWish, setCountOfWish] = useState(0);

    const [buyHome, setbuyHome] = useState([]);
    const [buyCare, setBuyCare] = useState([]);
    const [wishtobuy,setwishtobuy]=useState([]);
    const [countOfBuy, setountofbuy] = useState(0);

    useEffect(() => {
        const wisHomeData = JSON.parse(sessionStorage.getItem("wishHome")) || [];
        const wisCareData = JSON.parse(sessionStorage.getItem("wishCare")) || [];
        const buyHomeData = JSON.parse(sessionStorage.getItem("buycare")) || [];
        const buyCareData = JSON.parse(sessionStorage.getItem("buyHome")) || [];
        const wishtobuyData = JSON.parse(sessionStorage.getItem("wishToBuy")) || [];
        
        setWisHome(wisHomeData);
        setWisCare(wisCareData);

        const countOfWish = wisHomeData.length + wisCareData.length;
        setCountOfWish(countOfWish);

        setbuyHome(buyHomeData);
        setBuyCare(buyCareData);
        setwishtobuy(wishtobuyData);

        const countOfBuy1 = buyHomeData.length + buyCareData.length
        const countOfBuy = countOfBuy1 + wishtobuyData.length

        setountofbuy(countOfBuy);

    }, []);


    console.log(countOfWish);


    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light " id="navBar_con">
                <div class="container ">
                    <img data-aos="zoom-out-down" src={mylogo} style={{ width: "100px", height: "100px", marginBottom: "35px", overflowx: "hidden" }} alt="mano" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" to="/home" >Home</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to="/products"  > products</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to="/wishlist"  > wish list
                                    <span class="badge" style={{ backgroundColor: "white", color: "darkgreen", borderRadius: "50%", textAlign: "center" }}>{countOfWish}</span></Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to="/buyinglist"  >buying cart
                                    <span class="badge" style={{ backgroundColor: "white", color: "darkgreen", borderRadius: "50%", textAlign: "center" }}>{countOfBuy}</span></Link>
                            </li>


                        </ul>
                        <div className=" d-grid gap-2 sm-2">

                            <Link to={"/"} >
                                <button type="button" id="logout_btn" class="btn btn-outline"><BiLogOut />LOG OUT </button>
                            </Link>
                            <Link>
                                <button type="button" id="profile_btn" class="btn btn-outline" ><SlUser />{capsuser}</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}