import { SimpleGrid, Text } from '@chakra-ui/react';
import useProjects from '../hooks/useProjects';
import ProjectCard from './ProjectCard';
import Client from '../models/Client';

interface Props {
  selectedClient: Client | null;
}

const ProjectsGrid = ({ selectedClient }: Props) => {
  const { data, error } = useProjects(selectedClient);
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} marginTop={'10px'}>
        {data ? (
          data.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <li>{error || 'Loading...'}</li>
        )}
      </SimpleGrid>
    </>
  );
};

export default ProjectsGrid;
