import axios from "axios";
import { GET_ALL_CHALLENGES } from "../constants/apiEndpoints";
import { GET_CHALLENGE_BY_ID } from "../constants/apiEndpoints";
import { ADD_CHALLENGE } from "../constants/apiEndpoints";
import { UPDATE_CHALLENGE } from "../constants/apiEndpoints";
import { DELETE_CHALLENGE } from "../constants/apiEndpoints";


//Register Challenge
import { REGISTER_CHALLENGE } from "../constants/apiEndpoints";
import { GET_REGISTERD_CHALLENGES } from "../constants/apiEndpoints";


export const getAllChallenges = async () => {
  const apiURL = GET_ALL_CHALLENGES;

  try {
    const response = await axios.get(apiURL, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response;
  } catch (error) {
    console.error("Error in fetching challenges:", error);
    throw error;
  }
};

export const getChallengeById = async (challeId) => {
  const apiURL = `${GET_CHALLENGE_BY_ID}${challeId}`;

  try {
    const response = await axios.get(apiURL, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    return response;
  } catch (error) {
    console.error("Error in fetching challenge:", error);
    throw error;
  }
};

export const addChallenge = async (formData) => {
  const apiURL = ADD_CHALLENGE;

  try {
    const response = await axios.post(apiURL, formData, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    return response;
  } catch (error) {
    console.error("Error in while adding challenge:", error);
    throw error;
  }
};

export const updateChallenge = async (values) => {
  const apiURL = UPDATE_CHALLENGE;
  try {
    const response = await axios.put(apiURL, values, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    return response;
  } catch (error) {
    console.error("Error in while updating the challenge:", error);
    throw error;
  }
};

export const deleteChallenge = async (challeId) => {
  const apiURL = DELETE_CHALLENGE + challeId;
  try {
    const response = await axios.delete(apiURL, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    return response;
  } catch (error) {
    console.error("Error while deleting challenge:", error);
    throw error;
  }
};

//Register Challenge
export const registerChallenge = (employeeId, challeId, formData) => {
  const apiURL = `${REGISTER_CHALLENGE}${employeeId}/${challeId}`;
  return axios.post(apiURL, formData, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};



export const getRegisterdChallenges = async (employeeId) => {
  const apiURL = `${GET_REGISTERD_CHALLENGES}${employeeId}`;

  try {
    const response = await axios.get(apiURL, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response;
  } catch (error) {
    console.error("Error in fetching Registered challenges:", error);
    throw error;
  }
};