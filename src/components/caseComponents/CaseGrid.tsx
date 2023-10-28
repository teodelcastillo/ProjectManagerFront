import { useEffect, useState } from 'react'
import apiClient from '../../services/api-client'
import { Text } from '@chakra-ui/react'

interface Case {
  id: number,
  projectName: string
}

interface FetchCaseResponse {
  count: number,
  results: Case[]
}

const CaseGrid = () => {
  const [projects, setProjects] = useState<Case[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient.get<FetchCaseResponse>('/getProjects/')
      .then(res => {
        console.log('Solicitud exitosa:', res.data);
        setProjects(res.data);
      })
      .catch(err => {
        console.error('Error al cargar los casos:', err);
        setError(err.message);
      });
  }, []);

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
