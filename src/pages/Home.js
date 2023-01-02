//import { useContext } from "react";
//import { AppContext } from "../App";
import {useQuery} from "@tanstack/react-query"
import Axios from "axios"

export const Home = () => {
    const { data: catData, isLoading, isError, refetch} = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((response) => response.data)
    })

    if(isLoading){
        return <h1>Loading...</h1>
    }

    if(isError){
        return <h1> There has been an error. </h1>
    }

    return(
    <div>
        <h1> Home Page:  <p> {catData?.fact}</p> </h1>
        <button onClick={refetch}>Update</button>
       
    </div>
)};