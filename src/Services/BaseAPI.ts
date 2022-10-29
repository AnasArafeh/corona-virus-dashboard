import axios from "axios";
// import { baseAlert } from "../Helpers/AlertHelper";
import { REACT_APP_API_ENDPOINT } from "../Store/Settings";

const HttpServices = axios.create({
    baseURL: `${REACT_APP_API_ENDPOINT}`
})

HttpServices.interceptors.request.use(
    async (config) => {
        // const data = JSON.parse(localStorage.getItem('data') ?? "false");
        // const lang = localStorage.getItem('language');

        // config!.headers!['Accept-Language'] = "en";

        // if (data && data.expiration < new Date().toISOString()) {
        //     const controller = new AbortController();
        //     let newConfig = { ...config };
        //     newConfig.signal = controller.signal;

        //     if (isCancelledRefreshing) {
        //         queueItems(cancelledQueue, config);
        //         controller.abort();
        //         return newConfig;
        //     }

        //     isCancelledRefreshing = true;
        //     refreshAccessToken(config, cancelledQueue).finally(() => { isCancelledRefreshing = false; cancelledQueue = []; });

        //     controller.abort();
        //     return newConfig;
        // }

        //if (data) {
        //     config!.headers!.Authorization = `Bearer ${data.accessToken}`;
        // }

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
        //    baseAlert(ErrorMessage, undefined, "error")
    }
    else if (error?.response?.status === 404) {
        ErrorMessage = error.response.data.Message
        //  baseAlert(lang === "ar" ? "لم يتم العثور على شئ" : "Not Found", undefined, "error")
    }
    else {
        //    baseAlert(lang === "ar" ? "حدث خطأ" : "An error has occurred", undefined, "error")
    }
    return Promise.reject(error);
});

export default HttpServices;