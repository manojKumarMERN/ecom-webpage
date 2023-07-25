import React, { useRef, useState } from "react";
import './carousel.css'
import 'bootstrap/dist/css/bootstrap.css';
import banner1 from "./images/Banner-1.jpg";
import banner2 from "./images/Banner-2 .jpg";
import banner3 from "./images/Banner-3.jpg";
import Navbar from "./navbar";
import GeoChart from "./Geochart.jsx";
import PieChart from "./Piechart";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Footer from "./footer";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function Home() {
    useEffect(() => {
        AOS.init();
    }, []);


    const [empty, setEmpty] = useState([]);

    const find1 = JSON.parse(sessionStorage.getItem("wishHome"));

    const [wishValue, setwishValue] = useState(find1 ? find1 : empty);


    sessionStorage.setItem("wishHome", JSON.stringify(wishValue));

    //________________________________________________________________________________________________________

    const buyAdd = JSON.parse(sessionStorage.getItem("buyHome"));

    const [buyVall, setBuyvall] = useState(buyAdd ? buyAdd : empty);

    sessionStorage.setItem("buyHome", JSON.stringify(buyVall));

    //__________________________________________________________________________________________________________________
    const find = JSON.parse(sessionStorage.getItem("wishCare"))

    const [wishVal, setWishval] = useState(find ? find : empty);

    sessionStorage.setItem("wishCare", JSON.stringify(wishVal));

    //____________________________________________________________________________________________________________________
    const buycare = JSON.parse(sessionStorage.getItem("buycare"));

    const [buyVal, setBuyval] = useState(buycare ? buycare : empty);

    console.log(buyVal);

    sessionStorage.setItem("buycare", JSON.stringify(buyVal));

    //____________________________________________________________________________________________________________________
    const wishToBuy = JSON.parse(sessionStorage.getItem("wishToBuy"));

    const [buywVal, setBuywval] = useState(wishToBuy ? wishToBuy : empty);

    console.log(buyVal);

    sessionStorage.setItem("wishToBuy", JSON.stringify(buywVal));

    //______________________________________________________________________________________________________________________________
    const total = JSON.parse(sessionStorage.getItem("totalVal"));

    const [totalVal, setTotalVal] = useState(total ? total : empty);

    console.log(buyVal);

    sessionStorage.setItem("totalVal", JSON.stringify(totalVal));

//___________________________________________________________________________________________________________________________________


    const ref = useRef(null);

    return (
        <>
            <Navbar />
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" style={{ overflowx: "hidden" }}>
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={banner1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={banner2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={banner3} class="d-block w-100" alt="..." />
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container d-flex g-4 mt-4"
                data-aos="fade-up"
                data-aos-duration="3000">
                <GeoChart />
            </div>

            <div className="container d-flex justify-content-center g-4 mt-4"
                data-aos="fade-down"
                data-aos-duration="3000">
                <PieChart />
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