import Appointment from "./Appointment"
import Client from "./Client"
import PaginationInfo from "./PaginationInfo"


export default interface Project {
    paginationInfo?: PaginationInfo
    id: number
    projectId: string
    projectName: string
    projectDescription: string
    projectFolderNumber: string
    projectStatus: string
    projectJury: string
    projectLink: string
    client: Client
    clientName: string
    appointments: Appointment[]
  }