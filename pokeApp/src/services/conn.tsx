import React from 'react';
import api from "./api"

const GetDatas = async () => {
    try{let response = await api.get('pokemon?limit=2')
    let data = response.data;
    // const [data, setData] = React.useState([])
    // setData(response.data);

    return(data);
    } catch(e) {
        return e
    }
}

export default GetDatas()