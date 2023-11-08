
import { SimpleGrid } from '@chakra-ui/react'
import ClientCard from '../components/ClientCard'
import useClients from '../hooks/useClients'

const Clients = () => {

  const {clients} = useClients()

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} marginTop={'10px'}>
      {clients.map((client) => <ClientCard client={client} />)}
    </SimpleGrid>
  )
}

export default Clients