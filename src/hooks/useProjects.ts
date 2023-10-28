import { useState, useEffect } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"

interface Case {
    id: number,
    projectName: string
  }
  
  interface FetchCaseResponse {
    count: number,
    results: Case[]
  }

const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState('');
  
    useEffect(() => {
      const controller = new AbortController()

      apiClient
        .get<FetchCaseResponse>('/getProjects/', {signal: controller.signal})
        .then(res => {
            setProjects(res.data);
        })
        .catch(err => {
            if (err instanceof CanceledError) return
            console.error('Error al cargar los casos:', err);
            setError(err.message);
        });
      return()=> controller.abort()  
    }, []);

    return { projects, error }
}

export default useProjects