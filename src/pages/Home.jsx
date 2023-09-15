import Axios from "axios";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export const Home =() => {
    const {data,refetch,isLoading} = useQuery (["cat"], () => {
        return Axios.get ("https://catfact.ninja/fact").then((res) => res.data);
    });
    console.log(data)
    
    if(isLoading) {
        return <h1> is Loading ....</h1>
    }
    return(
        <div>
            {data.fact}
            <div>
                <button onClick={refetch}>Update Data</button>
            </div>
        </div>
    )
}