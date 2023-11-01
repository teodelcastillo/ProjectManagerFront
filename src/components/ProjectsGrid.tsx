import { SimpleGrid } from '@chakra-ui/react';
import useProjects from '../hooks/useProjects';
import ProjectCard from './ProjectCard';
import Client from '../models/Client';

interface Props {
  selectedClient: Client | null;
}

const ProjectsGrid = ({ selectedClient }: Props) => {
  const { data, error } = useProjects();

  // Filtrar proyectos en función del cliente seleccionado
  const filteredProjects = selectedClient
    ? data.filter((project) => project.client === selectedClient.id)
    : data;

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} marginTop={'10px'}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <li>{error || `No hay proyectos para el cliente: ${selectedClient?.name}`}</li>
        )}
      </SimpleGrid>
    </>
  );
};

export default ProjectsGrid