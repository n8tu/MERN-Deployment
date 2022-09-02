import React , { useState } from "react";
import "bootstrap/dist/css/bootstrap.css"

export default (props) => {

    // Declarations
    const { type , onSubmitProps } = props;
    const [firstName,setFirstName] = useState({value:"",error:true,message:""})
    const [lastName,setLastName] = useState({value:"",error:true,message:""})
    const [email,setEmail] = useState({value:"",error:true,message:""})
    const [password,setPassword] = useState({value:"",error:true,message:""})
    const [dateOfBirth,setDateOfBirth] = useState({value:"",error:true,message:""})

    // Front end validations - On time.

    const handleFirstName = (e) => {
        let message = "";
        let error = false;
        if(e.target.value.length < 1){
            message = "First name is required!";
            error = true;
        }else if(e.target.value.length < 3){
            message = "First name must be at least 3 characters";
            error = true;
        }
        setFirstName({
            value: e.target.value,
            message: message,
            error: error,
        })
    }

    const handleLastName = (e) => {
        let message = "";
        let error = false;
        if(e.target.value.length < 1){
            message = "Last name is required!";
            error = true;
        }else if(e.target.value.length < 3){
            message = "Last name must be at least 3 characters";
            error = true;
        }
        setLastName({
            value: e.target.value,
            message: message,
            error: error,
        })
    }

    const handleEmail = (e) => {
        let message = "";
        let error = false;
        if(e.target.value.length < 1){
            message = "Email is required!";
            error = true;
        }else if(e.target.value.length < 5){
            message = "Email must be at least 5 characters!";
            error = true;
        }
        setEmail({
            value: e.target.value,
            message: message,
            error: error,
        })
    }

    const handlePassword = (e) => {
        let message = "";
        let error = false;
        if(e.target.value.length < 1){
            message = "password is required!";
            error = true;
        }else if(e.target.value.length < 8){
            message = "password must be at least 8 characters!";
            error = true;
        }
        setPassword({
            value: e.target.value,
            message: message,
            error: error,
        })
    }

    const handleDateOfBirth = (e) => {
        let message = "";
        let error = false;
        if(e.target.value.length < 1){
            message = "Date of Birth is required!";
            error = true;
        }else if(new Date(e.target.value) > new Date()){
            message = "Date of Birth cannot be in the future!";
            error = true;
        }
        setDateOfBirth({
            value: e.target.value,
            message: message,
            error: error,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        switch (type){
            case "Register":
                setDateOfBirth(new Date(dateOfBirth.value));
                if([firstName.error,lastName.error,email.error,password.error,dateOfBirth.error].every(
                    (value) => value == false
                )){
                    onSubmitProps({
                        firstName:firstName.value,
                        lastName:lastName.value,
                        email:email.value,
                        password:password.value,
                        dateOfBirth:dateOfBirth.value
                    });
                }
                break;

            case "Login":
                if([email.error,password.error].every(
                    (value) => value == false
                )){
                    onSubmitProps({
                        email:email.value,
                        password:password.value
                    })
                }
                break;
        }
    }
    switch (type){
        case "Register":
            return(
                <form onSubmit={handleSubmit} className="container">
                    <div className="row mb-3">
                        <div className="col-6">
                            <label>First Name:</label>
                            <input onChange={handleFirstName} type="text" className="form-control"/>
                            {firstName.error && (<p className="text-danger">{firstName.message}</p>)}
                        </div>
                        <div className="col-6">
                            <label>Last Name:</label>
                            <input onChange={handleLastName} type="text" className="form-control"/>
                            {lastName.error && (<p className="text-danger">{lastName.message}</p>)}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <label>Email</label>
                            <input onChange={handleEmail} type="Email" className="form-control"/>
                            {email.error && (<p className="text-danger">{email.message}</p>)}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <label>Password</label>
                            <input onChange={handlePassword} type="password" className="form-control"/>
                            {password.error && (<p className="text-danger">{password.message}</p>)}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <label>Date Of Birth</label>
                            <input onChange={handleDateOfBirth} type="date" className="form-control"/>
                            {dateOfBirth.error && (<p className="text-danger">{dateOfBirth.message}</p>)}
                        </div>
                    </div>

                    <div className="row">
                        <button type={"submit"} className="btn btn-dark w-50 mx-auto">Register</button>
                    </div>
                </form>
            )
            break;
        case "Login":
            return(
                <form onSubmit={handleSubmit} className="container">
                    <div className="row mb-3">
                        <div className="col-12">
                            <label>Email</label>
                            <input onChange={handleEmail} type="Email" className="form-control"/>
                            {email.error && (<p className="text-danger">{email.message}</p>)}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <label>Password</label>
                            <input onChange={handlePassword} type="password" className="form-control"/>
                            {password.error && (<p className="text-danger">{password.message}</p>)}
                        </div>
                    </div>
                    <div className="row">
                        <button type={"submit"} className="btn btn-dark">Login</button>
                    </div>
                </form>
            )
            break;
    }

}