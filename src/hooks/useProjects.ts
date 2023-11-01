
import Project from "../models/Projects";
import useData from "./useData";

const useProjects = () =>   useData<Project>('/projects')


export default useProjects;
