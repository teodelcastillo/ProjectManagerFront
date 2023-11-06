import { CheckIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon, AlertTitle, AlertDescription, HStack, IconButton, Text } from "@chakra-ui/react"

interface Props {
    appointmentTitle: string,
    appointmentDate: string
}

const AppointmentAlert = ({ appointmentTitle, appointmentDate }: Props) => {
    const date = new Date(appointmentDate);
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
        <Alert status={status} colorScheme={color} justifyContent={'space-between'}>
            <HStack>
                <AlertIcon />
                <AlertTitle>{appointmentTitle}</AlertTitle>
            </HStack>
            <HStack>
                <AlertDescription><Text fontWeight={'normal'}> {formattedDate} </Text></AlertDescription>
                <IconButton ml={'3px'} aria-label="More information" icon={<InfoOutlineIcon />} variant={'outline'} colorScheme={color} size={'sm'} />
                <IconButton  aria-label="More information" icon={<CheckIcon />} variant={'outline'} colorScheme={color} size={'sm'} />
            </HStack>
        </Alert>
    );
}

export default AppointmentAlert;
