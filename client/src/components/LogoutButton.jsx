import React from "react";
import {useHistory} from "react-router-dom";

export default (props) => {
    const { setUserProps , link } = props;
    const history = useHistory();

    const logout = (e) => {
        e.preventDefault();
        setUserProps(null);
        if(link != null){
            history.push(link)
        }else{
            history.push("/login")
        }
    }

    return(
        <>
            <button onClick={logout} className="btn btn-info">Logout</button>
        </>
    )
}