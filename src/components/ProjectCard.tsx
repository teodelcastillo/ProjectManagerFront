
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Heading, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text } from '@chakra-ui/react'
import { Project } from '../hooks/useProjects'
import ClientProjects from './ClientProjectsDashboard'

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
			<Popover>
				<PopoverTrigger>
					<Button>Trigger</Button>
				</PopoverTrigger>
				<PopoverContent>
					<ClientProjects clientId={1}/>
				</PopoverContent>
			</Popover>
		</CardFooter>
		
    </Card>
  )
}

export default ProjectCard