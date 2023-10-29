import { useDisclosure, Button, Box,Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Stack, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Textarea, DrawerFooter } from '@chakra-ui/react'
import  { useRef } from 'react'
import ClientDrawer from './ClientDrawer'

const CreateCase = () => {
   
        const { isOpen, onOpen, onClose } = useDisclosure()
        const firstField = useRef()
      
        return (
          <>
            <Button colorScheme='gray' onClick={onOpen}>
              Nueva causa
            </Button>
            <Drawer
              isOpen={isOpen}
              placement='right'
              initialFocusRef={firstField}
              onClose={onClose}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth='1px'>
                  Create a new account
                </DrawerHeader>
      
                <DrawerBody>
                  <Stack spacing='24px'>
                    <Box>
                      <FormLabel htmlFor='username'>Titulo</FormLabel>
                      <Input
                        ref={firstField}
                        id='username'
                        placeholder='Caratula del expediente'
                      />
                    </Box>
                    <Box>
                        <FormLabel htmlFor='client'>Cliente</FormLabel>
                        <ClientDrawer />
                    </Box>
                    <Box>
                      <FormLabel htmlFor='projectId'>Numero de expediente</FormLabel>
                      <Input
                        id='projectId'
                        placeholder='Numero de expediente o ID'
                      />
                    </Box>
                    <Box>
                      <FormLabel htmlFor='projetDescription'>Descripcion</FormLabel>
                      <Textarea as={Input} id='projectDescription' placeholder='Descripcion de la causa' overflow={'hidden'}/>
                    </Box>
                    <Box>
                      <FormLabel htmlFor='projectFolderNumber'>Nro de carpeta</FormLabel>
                      <Input id='projectFolderNumber' placeholder='631' type='number' />
                    </Box>
      
                    <Box>
                      <FormLabel htmlFor='projectLink'>Drive</FormLabel>
                      
                        <Input
                          type='url'
                          id='url'
                          placeholder='Link a la carpeta de Drive'
                        />

                    </Box>
      
                    <Box>
                      <FormLabel htmlFor='assignedTo'>Responsable</FormLabel>
                      <Select id='assignedTo' defaultValue='teo'>
                        <option value='alvaro'>Alvaro del Castillo</option>
                        <option value='agustin'>Agustin Frascaroli</option>
                        <option value='benjamin'>Benjamin de la Vega</option>
                        <option value='juan'>Juan Cravero</option>
                        <option value='reyes'>Reyes Sanchez</option>
                        <option value='teo'>Teodoro del Castillo</option>
                      </Select>
                    </Box>
                  </Stack>
                </DrawerBody>
      
                <DrawerFooter borderTopWidth='1px'>
                  <Button variant='outline' mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme='gray'>Submit</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </>
    
  )
}

export default CreateCase