
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, HStack, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
import Project from '../models/Projects'
import AppointmentsAlertInCard from './AppointmentsAlertInCard'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import CreateAppointmentForProject from './CreateAppointmentForProject'


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
			
			<Divider />      
        </CardHeader>
		<CardBody padding={'0 20px'}>
			<Stack divider={<StackDivider />} spacing={'2'}>
				<Stack h={'90px'} justify={'space-around'}>
					<Box>
						<Heading size={'xs'}>Cliente</Heading>
						<Text fontWeight={'normal'} fontSize={'sm'} >
							{project.clientName}	
						</Text>
					</Box>
					<Box>
						<Heading size={'xs'}>Nro de carpeta</Heading>
						<Text fontWeight={'normal'} fontSize={'sm'} >
							{project.projectFolderNumber}	
						</Text>
					</Box>
				</Stack>
				<Box overflow={'auto'} h={'200px'}>
					<Stack spacing={2} >
						<Heading size={'xs'}>Vencimientos</Heading>
						<AppointmentsAlertInCard appointments={project.appointments}></AppointmentsAlertInCard>
					</Stack>
				</Box>
			</Stack>
			<Divider />   
		</CardBody>
		<CardFooter>
			<HStack>
				<Button leftIcon={<InfoOutlineIcon />} size={'sm'}>Detalles</Button>
				<CreateAppointmentForProject project={project}/>
			</HStack>
		</CardFooter>
		
    </Card>
  )
}

export default ProjectCard