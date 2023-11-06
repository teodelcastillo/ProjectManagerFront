
import { Stack } from "@chakra-ui/react";
import Appointment from "../models/Appointment";
import AppointmentAlert from "./AppointmentAlert";

interface Props {
  appointments: Appointment[];
}

const AppointmentsAlertInCard = ({ appointments }: Props) => {

  const sortedAppointments = appointments.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <Stack>
      {sortedAppointments.map((appointment) => (
        <AppointmentAlert
          key={appointment.id}
          appointmentTitle={appointment.title}
          appointmentDate={appointment.date}
        ></AppointmentAlert>
      ))}
    </Stack>
  );
}

export default AppointmentsAlertInCard;
