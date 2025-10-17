import axios from "axios"
import { getToken } from "./get-token"

export const Spotify = () => {
    return {
        ClientId:  "***********************",
        ClientSecret: "********************"
    }
}


export const clientId = "**********************"
export const clientSecret =  "****************************"


const BASE_URL = 'https://api.spotify.com/v1/browse'

const client = axios.create({baseURL:BASE_URL})


export const getCategories = async ()=>{
    const data = await client.get('/categories',{
    headers:{
        'Authorization':localStorage.getItem('token')
    }, 
    params: {
        locale: 'ru_RU', // названия на русском, если доступны
        limit: 4,       // максимум 50
    },})

    if(data.status !==200){
        getToken()
    }
    return data
}
