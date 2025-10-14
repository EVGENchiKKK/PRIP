import { useEffect, useState } from "react";
import { getCategories } from "../../api/api";

export const useCategories = ()=>{
    const [genres, setGenres] = useState([]);
       const [loading, setLoading] = useState(true);
       const [error, setError] = useState(null);
   

       useEffect(()=>{
        getCategories().then(({data})=>{
            data?.categories?.items && setGenres(data?.categories?.items)
        }).catch((error)=>
            setError('Не удалось загрузить жанры. Проверьте настройки Spotify')).finally(()=>setLoading(false))
       },[])


    return {genres, loading, error}
}