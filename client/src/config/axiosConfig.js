import axios from "axios";

axios.interceptors.request.use(
    (config) =>

        /*
         * If (localStorage.getItem(TOKENS_KEY)) {
         *     config.headers.common['Authorization'] = "Bearer " + (JSON.parse(localStorage.getItem(TOKENS_KEY))).access
         * } else if (sessionStorage.getItem(TOKENS_KEY)) {
         *     config.headers.common['Authorization'] = "Bearer " + (JSON.parse(sessionStorage.getItem(TOKENS_KEY))).access
         * }
         */
        config
    ,
    (error) => Promise.reject(error)
);

axios.interceptors.response.use(
    (response) => response,
    async (error) => {

        try {
            //
            // switch (error.response.status) {
            //
            //     case 401:
            //         localStorage.clear();
            //         sessionStorage.clear();
            //         break;
            // case 403:
            // const {"data": {"tokenPair": tokens}} = await axios.post(
            //     `${restURL}/refresh`,
            //     {"refresh": JSON.parse(token).refresh}
            // );
            // const TOKENS_JSON = JSON.stringify(tokens);
            // if (sessionStorage.getItem(TOKENS_KEY)) {
            //
            //     sessionStorage.setItem(
            //         TOKENS_KEY,
            //         TOKENS_JSON
            //     );
            //     error.config.headers.Authorization = `Bearer ${JSON.parse(sessionStorage.getItem(TOKENS_KEY)).access}`;
            //
            // } else {
            //
            //     localStorage.setItem(
            //         TOKENS_KEY,
            //         TOKENS_JSON
            //     );
            //     error.config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem(TOKENS_KEY)).access}`;
            //
            // }
            // return axios.request(error.config);
            //     default:
            // }

        } catch (err) {
        }
        return error;

    }
);

export default axios;

