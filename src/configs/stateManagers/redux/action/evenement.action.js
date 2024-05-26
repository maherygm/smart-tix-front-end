import axios from "axios";
import { baseUrl } from "../../../../utils/baseUrls/baseUrls";

export const GET_EVENT = "GET_EVENT";
export const ADD_EVENT = "ADD_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";

export const getEvent = () => {
  return (dispatch) => {
    return axios.get(`${baseUrl.url}/api/evenement`).then((res) => {
      dispatch({
        type: GET_EVENT,
        payLoad: res.data,
      });
    });
  };
};

export const addEvent = (eventFormData) => {
  return (dispatch) => {
    return axios
      .post(`${baseUrl.url}/api/evenement`, eventFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        dispatch({
          type: ADD_EVENT,
          payLoad: res.data,
        });
      });
  };
};

export const deleteEvent = (eventId) => {
  return (dispatch) => {
    return axios.delete(`${baseUrl.url}/posts/${eventId}`).then((res) => {
      dispatch({
        type: DELETE_EVENT,
        payLoad: res.data,
      });
    });
  };
};
