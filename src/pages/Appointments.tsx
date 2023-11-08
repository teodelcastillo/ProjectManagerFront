
import useAppointments from '../hooks/useAppointments'

const Appointments = () => {
  const { appointments } = useAppointments()
  return (
    <ul>
      {appointments.map((appointment) => <li key={appointment.id}>{appointment.title}</li>)}
    </ul>
  )
}

export default Appointments