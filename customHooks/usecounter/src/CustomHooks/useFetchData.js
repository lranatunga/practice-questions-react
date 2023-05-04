import { useEffect, useState } from "react";

export default function useFetchData (url) { 

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState (null)

    useEffect(()=>{
       const getData = async () =>{
        try{ 
            const response = await fetch(url)
            const result = await response.json()
            setData(result)
            setError(null)
       } catch (error){
        setError(error.message)
       }
       setLoading(false)
        }
        getData()
    }, [url])

    return {data, loading, error};
     
}

