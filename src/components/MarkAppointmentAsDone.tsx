import React, { useRef, useState } from 'react'
import useUpdateAppointment from '../hooks/useUpdateAppointment'
import { CheckIcon } from '@chakra-ui/icons'
import { IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure, FormControl, FormLabel, HStack, Input, Select, Textarea } from '@chakra-ui/react'
import Appointment from '../models/Appointment'
import useUsers from '../hooks/useUsers'

interface Props {
    appointment: Appointment
    colorScheme: string
    buttonSize: string
}

const MarkAppointmentAsDone = ({colorScheme, appointment, buttonSize}:Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef(null)
    const {data} = useUsers()
    const {updateAppointment} = useUpdateAppointment()


    const client = appointment.client
    const [formData, setFormData] = useState({
        title: appointment.title,
        id: appointment.id,
        date: appointment.date,
        time: appointment.time, 
        description: appointment.description,
        
        is_done: true,
        done_date: '',
        done_user: '',
        done_comment: '',

        client: client,
        clientName: appointment.clientName,
        project: appointment.project,
        projectName: appointment.projectName
    })
    
    const markAsDone = () => {
        updateAppointment(formData)
        onClose()
    }

  return (
    <>
    <IconButton  aria-label="More information" icon={<CheckIcon />} variant={'outline'} colorScheme={colorScheme} size={buttonSize} ref={btnRef} onClick={onOpen}/>
        
    <Modal
      onClose={onClose}
      finalFocusRef={btnRef}
      isOpen={isOpen}
      scrollBehavior={'inside'}
    >
      <ModalOverlay />
      <ModalContent minH={'450px'}>
        <ModalHeader>{appointment.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>

              <FormControl mt={4}>
                <FormLabel>Comentario</FormLabel>
                <Input as={Textarea} resize={'none'} h={'125px'} placeholder='"Presente contestacion de demanda con cargo"' onChange={(e) => setFormData({...formData, done_comment: e.target.value })}/>
              </FormControl>
              <HStack>
                <FormControl mt={4} >
                    <FormLabel>Usuario</FormLabel>
                    <Select 
                    defaultValue={'@teodorodelcastillo'}
                    overflow={'hidden'}
                    onChange={(e) => setFormData({...formData, done_user: e.target.value})}
                    >
                    {data.map(user => <option key={user.id} value={user.id}>{user.username}</option>)}
                    </Select>
                </FormControl>
                <FormControl mt={4}>
                <FormLabel>Fecha</FormLabel>
                <Input type='date' onChange={(e) => setFormData({...formData, done_date: e.target.value })}/>
              </FormControl>
              </HStack>
        </ModalBody>
        <ModalFooter>
          
          <Button onClick={markAsDone} colorScheme='green'>Hecho</Button>
          <Button onClick={onClose} ml={3}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </>
  )
}

export default MarkAppointmentAsDone