
import { Project } from "./useClientProjects"
import useData from "./useData"


const useProjects = () => useData<Project>('/getProjects/')

export default useProjects