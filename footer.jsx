import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import mylogo from './images/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { useEffect } from 'react';

function Footer() {

    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <>
            <div id='footer' className="container-fluid" style={{ backgroundColor: "rgb(72, 122, 80)" }}>
                <div className="container">
                    <h2 className="text-center" style={{ fontFamily: 'Playfair Display', fontSize: "30px", fontWeight: "300", letterSpacing: "5px", color: "#F5DEB3", textShadow: "1px 1px 2px black" }}>copyrights claimed by the mano web technology</h2>

                    <div id="mainFooter"  >
                        <div className="container text-center  g-20" id='columnFooter'>
                            <div className="row justify-content-center align-items-center">
                                <div 
                                    className="col-3" id='linksTxt'>
                                    <h1 className="h1_tagCon" style={{ fontSize: "28px", fontWeight: "bold", marginTop: "15px" }}>QUICK LINKS</h1>
                                    <ul >
                                        <li style={{ textAlign: "center", color: "black", listStyle: "none", marginBottom: "10px" }}  > <Link className="text-decoration-none " style={{ color: "black", fontFamily: 'Playfair Display' }} to="/home"> Home</Link></li>
                                        <li style={{ textAlign: "center", color: "black", listStyle: "none", marginBottom: "10px" }}  ><Link className="text-decoration-none " style={{ color: "black", fontFamily: 'Playfair Display' }} to="/products"> products </Link></li>
                                        <li style={{ textAlign: "center", color: "black", listStyle: "none", marginBottom: "10px" }}  ><Link className="text-decoration-none " style={{ color: "black", fontFamily: 'Playfair Display' }} to="/wishlist"> Wishlist</Link></li>
                                        <li style={{ textAlign: "center", color: "black", listStyle: "none", marginBottom: "10px" }}  ><Link className="text-decoration-none " style={{ color: "black", fontFamily: 'Playfair Display' }} to="/wishlist"> buying cart</Link></li>
                                    </ul>
                                </div>

                                <div className="col-3 " id="subscriBar" data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500" >
                                    <div
                                        class="input-group mb-3 d-flex  justify-content-center flex-column " style={{ marginTop: "20px" }}>
                                        <AiFillFacebook style={{ marginBottom: "20px", fontSize: "40px", color: "white", textAlign: "center", marginLeft: "100px" }} />
                                        <AiFillInstagram style={{ marginBottom: "20px", fontSize: "40px", color: "white", textAlign: "center", marginLeft: "100px" }} />
                                        <AiOutlineTwitter style={{ marginBottom: "20px", fontSize: "40px", color: "white", textAlign: "center", marginLeft: "100px" }} />
                                    </div>
                                </div>
                                <div className="col-3"
                                    data-aos="fade-left"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine" id='logo'>
                                    <img src={mylogo} style={{ width: "300px", overflowx: "hidden", padding: "0", top: "10px" }} alt="mano" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;