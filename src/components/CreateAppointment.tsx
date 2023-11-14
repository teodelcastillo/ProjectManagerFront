import { AddIcon } from '@chakra-ui/icons'
import { Button, FormControl, FormLabel, HStack, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Textarea, useDisclosure } from '@chakra-ui/react'
import Project from '../models/Projects'
import useUsers from '../hooks/useUsers'
import useCreateAppointment from '../hooks/useCreateAppointment'
import { useRef, useState } from 'react'
import useClients from '../hooks/useClients'



const createAppointment = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { data } = useUsers()
    const { clients } = useClients()
    const { createAppointment } = useCreateAppointment()

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    const [formData, setFormData] = useState({
      id: 0,
      title: '',
      description: '',
      date: '',
      time: '',
      is_done: false,
      done_date: null,
      done_comment: null,
      client: null,
      clientName: '',
      project: null,
      projectName: ''
    })

    const handleCreate = () => {
      createAppointment(formData)
      onClose()
    }
    

    return (
      <>
        <IconButton onClick={onOpen} icon={<AddIcon />} aria-label={'Add new Appointment'} />
  
        <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef} finalFocusRef={finalRef}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Nuevo vencimiento</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Titulo</FormLabel>
                <Input placeholder='"Contestar demanda"' ref={initialRef} onChange={(e) => setFormData({...formData, title: e.target.value })}/>
              </FormControl>
              <FormControl mt={4} >
                <FormLabel>Cliente</FormLabel>
                <Select 
                  defaultValue={'@teodorodelcastillo'}
                  overflow={'hidden'}
                
                >
                  {clients.map(client => <option key={client.id} value={client.id}>{client.name}</option>)}
                </Select>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Descripcion</FormLabel>
                <Input as={Textarea} resize={'none'} h={'125px'} placeholder='"Vence plazo para contestar demanda. Se le pidio la contestacion a Ford"' onChange={(e) => setFormData({...formData, description: e.target.value })}/>
              </FormControl>
              <FormControl mt={4} >
                <FormLabel>Usuario responsable</FormLabel>
                <Select 
                  defaultValue={'@teodorodelcastillo'}
                  overflow={'hidden'}
                
                >
                  {data.map(user => <option key={user.id} value={user.id}>{user.username}</option>)}
                </Select>
              </FormControl>
              <HStack>
              <FormControl mt={4}>
                <FormLabel>Fecha</FormLabel>
                <Input type='date' onChange={(e) => setFormData({...formData, date: e.target.value })}/>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Hora</FormLabel>
                <Input type='time' onChange={(e) => setFormData({...formData, time: e.target.value })} />
              </FormControl>
              </HStack>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleCreate}>
                Crear
              </Button>
              <Button colorScheme='red' onClick={onClose}>Cerrar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default createAppointment