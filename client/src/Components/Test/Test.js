import React, {useEffect} from "react";
import axios from "../../config/axiosConfig";

function Test(props) {

    useEffect(() => {

        axios.get("/api/v1/test").then((data) => {

            console.log(data);

        });

    });

    return null;

}

export default Test;
