import axios from "axios";
import { GET_ALL_DOCTORS } from "../constants/apiEndpoints";
import { GET_DOCTOR_BY_ID } from "../constants/apiEndpoints";
import { ADD_DOCTOR} from "../constants/apiEndpoints";
import { UPDATE_DOCTOR } from "../constants/apiEndpoints";
import { DELETE_DOCTOR } from "../constants/apiEndpoints";

export const getAllDoctors = () => {
  const apiURL = GET_ALL_DOCTORS;

  return axios.get(apiURL);
};

export const getDoctorById = (doctorId) => {
  const apiURL = `${GET_DOCTOR_BY_ID}${doctorId}`;

  return axios.get(apiURL);
};

export const addDoctor = (formData) => {
  const apiURL = ADD_DOCTOR;

  return axios.post(apiURL, formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateDoctor = (values) => {
  const apiURL = UPDATE_DOCTOR;
  return axios.put(apiURL, values, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteDoctor = (doctorId) => {
  const apiURL = DELETE_DOCTOR + doctorId;
  return axios.delete(apiURL);
};

