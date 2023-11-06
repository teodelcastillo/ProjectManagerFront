
import useProjects from '../hooks/useProjects'

export const Projects = () => {

  const {data } = useProjects()
  return (
    <ul>
      {data.map(project => <li key={project.id}>{project.projectName}</li>)}
    </ul>
  )
}
