import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";



interface fetchResponse<T> {
    results: T[]
}


const useData = <T>(endpoint: string) => {

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
  
    useEffect(() => {
      const controller = new AbortController()

      apiClient
        .get<fetchResponse<T>>(endpoint, {signal: controller.signal})
        .then(res => {
            setData(res.data);
        })
        .catch(err => {
            if (err instanceof CanceledError) return
            console.error('Error al cargar los casos:', err);
            setError(err.message);
        });
      return()=> controller.abort()  
    }, []);

    return { data, error }

}

export default useData