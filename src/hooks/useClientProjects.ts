import { useState, useEffect } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"
import Project from "../models/Projects"

interface FetchClientProjectsResponse {
  count: number,
  results: Project[]
}   

const useClientProjects = (clientID: number) => {
  const [clientProjects, setClientProjects] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchClientProjectsResponse>(`/clients/${clientID}/`, { signal: controller.signal })
      .then(res => {
        setClientProjects(res.data);
      })
      .catch(err => {
        if (err instanceof CanceledError) return;
        console.error('Error al cargar los casos:', err);
        setError(err.message);
      });

    return () => controller.abort();
  }, [clientID]);

  return { clientProjects, error };
}

export default useClientProjects;
