import axiosInstance from "../services/api-client";
import { useState } from "react";

interface ProjectData {
    projectName: string;
    client: string;
    projectId: string;
    projectFolderNumber: string;
    projectDescription: string;
    projectLink: string;
    projectJury: string;
  }

const useCreateProject = () => {
  const [response, setResponse] = useState({ data: null, error: null, loading: false });

  const createProject = (postData: ProjectData) => {
    setResponse({ ...response, loading: true, error: null });

    axiosInstance
      .post('/projects/add/', postData)
      .then((res) => {
        setResponse({ data: res.data, error: null, loading: false });
      })
      .catch((error) => {
        setResponse({ data: null, error, loading: false });
      });
  };

  return { createProject, response };
};

export default useCreateProject;
