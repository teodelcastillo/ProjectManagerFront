import Appointment from "../models/Appointment"

interface Props {
    appointments: Appointment[]
}

const AppointmentsAlertInCard = ({appointments}:Props) => {
  return (

    <ul>
        {appointments.map(appointment => <li key={appointment.id}>{appointment.description}</li>)}
    </ul>
  )
}

export default AppointmentsAlertInCard