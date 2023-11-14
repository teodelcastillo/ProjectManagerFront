import Project from "../models/Projects";
import useData from "./useData";

const useProjectWithAppointmentsNotDone = () => useData<Project>('/projects/workbench/')

export default useProjectWithAppointmentsNotDone