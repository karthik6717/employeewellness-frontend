import axios from "axios";
import { GET_ALL_EVENTS } from "../constants/apiEndpoints";
import { GET_EVENT_BY_ID } from "../constants/apiEndpoints";
import { ADD_EVENT } from "../constants/apiEndpoints";
import { UPDATE_EVENT } from "../constants/apiEndpoints";
import { DELETE_EVENT } from "../constants/apiEndpoints";

export const getAllEvents = async()=>{
    const apiURL = GET_ALL_EVENTS;
    try{
        const response = await axios.get(apiURL,{
          headers:{
            Authorization: "Bearer "+localStorage.getItem("token"),
          },
  
        });
        return response;
      }catch(error)
      {
         console.error('Error in fetching events:',error);
         throw error;
      }
};

export const getEventById = async(eventId) =>{
    const apiURL = `${GET_EVENT_BY_ID}${eventId}`;
    try{
        const response = await axios.get(apiURL,{
          headers:{
            Authorization: "Bearer "+localStorage.getItem("token"),
          },
    
        });
      
      return response;
      }catch(error)
      {
        console.error('Error in fetching event:',error);
           throw error;
      }
};

export const addEvent =async(formData) =>{
    const apiURL =ADD_EVENT;
    try{
        const response = await axios.post(apiURL,formData,{
          headers:{
            Authorization: "Bearer "+localStorage.getItem("token"),
          },
    
        });
      
      return response;
      }catch(error)
      {
        console.error('Error in while adding event:',error);
           throw error;
      }
};

export const updateEvent = async(values) =>{
    const apiURL = UPDATE_EVENT;
    try{
        const response = await axios.put(apiURL,values,{
          headers:{
            Authorization: "Bearer "+localStorage.getItem("token"),
          },
    
        });
      
      return response;
      }catch(error)
      {
        console.error('Error in while updating the event:',error);
           throw error;
      }
};

export const deleteEvent = async(eventId) =>{
    const apiURL = DELETE_EVENT + eventId;
    try{
        const response = await axios.delete(apiURL,{
          headers:{
            Authorization: "Bearer "+localStorage.getItem("token"),
          },
    
        });
      
      return response;
      }catch(error)
      {
        console.error('Error while deleting event:',error);
           throw error;
      }
};
