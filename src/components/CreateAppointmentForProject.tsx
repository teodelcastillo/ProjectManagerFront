import { AddIcon } from '@chakra-ui/icons'
import { Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Textarea, useDisclosure } from '@chakra-ui/react'
import Project from '../models/Projects'
import useUsers from '../hooks/useUsers'

interface Props {
    project: Project
}

const createAppointmentForProject = ({project}:Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { data } = useUsers()

    return (
      <>
        <Button onClick={onOpen} size={'sm'} leftIcon={<AddIcon />}>Vencimiento</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Nuevo vencimiento para "{project.projectName}"</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Titulo</FormLabel>
                <Input placeholder='"Contestar demanda"' />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Descripcion</FormLabel>
                <Input as={Textarea} resize={'none'} h={'125px'} placeholder='"Vence plazo para contestar demanda. Se le pidio la contestacion a Ford"' />
              </FormControl>
              <FormControl mt={4} >
                <FormLabel>Usuario responsable</FormLabel>
                <Select 
                  placeholder='@teodorodelctillo'
                  overflow={'hidden'}
                />
                {data.map(user => <option key={user.id} value={user.id}>{user.username}</option>)}
              </FormControl>
              <HStack>
              <FormControl mt={4}>
                <FormLabel>Fecha</FormLabel>
                <Input type='date' placeholder='"Contestar demanda"' />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Hora</FormLabel>
                <Input type='time' placeholder='"Contestar demanda"' />
              </FormControl>
              </HStack>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Crear
              </Button>
              <Button colorScheme='red' onClick={onClose}>Cerrar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default createAppointmentForProject