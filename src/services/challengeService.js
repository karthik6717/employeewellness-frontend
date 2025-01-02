import axios from "axios";
import { GET_ALL_CHALLENGES } from "../constants/apiEndpoints";
import { GET_CHALLENGE_BY_ID } from "../constants/apiEndpoints";
import { ADD_CHALLENGE } from "../constants/apiEndpoints";
import { UPDATE_CHALLENGE } from "../constants/apiEndpoints";
import { DELETE_CHALLENGE } from "../constants/apiEndpoints";

export const getAllChallenges = () => {
  const apiURL = GET_ALL_CHALLENGES;

  return axios.get(apiURL);
};

export const getChallengeById = (challeId) => {
  const apiURL = `${GET_CHALLENGE_BY_ID}${challeId}`;

  return axios.get(apiURL);
};

export const addChallenge = (formData) => {
  const apiURL = ADD_CHALLENGE;

  return axios.post(apiURL, formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateChallenge = (values) => {
  const apiURL = UPDATE_CHALLENGE;

  console.log(values);

  return axios.put(apiURL, values, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteChallenge = (challeId) => {
  const apiURL = DELETE_CHALLENGE + challeId;
  return axios.delete(apiURL);
};

