import axios from "axios";
import { GET_ALL_WELLNESSPROGRAMS } from "../constants/apiEndpoints";
import { GET_WELLNESSPROGRAM_BY_ID } from "../constants/apiEndpoints";
import { ADD_WELLNESSPROGRAM } from "../constants/apiEndpoints";
import { UPDATE_WELLNESSPROGRAM} from "../constants/apiEndpoints";
import { DELETE_WELLNESSPROGRAM } from "../constants/apiEndpoints";

export const getAllWellness = () => {
  const apiURL = GET_ALL_WELLNESSPROGRAMS;

  return axios.get(apiURL);
};

export const getWellnessProgramById = (wellnessProgramId) => {
  const apiURL = `${GET_WELLNESSPROGRAM_BY_ID}${wellnessProgramId}`;

  return axios.get(apiURL);
};

export const addWellness = (formData) => {
  const apiURL = ADD_WELLNESSPROGRAM;

  return axios.post(apiURL, formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateWellness = (values) => {
  const apiURL = UPDATE_WELLNESSPROGRAM;

  console.log(values);

  return axios.put(apiURL, values, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteWellness = (wellnessProgramId) => {
  const apiURL = DELETE_WELLNESSPROGRAM + wellnessProgramId;
  return axios.delete(apiURL);
};

