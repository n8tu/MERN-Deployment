import React, {useState} from "react";

export default (props) => {
    const {onSubmitProps} = props
    const [name,setName] = useState({value:"",error:true,message:""})
    const [image,setImage] = useState({value:"",error:true,message:""})
    const [treasures,setTreasures] = useState({value:null,error:true,message:""})
    const [pirateCatch,setPirateCatch] = useState({value:"",error:true,message:""})
    const [position,setPosition] = useState({value:"",error:true,message:""})
    const [peg,setPeg] = useState(true)
    const [eye,setEye] = useState(true)
    const [hook,setHook] = useState(true)



    const handleSubmit = (e) => {
        e.preventDefault();

        if([name.error,image.error,treasures.error,pirateCatch.error,position.error].every(
            value => value == false
        )){
            onSubmitProps({
                name:name.value,
                image:image.value,
                treasures:treasures.value,
                pirate_catch:pirateCatch.value,
                position:position.value,
                peg_leg:peg,
                eye_patch:eye,
                hook_hand:hook
            })
        }
    }

    const handleCheck = (e) => {
        switch (e.target.value){
            case "Eye Patch":
                setEye(e.target.checked);
                break;
            case "Peg Leg":
                setPeg(e.target.checked);
                break;
            case "Hook Hand":
                setHook(e.target.checked);
                break;
        }
    }

    const handleName = (e) => {
        let message = "";
        let error = false;
        if(e.target.value.length < 1){
            message = "Name is required!";
            error = true;
        }
        setName({
            value:e.target.value,
            message: message,
            error: error,
        })
    }

    const handleImage = (e) => {
        let message = "";
        let error = false;
        if(e.target.value.length < 1){
            message = "Image is required!";
            error = true;
        }
        setImage({
            value:e.target.value,
            message: message,
            error: error,
        })
    }

    const handleTreasures = (e) => {
        let message = "";
        let error = false;
        if(e.target.value.length < 1){
            message = "Treasures is required!";
            error = true;
        }
        setTreasures({
            value:e.target.value,
            message: message,
            error: error,
        })
    }

    const handlePirateCatch = (e) => {
        let message = "";
        let error = false;
        if(e.target.value.length < 1){
            message = "Pirate Catch is required!";
            error = true;
        }
        setPirateCatch({
            value:e.target.value,
            message: message,
            error: error,
        })
    }

    const handlePosition = (e) => {
        let message = "";
        let error = false;
        if(e.target.value.length < 1){
            message = "Position is required!";
            error = true;
        }
        setPosition({
            value:e.target.value,
            message: message,
            error: error,
        })
    }



    return(
        <form onSubmit={handleSubmit} className="container">
            <div className="row mb-3">
                <div className="col-6">
                    <label>Pirate Name:</label>
                    <input onChange={handleName} type="text" className="form-control"/>
                    {name.error && (<p className="text-danger">{name.message}</p>)}
                </div>
                <div className="col-6">
                    <label>Image Url:</label>
                    <input onChange={handleImage} type="text" className="form-control"/>
                    {image.error && (<p className="text-danger">{image.message}</p>)}
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12">
                    <label># of Treasure Chests:</label>
                    <input onChange={handleTreasures} type="number" className="form-control"/>
                    {treasures.error && (<p className="text-danger">{treasures.message}</p>)}
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12">
                    <label>Pirate Catch Phase</label>
                    <input onChange={handlePirateCatch} type="text" className="form-control"/>
                    {pirateCatch.error && (<p className="text-danger">{pirateCatch.message}</p>)}

                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12">
                    <label>Crew Position</label>
                    <select onChange={handlePosition} className="form-control">
                        <option value="" selected>Select position ...</option>
                        <option value="Captain">Captain</option>
                        <option value="First Mote">First Mote</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                        <option value="Boatswain">Boatswain</option>
                    </select>
                    {position.error && (<p className="text-danger">{position.message}</p>)}
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12">
                    <div className="mx-2">
                        <input onChange={handleCheck} type="checkbox" id="peg" value={"Peg Leg"} defaultChecked={true}/>
                        <label htmlFor="peg" className={"mx-2"}>Peg Leg</label>
                    </div>
                    <div className="mx-2">
                        <input onChange={handleCheck} type="checkbox" id="eye" value={"Eye Patch"} defaultChecked={true}/>
                        <label htmlFor="eye" className={"mx-2"}>Eye Patch</label>
                    </div>
                    <div className="mx-2">
                        <input onChange={handleCheck} type="checkbox" id="hook" value={"Hook Hand"} defaultChecked={true}/>
                        <label htmlFor="hook" className={"mx-2"}>Hook Hand</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <button type={"submit"} className="btn btn-dark w-50 mx-auto">Add Pirate</button>
            </div>
        </form>
    )
}