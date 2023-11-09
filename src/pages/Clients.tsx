
import { HStack, SimpleGrid } from '@chakra-ui/react'
import ClientCard from '../components/ClientCard'
import useClients from '../hooks/useClients'
import CreateCase from '../components/CreateCase'
import SearchInput from '../components/SearchInput'

const Clients = () => {

  const {clients} = useClients()

  return (
    <>
    <HStack>
        <CreateCase />
        <SearchInput label='Buscar por nombre' onSearch={() => console.log('Buscando')} />
    </HStack>
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} marginTop={'10px'}>
      {clients.map((client) => <ClientCard client={client} key={client.id}/>)}
    </SimpleGrid>
    </>
  )
}

export default Clients