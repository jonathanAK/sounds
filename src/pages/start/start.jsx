import {startSound} from "../../services/midi.js";
import {Button} from "@mui/material";

function StartPage({setCurrentPage}) {

    const startSingleNote =()=>{
        startSound({});
        setCurrentPage('singleNote');
    };

    return <div>
        Welcome To Ear training
        select Game To Start
        <Button onClick={startSingleNote}>single Note</Button>
    </div>
}

export default StartPage;
