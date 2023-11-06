import { useRef, useState } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import {
  useDisclosure,
  Button,
  FormLabel,
  Input,
  Modal,
  FormControl,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  IconButton,
  Select,
  HStack,
  Textarea,
} from '@chakra-ui/react';
import useClients from '../hooks/useClients';
import useCreateProject from '../hooks/useCreateProject';

const CreateCase = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useClients();
  const { createProject } = useCreateProject(); // Importa el hook useCreateProject

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [formData, setFormData] = useState({
    projectName: "",
    client: "", // Esto debe ser un valor válido de cliente
    projectId: "",
    projectFolderNumber: "", // Esto debe ser un número válido de carpeta
    projectDescription: "",
    projectLink: "",
    projectJury: "",
    projectStartDate: "2023-10-20",  

  });
  

  const handleSave = () => {
    // Llama a createProject con los datos del proyecto
    createProject(formData);
  };

  return (
    <>
      <IconButton onClick={onOpen} aria-label='Add project' icon={<AddIcon />} />

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
            <FormControl isRequired>
              <FormLabel>Caratula</FormLabel>
              <Input
                ref={initialRef}
                placeholder='Titulo del proyecto'
                onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
              />
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Cliente</FormLabel>
              <Select
                placeholder='Cliente relacionado'
                overflow={'hidden'}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
              >
                {data.map((client) => <option key={client.id} value={client.id}>{client.name}</option>)}
              </Select>
            </FormControl>
            <HStack >
            <FormControl isRequired mt={4}>
              <FormLabel>Nro de Expediente</FormLabel>
              <Input
                ref={initialRef}
                type='number'
                placeholder='8579632'
                onChange={(e) => setFormData({ ...formData, projectId: e.target.value })}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Numero de carpeta</FormLabel>
              <Input
                ref={initialRef}
                type='number'
                placeholder='153'
                onChange={(e) => setFormData({ ...formData, projectFolderNumber: e.target.value })}
              />
              </FormControl>
            </HStack >
            <FormControl isRequired mt={4}>
              <FormLabel>Link Drive</FormLabel>
              <Input 
                ref={initialRef} 
                type='url'
                placeholder='https://drive.google.com/drive/folders/...'
                onChange={(e) => setFormData({...formData, projectLink: e.target.value})}  
              />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel>Juzgado u oficina</FormLabel>
              <Input 
                ref={initialRef} 
                type='text'
                placeholder='Conciliacion' 
                onChange={(e) => setFormData({...formData, projectJury: e.target.value})}  
              />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel>Descripcion</FormLabel>
              <Input 
                as={Textarea} 
                h={'155px'} 
                resize={'none'} 
                ref={initialRef} 
                placeholder='Breve descripcion del proyecto'
                onChange={(e) => setFormData({...formData, projectDescription: e.target.value})}  
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSave}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
          </ModalContent>

        </Modal>
    
    </>
  )
}

export default CreateCase