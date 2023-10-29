import React, { useEffect } from 'react';
import useClientProjects, { Project } from '../hooks/useClientProjects'; // Ajusta la importación según la ubicación de tu hook

interface ClientProjectsProps {
  clientId: number;
}

const ClientProjects: React.FC<ClientProjectsProps> = ({ clientId }) => {
  const { clientProjects, error } = useClientProjects(clientId);

  useEffect(() => {
    // Puedes agregar lógica adicional aquí si es necesario
  }, [clientProjects, error]);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <ul>
        {clientProjects.map((project: Project) => (
          <li key={project.id}>
            <strong>{project.projectName}:</strong> {project.projectDescription}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientProjects;
