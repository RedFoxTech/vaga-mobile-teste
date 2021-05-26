import api from "../services/api";


const Pokedash = async (data: string) =>{
    try {
        const response = await api.get(data);
            
        return (response.data.results)
    } catch (error) {
        return console.log(error)
    }

}

export default Pokedash