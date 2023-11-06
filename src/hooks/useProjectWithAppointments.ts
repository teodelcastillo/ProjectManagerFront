import Project from "../models/Projects";
import useData from "./useData";

const useProjectWithAppointments = () => useData<Project>('/projects/with-appointments/')

export default useProjectWithAppointments