import { Stack } from "@chakra-ui/react";
import Appointment from "../models/Appointment";
import AppointmentAlert from "./AppointmentAlert";

interface Props {
  appointments: Appointment[];
}

const AppointmentsAlertInCard = ({ appointments }: Props) => {
  const sortedAppointments = appointments
    .filter(appointment => !appointment.is_done) 
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <Stack>
      {sortedAppointments.map((appointment) => (
        <AppointmentAlert
          key={appointment.id}
          appointment={appointment}
        ></AppointmentAlert>
      ))}
    </Stack>
  );
}

export default AppointmentsAlertInCard;
