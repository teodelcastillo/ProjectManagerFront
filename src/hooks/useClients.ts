
import { useEffect, useState } from "react";
import Client from "../models/Client";
import clientService from "../services/client-service";
import { CanceledError } from "axios";


const useClients = () => {
    const [clients, setClients] = useState<Client[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const { request, cancel } = clientService.get<Client>()

        request
            .then((res) => {
                setClients(res.data)
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

    return { clients, error, isLoading, setClients, setError, setIsLoading}
}

export default useClients