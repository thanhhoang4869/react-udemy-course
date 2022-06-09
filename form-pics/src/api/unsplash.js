import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID KzGyo2AJ83B8w7lVceEWxw4LoTb1xpuiO9G0EOs55hM",
  },
});
