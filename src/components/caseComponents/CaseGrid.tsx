import { Text } from '@chakra-ui/react'
import useProjects from '../../hooks/useProjects';

const CaseGrid = () => {
  const {projects, error} = useProjects()
  return (
    <>
      { error && <Text>{error}</Text>}
      <ul>
        {projects ? (
          projects.map((project) => (
            <li key={project.id}>{project.projectName}</li>
          ))
        ) : (
          <li>{error || 'Loading...'}</li>
        )}
      </ul>
    </>
  );
};

export default CaseGrid;
