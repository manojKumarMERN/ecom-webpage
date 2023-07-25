import React, { useState } from "react";
import './signin.css'
import { FaRegUser } from "react-icons/fa"; //Font Awesome Icons
import { MdLockOutline } from "react-icons/md"; //Material Design Icons
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";//ai  outline 
import { AiOutlineArrowRight } from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import ValidateForm from "form-validation-react";


export default function Signin() {

    const [deatils, setDetails] = useState({
        id: null,
        fullName: "",
        userName: "",
        password: "",
        mailId: "",
        contactNum: ""
    })

    console.log(deatils)

    const changeVal = (e) => {
        setDetails({ ...deatils, [e.target.name]: e.target.value })
    }

    const changeNum = (e) => {
        setDetails({ ...deatils, [e.target.name]: Number(e.target.value) })

    }

    const navigate = useNavigate();
    const clickMove = () => {

        if (deatils.userName==="" && deatils.password==="") {
            alert(
                "fill all those filed !!!"
            )
        }
        else
            navigate("/", {
                state: {
                    dataVal: deatils
                }
            }
            )

        console.log(deatils);
    }
    return (
        <>
            <div className="signinWrapper">
                <h1 className="h1_signCon">Sign in...</h1>
                <p className="parasign_con">welcome for your first step </p>
                <div className="conatiner_sign">
                    <div className="form_sign">
                        <ValidateForm
                            onSubmit={(event) => {
                                console.log("form submitted", event)
                               
                            }}
                            errorElement="#error_show_element"
                        >
                            <form className="formInputs">
                                <h1 id="error_show_element" />
                                <label> <FaRegUser />full name</label><br />
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="full name"
                                    onChange={changeVal}
                                    required
                                /><br />
                                <label> <FaRegUser />user name</label><br />
                                <input
                                    type="text"
                                    name="userName"
                                    placeholder="user name "
                                    onChange={changeVal}
                                    required
                                /><br />
                                <label > <MdLockOutline />password</label><br />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    onChange={changeVal}
                                    required
                                /><br />
                                <label ><AiOutlineMail />mailID</label><br />
                                <input
                                    type="email"
                                    name="mailId"
                                    placeholder="email "
                                    onChange={changeVal}
                                    required
                                /><br />
                                <label ><AiOutlinePhone />contact number</label><br />
                                <input
                                    type="number"
                                    name="contactNum"
                                    placeholder="mobile number"
                                    onChange={changeNum}
                                    required
                                /><br />
                                <button type="submit" onClick={clickMove}>signin <AiOutlineArrowRight /></button>
                                {console.log(deatils)}
                            </form>
                        </ValidateForm>

                    </div>

                    <div className="pic_con">
                        <p className="wordson">“ <b>Love and work</b> are to people  <br />what <br /> <b>water and sunshine</b> are to plants.”</p><br />
                    </div>
                </div>
            </div>
        </>
    )
}