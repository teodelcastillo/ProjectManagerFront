
import { Project } from "./useClientProjects"
import useData from "./useData"


const useProjects = () => useData<Project>('/projects/')

export default useProjects