
import { HStack } from '@chakra-ui/react'
import ProjectsGrid from '../components/ProjectsGrid'
import ClientSelect from '../components/ClientSelect'
import SearchInput from '../components/SearchInput'
import { useState } from 'react'
import Client from '../models/Client'

const WorkDashboard = () => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)
  return (
    <>
    <HStack>
      <ClientSelect onSelectClient={(client) => setSelectedClient(client)} />
      <SearchInput onSearch={() => console.log('Buscando')} />
    </HStack>
    <ProjectsGrid selectedClient={selectedClient} />
    </>
  )
}

export default WorkDashboard