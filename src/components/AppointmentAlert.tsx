import { CheckIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon, AlertTitle, AlertDescription, HStack, IconButton } from "@chakra-ui/react"
import DetailedInformationModal from "./DetailedInformationModal";
import Appointment from "../models/Appointment";
import MarkAppointmentAsDone from "./MarkAppointmentAsDone";


interface Props {
    appointment: Appointment
}

const AppointmentAlert = ({ appointment }: Props) => {
    const date = new Date(appointment.date);
    const currentDate = new Date();

    // Calcula la diferencia en milisegundos entre la fecha de la cita y la fecha actual
    const timeDifference = date.getTime() - currentDate.getTime();

    let status = 'error'; // Por defecto, establece el estado como 'error'
    let color = 'blue';

    if (timeDifference > 7 * 24 * 60 * 60 * 1000) {
        // Si la diferencia es mayor a 7 días
        status = 'info';
    } else if (timeDifference > 0) {
        // Si la diferencia es positiva y menor o igual a 5 días
        status = 'info';
        color = 'yellow';
    } else if (timeDifference < 1) {
        status = 'error';
        color = 'red';
    }

    // Formatea la fecha en "dd/mm/yy"
    const formattedDate = new Intl.DateTimeFormat('es-AR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
    }).format(date);

    return (
        <Alert status={status} colorScheme={color} justifyContent={'space-between'} h={'55px'}>
            <HStack>
                <AlertIcon />
                <AlertTitle>{appointment.title}</AlertTitle>
            </HStack>
            <HStack>
                <AlertDescription fontWeight={'normal'}>{formattedDate} </AlertDescription>
                <DetailedInformationModal btnColor={color} child={appointment}/>
                <MarkAppointmentAsDone colorScheme={color} appointment={appointment}/>
            </HStack>
        </Alert>
    );
}

export default AppointmentAlert;
