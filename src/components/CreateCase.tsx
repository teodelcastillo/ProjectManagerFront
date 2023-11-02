import { AddIcon } from '@chakra-ui/icons'
import { useDisclosure, Button, FormLabel, Input, Modal, FormControl, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, IconButton, Select, HStack, Textarea } from '@chakra-ui/react'
import { useRef } from 'react'
import useClients from '../hooks/useClients'




const CreateCase = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const {data} = useClients()

  return (
    <>
      <IconButton onClick={onOpen} aria-label='Add project' icon={<AddIcon />}/>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior={'inside'}
      >
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>Nueva causa / proyecto</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} >
            <FormControl>
              <FormLabel>Caratula</FormLabel>
              <Input ref={initialRef} placeholder='Titulo del proyecto' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Cliente</FormLabel>
              <Select placeholder='Cliente relacionado' overflow={'hidden'}>
                {data.map((client) => <option key={client.id} value={client.id}>{client.name}</option>)}
              </Select>
            </FormControl>
            <HStack >
            <FormControl mt={4}>
              <FormLabel>Nro de Expediente</FormLabel>
              <Input ref={initialRef} type='number' placeholder='8579632' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Numero de carpeta</FormLabel>
              <Input ref={initialRef} type='number' placeholder='153' />
            </FormControl>
            </HStack >
            <FormControl mt={4}>
              <FormLabel>Link Drive</FormLabel>
              <Input ref={initialRef} placeholder='https://drive.google.com/drive/folders/...' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Juzgado u oficina</FormLabel>
              <Input ref={initialRef} placeholder='Conciliacion' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Descripcion</FormLabel>
              <Input as={Textarea} h={'155px'} resize={'none'} ref={initialRef} placeholder='Breve descripcion del proyecto'/>
            </FormControl>
          </ModalBody>
          </ModalContent>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </Modal>
    
    </>
  )
}

export default CreateCase