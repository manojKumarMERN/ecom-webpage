import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegUser } from "react-icons/fa"; //Font Awesome Icons
import { MdLockOutline } from "react-icons/md"; //Material Design Icons
import { AiOutlineArrowRight } from "react-icons/ai"
import logo from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import './login.css'
// import Signin from "./signin";
import { json, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import ValidateForm from "form-validation-react";

export default function LoginPage() {

    const user = [
        {
            id: 1,
            fullName: "manoj kumar",
            userName: "mano",
            password: "12345",
            mailId: "mano@mknews.com",
            contactNum: 6369302377

        },
        {
            id: 2,
            fullName: "raja murugan",
            userName: "raja",
            password: "123456",
            mailId: "raja@mvnews.com",
            contactNum: 1234567890

        },
        {
            id: 3,
            fullName: "vino balan",
            userName: "vino",
            password: "123465",
            mailId: "mano@mknews.com",
            contactNum: 9008362792

        },
        {
            id: 4,
            fullName: "sethubathi ",
            userName: "sethu",
            password: "123457",
            mailId: "sethu@gmail.com",
            contactNum: 894663890

        }
    ];

    //___________________________________________________________________________________________________________________________

    const [isLogbtn,setIslogbtn]=useState(true);

    //___________________________________________________________________________________________________________________________

    const getVal = JSON.parse(localStorage.getItem('myData'));

    const [valueOf, setValueof] = useState(getVal ? getVal : user);

    localStorage.setItem('myData', JSON.stringify(valueOf))

    console.log(valueOf)
    //___________________________________________________________________________________________________________________________

    const [loginVal, setLoginVal] = useState(
        {
            username: "",
            password: ""
        }
    )

    const valChange = (e) => {
        setLoginVal({ ...loginVal, [e.target.name]: e.target.value });
    };

    console.log(loginVal)

    const loginVall = sessionStorage.setItem("loginVal",JSON.stringify(loginVal));
    
    //___________________________________________________________________________________________________________________________

    const Navigation = useNavigate();
    const movePage = () => {
        Navigation("/signin")
    };

    //________________________________________________________________________________________________________________________________________

    const location = useLocation()

    useEffect(() => {

        if (location.state !== null) {

            const newGet = location.state.dataVal

            console.log(newGet)
            newGet.id = valueOf.length + 1;
            // console.log(newGet);
            let findRow = valueOf.find(({ userName, password }) => {
                console.log(userName);
                console.log(password);
                return (userName == newGet.userName && password == newGet.password);
            });
            if (findRow === undefined) {
                setValueof((value) => { return [...value, newGet] })
                console.log(valueOf)
                localStorage.setItem('myData', JSON.stringify(valueOf))
            }

        }

    }, [])

    const loginClick = (e) => {
        e.preventDefault();
        // console.log(user);
        let findRow = valueOf.find(({ userName, password }) => {
            console.log(userName);
            console.log(password);
            return (userName == loginVal.username) && (password == loginVal.password);
        });



        console.log(loginVal.username);
        console.log(loginVal.password);
        console.log(findRow);

         if (findRow !== undefined) {
            
            Navigation("/home"
            // , {
            //     state: {
            //         user: loginVal,
            //     }
                  
            // }
           
            )
        }

        else {
            alert("invalid username and password")
            return false
        }
    }


    return (
        <>

            <div className="loginWrapper">
                <h1 className="h1_tagCon">Log in...</h1>
                <p className="para_con">welcome for your plantation</p>
                <div className="conatiner">

                    <div className="left-Side">
                        <ValidateForm
                            onSubmit={(event) => {
                                console.log("Form submitted", event);
                            }}
                            errorElement="#error_show_element" // optional
                            
                        >

                            <form>
                                <h1 id="error_show_element" />
                                <label><FaRegUser /> user name</label><br />
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="userId "
                                    onChange={valChange}
                                    required
                                /><br />

                                <label ><MdLockOutline />password</label><br />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    onChange={valChange}
                                    required

                                /><br />
                                <button type="button" onClick={loginClick}>Login</button>
                                <span className="link_create">
                                    <div className="words">
                                        <p> or </p> <br />
                                        <button type="submit" className="link_button" onClick={movePage}>create Account <AiOutlineArrowRight /> </button>
                                    </div>
                                </span>
                            </form>
                        </ValidateForm>
                    </div>
                    <div className="right-side">
                        <img src={logo} style={{ width: "200px", height: "200px" }} alt="mano" />
                        <p className="con_para">
                            Welcoming <br />
                            you <br />  from <br /> <b>Fresh</b>
                        </p>
                    </div>
                </div>
            </div>

        </>

    )
}
