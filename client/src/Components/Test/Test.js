import React, {useEffect} from "react";
import axios from "../../config/axiosConfig";

function Test(props) {

    useEffect(() => {

        axios.get("/api/test").then((data) => {

            console.log(data);

        });

    });

    return (<></>);

}

export default Test;
