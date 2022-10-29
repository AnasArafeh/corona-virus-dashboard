import axios from "axios";
import { baseAlert } from "../Helpers/AlertHelper";
import { REACT_APP_API_ENDPOINT } from "../Store/Settings";

const HttpServices = axios.create({
    baseURL: `${REACT_APP_API_ENDPOINT}`
})

HttpServices.interceptors.request.use(
    async (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

HttpServices.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, async function (error) {
    const { config, message } = error;
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    let ErrorMessage = "";
    if (error?.response?.status === 409) {
        ErrorMessage = error.response.data.Message
        baseAlert(ErrorMessage, undefined, "error")
    }
    else if (error?.response?.status === 404) {
        baseAlert("Not Found", undefined, "error")
    }
    else {
        baseAlert("An error has occurred", undefined, "error")
    }
    return Promise.reject(error);
});

export default HttpServices;