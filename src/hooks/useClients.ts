import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface Client {
    id: number
    name: string
    clientId: string
}

interface fetchClientsResponse {
    clients: Client[]
}


const useClients = () => {

    const [clients, setClients] = useState([]);
    const [error, setError] = useState('');
  
    useEffect(() => {
      const controller = new AbortController()

      apiClient
        .get<fetchClientsResponse>('/getClients/', {signal: controller.signal})
        .then(res => {
            setClients(res.data);
        })
        .catch(err => {
            if (err instanceof CanceledError) return
            console.error('Error al cargar los casos:', err);
            setError(err.message);
        });
      return()=> controller.abort()  
    }, []);

    return { clients, error }

}

export default useClients