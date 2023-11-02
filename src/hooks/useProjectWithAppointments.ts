import Project from "../models/Projects";
import useData from "./useData";

const useProjectWithAppointments = () => useData<Project>('/projectsWithAppointments/')

export default useProjectWithAppointments