import { clientId, clientSecret } from "./api";
import axios from "axios"

export const getToken = async ()=>
{
    console.log('token')
     const tokenResponse = await axios.post(
                    'https://accounts.spotify.com/api/token',
                    'grant_type=client_credentials',
                    {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`),
                        },
                    }
                );

                const accessToken = tokenResponse.data.access_token;
                localStorage.setItem('token',  JSON.stringify(`Bearer ${accessToken}`))
                
                return accessToken

}