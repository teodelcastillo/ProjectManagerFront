
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import useClients from '../hooks/useClients'
import Client from '../models/Client'

interface Props {
  onSelectClient: (client: Client) => void
}

const ClientSelect = ({onSelectClient}: Props) => {
  const {data} = useClients()

  return (
    <Menu>
  <MenuButton as={Button}>
    Clientes
  </MenuButton>
  <MenuList>
    {data.map(client => <MenuItem as={Button} onClick={() => onSelectClient(client)} key={client.id}>{client.name}</MenuItem>)}
  </MenuList>
</Menu>
  )
}
export default ClientSelect