
import { useEffect, useState } from "react";
import Projectservice from "../services/project-service";
import { CanceledError } from "axios";
import Project from "../models/Projects";


const useProjects = () => {
    const [projects, setProjects] = useState<Project[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const { request, cancel } = Projectservice.get<Project>()

        request
            .then((res) => {
                setProjects(res.data)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return
                setError(err.message)
            })
            .finally(() => {
                setIsLoading(false)
            })

        return () => cancel()
    }, [])

    return { projects, error, isLoading, setProjects, setError, setIsLoading}
}

export default useProjects