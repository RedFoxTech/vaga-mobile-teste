import Axios from "axios";

const Api = Axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export default Api;
