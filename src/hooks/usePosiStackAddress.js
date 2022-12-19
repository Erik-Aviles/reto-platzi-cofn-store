import { useEffect, useState } from "react";
import axios from 'axios'

const usePosiStackAddress = address => {
    const [map, setMap] = useState({});
    
    const API = `http://api.positionstack.com/v1/forward?access_key=ad6fd358a8dcfb4085b12127cc30df77&query=${address}&limit=1`;
    
useEffect(() => {
    axios.get(API)
        .then(response => {
            setMap(response.data.data[0]);
            console.log(response.data.data[0])
        })
        .catch((error )=> {
        console.log(error);
        }); 
    }, [])
    return map;
}

export default usePosiStackAddress;
