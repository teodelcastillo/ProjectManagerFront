import { SimpleGrid, Text } from '@chakra-ui/react'
import useProjects from '../../hooks/useProjects';
import ProjectCard from './ProjectCard';

const CaseGrid = () => {
  const {projects, error} = useProjects()
  return (
    <>
      { error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm: 1, md: 2, lg:3, xl:4}} spacing={10} padding='10px'>
        {projects ? (
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <li>{error || 'Loading...'}</li>
        )}
      </SimpleGrid >
    </>
  );
};

export default CaseGrid;