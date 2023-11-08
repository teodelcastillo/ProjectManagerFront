import appointmentsService from "../services/appointments-service";
import { useState } from "react";
import Appointment from "../models/Appointment";



const useCreateAppointment = () => {
    const [response, setResponse] = useState({data: null, error: null, isLoading:false})

    const createAppointment = (postData: Appointment) => {
        setResponse({...response, isLoading: true, error:null});
      
        appointmentsService.create(postData)
        .then((res) => {
            setResponse({data: res.data, error: null, isLoading: false})
        })
        .catch((error) => {
            setResponse({data: null, error , isLoading: false})
        })
    }
    return {createAppointment, response}
}

export default useCreateAppointment