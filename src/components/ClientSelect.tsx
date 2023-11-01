
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import useClients from '../hooks/useClients'


const ClientSelect = () => {
  const {data} = useClients()

  return (
    <Menu>
  <MenuButton as={Button}>
    Clientes
  </MenuButton>
  <MenuList>
    {data.map(client => <MenuItem as={Button} key={client.id}>{client.name}</MenuItem>)}
  </MenuList>
</Menu>
  )
}
export default ClientSelect