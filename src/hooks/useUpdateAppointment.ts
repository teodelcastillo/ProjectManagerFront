import { useState } from "react";
import appointmentsService from "../services/appointments-service";
import Appointment from "../models/Appointment";

const useUpdateAppointment = () => {
    const [response, setResponse] = useState({data: null, error: null, isLoading: false})

    const updateAppointment = (updateData: Appointment) => {
        setResponse({...response, isLoading: true, error: null})
        
        appointmentsService.update(updateData)
        .then((res) => {
            setResponse({data: res.data, error: null, isLoading: false})
        })
        .catch((error) => {
            setResponse({data: null, error , isLoading: false})
        })
    }

    return {updateAppointment, response}
}

export default useUpdateAppointment