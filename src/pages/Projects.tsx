
import useProjects from '../hooks/useProjects'

export const Projects = () => {

  const { projects } = useProjects()
  return (
    <ul>
      {projects.map(project => <li key={project.id}>{project.projectName}</li>)}
    </ul>
  )
}
