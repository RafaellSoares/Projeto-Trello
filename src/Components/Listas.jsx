import React from "react";
import { useParams } from "react-router-dom";

export default function Lista(){
    let params = useParams();
    return(
        <div>
            <h2>ID: {params.IDBOARD}</h2>
        </div>
    )
} 