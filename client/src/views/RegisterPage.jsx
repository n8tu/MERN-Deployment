import React, {useContext, useState} from "react";
import UserForm from "../components/UserForm";
import axios from "axios";
import UserSession from "../context/UserSession";
import {useHistory} from "react-router-dom";

export default () => {
    const [errors,setErrors] = useState([]);
    const { setUser } = useContext(UserSession)
    const history = useHistory();

    const createUser = (user_data) => {
        axios.post("http://localhost:8000/api/user/register" , user_data)
            .then(res => {
                setUser(res.data.user)
                history.push("/pirates")
            })
            .catch(err => {
                // Process each error message came from database and push them into an array to print it later.
                console.log(err);
                const errorResponse = err.response.data.errors;
                const errorArr = []
                // Loop through all errors and get the messages
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })

    }

    return (
        <div className={"container w-50 mt-5"}>
            <p>This is Register Page </p>
            <hr/>
            {errors.length != 0 && errors.map((error,i) => {
                return(
                    <p key={i}>{error}</p>
                )
            })}
            {<UserForm onSubmitProps={createUser} type={"Register"}/>}
        </div>
    )
}