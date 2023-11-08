import { InfoOutlineIcon } from '@chakra-ui/icons'
import { Card, CardHeader, Heading, Divider, CardBody, Stack, StackDivider, CardFooter, HStack, Button, Box, Text } from '@chakra-ui/react'
import CreateAppointmentForProject from './CreateAppointmentForProject'
import Project from '../models/Projects'

interface Props {
    project: Project
}

const ProjectCard = ({project}:Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"} >
     
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