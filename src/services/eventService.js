import axios from "axios";
import { GET_ALL_EVENTS } from "../constants/apiEndpoints";
import { GET_EVENT_BY_ID } from "../constants/apiEndpoints";
import { ADD_EVENT } from "../constants/apiEndpoints";
import { UPDATE_EVENT } from "../constants/apiEndpoints";
import { DELETE_EVENT } from "../constants/apiEndpoints";

export const getAllEvents =()=>{
    const apiURL = GET_ALL_EVENTS;
    return axios.get(apiURL);
};

export const getEventById = (eventId) =>{
    const apiURL = `${GET_EVENT_BY_ID}${eventId}`;
    return axios.get(apiURL);
};

export const addEvent =(formData) =>{
    const apiURL =ADD_EVENT;
    return axios.post(apiURL,formData,{
        headers:{
            "Content-Type":"application/json",
        },
    });
};

export const updateEvent = (values) =>{
    const apiURL = UPDATE_EVENT;
    return axios.put(apiURL,values,{
        header:{
            "Content-Type":"application/json",
        },
    });
};

export const deleteEvent = (eventId) =>{
    const apiURL = DELETE_EVENT + eventId;
    return axios.delete(apiURL)
};
