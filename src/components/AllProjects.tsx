
import useProjects from '../hooks/useProjects'
import { SimpleGrid } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'
import Client from '../models/Client'

interface Props {
  selectedClient: Client | null
}

const AllProjects = ({selectedClient}: Props) => {
    const {projects, error} = useProjects()

      // Filtrar proyectos en función del cliente seleccionado
  const filteredProjects = selectedClient
  ? projects.filter((project) => project.client === selectedClient.id)
  : projects;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} marginTop={'10px'}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <li>
            {error || (selectedClient ? `No hay próximos vencimientos para el cliente: ${selectedClient?.name}` : 'No hay próximos vencimientos')}
          </li>
        )}
  </SimpleGrid>
  )
}

export default AllProjects