
import { Select } from '@chakra-ui/react'
import useClients, { Client } from '../hooks/useClients'

interface Props {
  onSelectClient: (client: Client) => void
  selectLabel: string
}

const ClientSelect = ({selectLabel, onSelectClient}: Props) => {
  const {data} = useClients()

  return (
    <Select placeholder={selectLabel} w={'150px'}>
      {data.map(client => <option value={client.id} key={client.id} onClick={() => onSelectClient(client)}>{client.name}</option>)}
    </Select>  
  )
}
export default ClientSelect