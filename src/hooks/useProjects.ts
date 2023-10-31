import { useState, useEffect } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"
import useData from "./useData"

export interface Project {
    id: number
    projectId: string
    projectName: string
    projectDescription: string
    projectFolderNumber: string
    projectStatus: string
    projectJury: string
    projectLink: string
  }

const useProjects = () => useData<Project>('/getProjects/')

export default useProjects