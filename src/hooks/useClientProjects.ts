import { useState, useEffect } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"

export interface Project {
  id: number
  projectName: string
  projectDescription: string
  projectFolderNumber: string
  projectStatus: string
  projectJury: string
}

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
      .get<FetchClientProjectsResponse>(`/client/${clientID}/projects/`, { signal: controller.signal })
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
