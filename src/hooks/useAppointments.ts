
import { useEffect, useState } from "react";
import Appointment from "../models/Appointment";
import AppointmentsService from "../services/appointments-service";
import { CanceledError } from "axios";


const useAppointments = () => {
    const [appointments, setAppointments] = useState<Appointment[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const { request, cancel } = AppointmentsService.get<Appointment>()

        request
            .then((res) => {
                setAppointments(res.data)
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

    return { appointments, error, isLoading, setAppointments, setError, setIsLoading}
}

export default useAppointments