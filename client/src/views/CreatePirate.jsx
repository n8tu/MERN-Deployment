import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import PirateForm from "../components/PirateForm";
import UserSession from "../context/UserSession";

export default () => {
    const history = useHistory();
    const [errors,setErrors] = useState([]);
    const { user } = useContext(UserSession)

    useEffect(() => {
        if(user == null){
            history.push("/login");
        }
    },[])

    const createPirate = (pirate_data) => {
        axios.post("http://localhost:8000/api/pirate/new", pirate_data)
            .then(res => {
                history.push("/pirates")
            })
            .catch(err => {
                // Process each error message came from database and push them into an array to print it later.
                const errorResponse = err.response.data.errors;
                const errorArr = []
                // Loop through all errors and get the messages
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return(
        <div className="container">
            <div className="row mt-4">
                <div className="col-8">
                    <h1>Add Pirate</h1>
                </div>
                <div className="col-4">
                    <button onClick={() => history.push("/pirates")} className="btn btn-primary">Crew Board</button>
                </div>
            </div>
            <div className="row w-50 mx-auto mt-5">
                <div className="container">
                    {errors.length != 0 && errors.map( (error , i) => {
                        return (
                            <>
                                <p key={i}>{error}</p>
                            </>
                        )
                    })}
                    {<PirateForm onSubmitProps={createPirate} />}
                </div>
            </div>
        </div>
    )
}