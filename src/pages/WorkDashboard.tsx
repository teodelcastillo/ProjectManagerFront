
import { HStack, Stack, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react'
import ProjectsGrid from '../components/ProjectsGrid'
import ClientSelect from '../components/ClientSelect'
import SearchInput from '../components/SearchInput'
import { useState } from 'react'
import Client from '../models/Client'

const WorkDashboard = () => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)
  const clearFilter = () => {
    setSelectedClient(null)
  }

  return (
    <>
    <Stack h={'70px'}>
      <HStack>
        <ClientSelect onSelectClient={(client) => setSelectedClient(client)} />
        <SearchInput onSearch={() => console.log('Buscando')} />
      </HStack>
      <div>
        {selectedClient ? 
        <Tag
          size={'md'}
          borderRadius='full'
          colorScheme='green'
        >
          <TagLabel>{selectedClient.name}</TagLabel>
          <TagCloseButton onClick={clearFilter}/>
        </Tag> : <span></span>}
        </div>
    </Stack>
    <ProjectsGrid selectedClient={selectedClient} />
    </>
  )
}

export default WorkDashboard