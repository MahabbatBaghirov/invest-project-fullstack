import { BASE_URL } from "./base_url";
import axios from "axios";


export const getAllCards = async(name)=> {
    let Cards;
    let URL;
    if(!name) {
        URL = BASE_URL+"/cards"
    }
    else {
        URL = BASE_URL+`/cards/?name=${name}`
    }
    await axios.get(URL)
    .then(res=>{
        Cards = res.data
    })
    return Cards;
}

export const getCardById = async(id)=>{
    let Cards;
    await axios.get(`${BASE_URL}/cards/${id}`).then(res=>{
        Cards = res.data
    })
    return Cards
}

export const deleteCardById = async(id)=>{
    let message;
    await axios.delete(`${BASE_URL}/cards/${id}`).then(res=>{
        message = res.data
    })
    return message;
}

export const postCard =(payload)=>{
    axios.post(`${BASE_URL}/cards`,payload)
}

export const editCardById =(id,payload)=> {
    axios.put(`${BASE_URL}/cards/${id}`,payload)
}