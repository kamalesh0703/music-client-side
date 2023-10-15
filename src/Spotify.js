import axios from 'axios';

const authEndpoint="http://accounts.spotify.com/authorize?";
const clientID="228d511ddf614b40a8bee92af9823889";
const redirectUri="http://localhost:3001";
const scopes=["user-library-read", "playlist-read-private"];

export const loginEndpoint=`${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

const apiClient=axios.create({
    baseURL:"https://api.spotify.com/v1/",
});

export const setClientToken=(token)=>{
    apiClient.interceptors.request.use(async function(config){
        config.headers.Authorization="Bearer " + token;
        return config;
    })
}
export default apiClient;