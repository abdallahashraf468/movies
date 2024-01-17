import axios from "axios";
const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params: {
        api_key: "e586869e291b6042439a678f113ad2f8"
    }
})
export default axiosInstance;





















// axiosInstance.interceptors.request.use((config) => {
//     console.log(config);
//     if (config.url.startsWith("/movies")){
//         config.params.api_key = "e58"
//     }
//     return config
// }, (err) => {
//     return Promise.reject(err);
// });

// axiosInstance.interceptors.response.use((res) => {
//     console.log(res);
//     return res
// }, (err) => {
//     return Promise.reject(err);
// });