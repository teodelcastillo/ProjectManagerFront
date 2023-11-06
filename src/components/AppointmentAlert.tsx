import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react"


interface Props {
    key: number
    appointmentTitle: string,
    appointmentDate: string
}

const AppointmentAlert = ({appointmentTitle, appointmentDate}:Props) => {

  return (

    <Alert status='error'>
        <AlertIcon />
        <AlertTitle>{appointmentTitle}</AlertTitle>
        <AlertDescription>{appointmentDate}</AlertDescription>
    </Alert>
  )
}

export default AppointmentAlert;