import { SimpleGrid } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import Client from '../models/Client';
import useProjectWithAppointments from '../hooks/useProjectWithAppointments';
import Project from '../models/Projects';

interface Props {
  selectedClient: Client | null;
}

const ProjectsGrid = ({ selectedClient }: Props) => {
  const { data, error } = useProjectWithAppointments();

  // Filtrar proyectos en función del cliente seleccionado
  const filteredProjects = selectedClient
    ? data.filter((project) => project.client === selectedClient.id)
    : data;

  // Función para calcular la urgencia de un proyecto en función de sus citas
  const calculateUrgency = (project:Project) => {
    const appointments = project.appointments;
    
    // Encuentra la cita más próxima
    const nearestAppointment = Math.min(...appointments.map((a) => new Date(a.date).getTime()));
    
    // Calcula la diferencia de tiempo (urgencia) en milisegundos
    const urgency = nearestAppointment - new Date().getTime();
    
    return urgency;
  };
  
  // Ordena los proyectos en función de la urgencia
  filteredProjects.sort((a, b) => calculateUrgency(a) - calculateUrgency(b));

  return (
    <>
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
    </>
  );
};

export default ProjectsGrid;
