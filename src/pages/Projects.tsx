import { Stack, HStack, Tag, TagLabel, TagCloseButton } from "@chakra-ui/react"
import AllProjects from "../components/AllProjects"
import ClientSelect from "../components/ClientSelect"
import CreateCase from "../components/CreateCase"
import SearchInput from "../components/SearchInput"
import { useState } from "react"
import Client from "../models/Client"

export const Projects = () => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)
  const clearFilter = () => {
    setSelectedClient(null)
  }

  return (
    <>
        <Stack h={'70px'}>
      <HStack>
        <ClientSelect onSelectClient={(client) => setSelectedClient(client)} />
        <CreateCase />
        <SearchInput label='Buscar por caratula' onSearch={() => console.log('Buscando')} />
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
    <AllProjects selectedClient={selectedClient}/>
    </>
  )
}
