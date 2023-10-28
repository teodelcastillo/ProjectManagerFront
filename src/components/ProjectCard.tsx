
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Heading, Text } from '@chakra-ui/react'
import { Project } from '../hooks/useProjects'

interface ProjectProps {
    project: Project
}

const ProjectCard = ({project}: ProjectProps) => {
  return (
    <Card borderRadius={10} overflow={"hidden"} h={'400px'}>
     
        <CardHeader>
            <Heading fontSize={"xl"}  h={75} overflow={'hidden'}>
                {project.projectName}
            </Heading>
			<Divider></Divider>      
        </CardHeader>
		<CardBody padding={'0 20px'}>
			<Text >
				{project.projectDescription}<br/>
				{project.projectStatus}<br />
				{project.projectFolderNumber} <br/>
				{project.projectJury}<br/>
				
			</Text>
		</CardBody>
		<CardFooter>
			<Button>View here</Button>
		</CardFooter>
		
    </Card>
  )
}

export default ProjectCard