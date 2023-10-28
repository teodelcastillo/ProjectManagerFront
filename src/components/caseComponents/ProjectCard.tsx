
import { Box, Card, CardBody, Heading } from '@chakra-ui/react'
import { Project } from '../../hooks/useProjects'

interface ProjectProps {
    project: Project
}

const ProjectCard = ({project}: ProjectProps) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
        <Box bg={"yellow"} h={50} w={"100%"}></Box>
        <CardBody>
            <Heading fontSize={"2xl"}>
                {project.projectName}
            </Heading>
        </CardBody>
    </Card>
  )
}

export default ProjectCard