import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import ListPirates from "../components/ListPirates";
import {useHistory} from "react-router-dom";
import UserSession from "../context/UserSession";
import LogoutButton from "../components/LogoutButton";

export default () => {

    const [pirates,setPirates] = useState([])
    const [loaded,setLoaded] = useState(false)
    const history = useHistory();
    const { user , setUser } = useContext(UserSession)

    useEffect( () => {
        if(user == null){
            history.push("/login");
        }

        axios.get("http://localhost:8000/api/pirate/all")
            .then(res => {
                setPirates(res.data.pirates);
                setLoaded(true);
            })
    },[pirates])

    return(
        <div className="container">
            <div className="row mt-2">
                <div className="col-8">
                    <h1>Pirate Crew</h1>
                </div>
                <div className="col-4">
                    <button onClick={() => history.push("/pirate/new")} className="btn btn-primary">Add Pirate</button>
                    {<LogoutButton setUserProps={setUser}/>}
                </div>
            </div>
            <div className="row w-50 mx-auto mt-3">
                <div className="container">
                    {loaded && <ListPirates pirates={pirates}/>}
                </div>
            </div>
        </div>
    )
}