import Client from "./Client"


export default interface Project {
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
  }