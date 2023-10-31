
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, List, ListItem, useDisclosure } from '@chakra-ui/react'

import useClients from '../hooks/useClients'


const ClientDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {data} = useClients()

  return (
    <>
      <Button colorScheme='gray' onClick={onOpen} >
        Clientes
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
       
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Clientes</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Busque por nombre..' marginBottom={'10px'}/>
            <List >
              {data.map(client => <ListItem key={client.id} h={'40px'} w={'100%'} m={'3px 0'} as={Button} onClick={onClose} justifyContent={'flex-start'}>{client.name}</ListItem>)}
            </List>
              
            
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default ClientDrawer