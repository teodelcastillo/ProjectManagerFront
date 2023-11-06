
import Appointment from "../models/Appointment";
import AppointmentAlert from "./AppointmentAlert";

interface Props {
  appointments: Appointment[];
}

const AppointmentsAlertInCard = ({ appointments }: Props) => {
  // Ordena las citas por fecha en orden ascendente (de la más próxima a la más lejana)
  const sortedAppointments = appointments.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <ul>
      {sortedAppointments.map((appointment) => (
        <AppointmentAlert
          key={appointment.id}
          appointmentTitle={appointment.title}
          appointmentDate={appointment.date}
        ></AppointmentAlert>
      ))}
    </ul>
  );
}

export default AppointmentsAlertInCard;
