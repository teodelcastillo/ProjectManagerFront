import Client from "../models/Client";
import Project from "../models/Projects";
import useData from "./useData";

const useProjects = (selectedClient: Client | null) => {
  const endpoint = selectedClient ? `/projects/?client=${selectedClient.id}` : '/projects/';
  return useData<Project>(endpoint);
};

export default useProjects;
