
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Heading, Link, Popover, PopoverContent, PopoverTrigger, Stack, StackDivider, Text } from '@chakra-ui/react'
import { Project } from '../hooks/useProjects'
import ClientProjects from './ClientProjectsDashboard'

interface ProjectProps {
    project: Project
}

const ProjectCard = ({project}: ProjectProps) => {
  return (
    <Card borderRadius={10} overflow={"hidden"} h={'500px'}>
     
        <CardHeader>
            <Heading fontSize={"xl"}  h={75} overflow={'hidden'} textTransform={'uppercase'}>
                {project.projectName} - Expte: {project.projectId}
            </Heading>
			
			<Divider></Divider>      
        </CardHeader>
		<CardBody padding={'0 20px'}>
			<Stack divider={<StackDivider />} spacing={'2'}>
				<Box h={'80px'}>
					<Heading size={'xs'}>Descripcion</Heading>
					<Text fontWeight={'normal'} fontSize={'sm'} >
						{project.projectDescription}					
					</Text>
				</Box>

				<Box>
					<Heading size={'xs'}>Etapa</Heading>
					<Text fontWeight={'normal'} fontSize={'sm'} >
						{project.projectStatus}					
					</Text>
				</Box>
				<Box>
					<Heading size={'xs'}>Carpeta</Heading>
					<Text fontWeight={'normal'} fontSize={'sm'} >
						{project.projectFolderNumber}					
					</Text>
				</Box>
				<Box>
					<Heading size={'xs'}>Juzgado</Heading>
					<Text fontWeight={'normal'} fontSize={'sm'} >
						{project.projectJury}					
					</Text>
				</Box>
				<Box>
					<Heading size={'xs'}>Documentacion</Heading>
					<Link fontWeight={'normal'} fontSize={'sm'} >
						{project.projectLink}					
					</Link>
				</Box>
			</Stack>
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