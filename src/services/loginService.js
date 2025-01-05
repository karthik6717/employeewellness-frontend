import axios from "axios";
import { LOGIN } from "../constants/apiEndpoints"

export const login =(formData)=>{
    const apiURL = LOGIN +`?username=${formData.username}&password=${formData.password}`;
    return axios.post(apiURL,{
        headers:{
            "Content-Type":"application/json",
        },
    });
};