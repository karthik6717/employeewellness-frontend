import axios from "axios";
import { GET_ALL_WELLNESSPROGRAMS } from "../constants/apiEndpoints";
import { GET_WELLNESSPROGRAM_BY_ID } from "../constants/apiEndpoints";
import { ADD_WELLNESSPROGRAM } from "../constants/apiEndpoints";
import { UPDATE_WELLNESSPROGRAM} from "../constants/apiEndpoints";
import { DELETE_WELLNESSPROGRAM } from "../constants/apiEndpoints";
import { WELLNESS_REGISTRATION_REGISTER } from "../constants/apiEndpoints";
import { GET_REGISTERED_WELLNESSPROGRAMS } from "../constants/apiEndpoints";

export const getAllWellness = async() => {
  const apiURL = GET_ALL_WELLNESSPROGRAMS;
  try{
    const response = await axios.get(apiURL,{
      headers:{
        Authorization: "Bearer "+localStorage.getItem("token"),
      },

    });
    return response;
  }catch(error)
  {
     console.error('Error in fetching wellnessProgram:',error);
     throw error;
  }
}

export const getWellnessProgramById = async(wellnessProgramId) => {
  const apiURL = `${GET_WELLNESSPROGRAM_BY_ID}${wellnessProgramId}`;

  try{
    const response = await axios.get(apiURL,{
      headers:{
        Authorization: "Bearer "+localStorage.getItem("token"),
      },

    });
  
  return response;
  }catch(error)
  {
    console.error('Error in fetching wellnessProgram:',error);
       throw error;
  }
};

export const addWellness = async(formData) => {
  const apiURL = ADD_WELLNESSPROGRAM;

  try{
    const response = await axios.post(apiURL,formData,{
      headers:{
        Authorization: "Bearer "+localStorage.getItem("token"),
      },

    });
  
  return response;
  }catch(error)
  {
    console.error('Error in while adding wellnessProgram:',error);
       throw error;
  }
};

export const updateWellness = async(values) => {
  const apiURL = UPDATE_WELLNESSPROGRAM;
  try{
    const response = await axios.put(apiURL,values,{
      headers:{
        Authorization: "Bearer "+localStorage.getItem("token"),
      },

    });
  
  return response;
  }catch(error)
  {
    console.error('Error in while updating the wellnessProgram:',error);
       throw error;
  }
};

export const deleteWellness = async(wellnessProgramId) => {
  const apiURL = DELETE_WELLNESSPROGRAM + wellnessProgramId;
  try{
    const response = await axios.delete(apiURL,{
      headers:{
        Authorization: "Bearer "+localStorage.getItem("token"),
      },

    });
  
  return response;
  }catch(error)
  {
    console.error('Error while deleting wellnessProgram:',error);
       throw error;
  }
};


//Register wellness program

export const registerWellnessProgram = (employeeId, wellnessProgramId, formData) => {
  const apiURL = `${WELLNESS_REGISTRATION_REGISTER}${employeeId}/${wellnessProgramId}`;
  return axios.post(apiURL, formData, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};


export const getRegisterdWellnessPrograms = async (employeeId) => {
  const apiURL = `${GET_REGISTERED_WELLNESSPROGRAMS}${employeeId}`;

  try {
    const response = await axios.get(apiURL, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response;
  } catch (error) {
    console.error("Error in fetching Registered wellness Programs:", error);
    throw error;
  }
};