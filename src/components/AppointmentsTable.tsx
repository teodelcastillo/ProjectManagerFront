import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import Client from '../models/Client'
import useAppointments from '../hooks/useAppointments'

interface Props {
    selectedClient: Client | null
}

const AppointmentsTable = ({selectedClient}:Props) => {
    const {appointments, error, isLoading} = useAppointments()

    const filteredAppointments = selectedClient
        ? appointments.filter((appointment) => appointment.client === selectedClient.id)
        : appointments
    
  return (
    <>
    <TableContainer>
  <Table variant='simple'>
    <TableCaption>Vencimientos</TableCaption>
    <Thead>
      <Tr>
        <Th>Causa</Th>
        <Th>Titulo</Th>
        <Th>Descripcion</Th>
        <Th>Fecha</Th>
        <Th>Hora</Th>
        <Th>Estado</Th>
      </Tr>
    </Thead>
    <Tbody>
        {filteredAppointments.length > 0 ? (
            filteredAppointments.map((appointment) => 
                <Tr key={appointment.id}>
                <Td fontWeight={'400'}>{appointment.projectName}</Td>
                <Td>{appointment.title}</Td>
                <Td fontWeight={'400'}>{appointment.description}</Td>
                <Td fontWeight={'400'}>{appointment.date}</Td>
                <Td fontWeight={'400'}>{appointment.time}</Td>
                <Td fontWeight={'400'}>{appointment.is_done}</Td>
            </Tr>))
         : (
            <Tr>
                <Td fontWeight={'400'}>{error || (selectedClient ? `No hay próximos vencimientos para el cliente: ${selectedClient?.name}` : 'No hay próximos vencimientos')}</Td>
            </Tr>
            )}

    </Tbody>

  </Table>
</TableContainer>
</>
  )
}

export default AppointmentsTable