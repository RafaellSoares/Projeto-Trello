import axios from "axios";


const api = axios.create({
    baseURL:"https://api.trello.com/1/members/me?boards=all&organizations=all&key=f120dbe6a1555d1dc7f1a43338b44f4d&token=b5a70e9f7435c134e05dbe80553ad14aaf51d0e7bc7025da123015c10ace934c"
})
export default api;