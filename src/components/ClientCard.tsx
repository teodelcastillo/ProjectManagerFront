import { Card, CardHeader, Heading, CardBody, Stack, StackDivider, Box, Text, Button, CardFooter, HStack, IconButton } from '@chakra-ui/react'
import { CalendarIcon, EditIcon, SearchIcon  } from '@chakra-ui/icons'
import Client from '../models/Client'


interface Props {
    client: Client
}

const ClientCard = ({client}:Props) => {
  return (
    <Card>
    <CardHeader >
        <HStack justify={'space-between'}>
            <Heading size='md'>{client.name}</Heading>
            <IconButton aria-label='Edit client' variant={'ghost'} icon={<EditIcon/>}/>
        </HStack>
    </CardHeader>

    <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
        <Box>
            <Heading size='xs' textTransform='uppercase'>
            CUIT
            </Heading>
            <Text pt='2' fontSize='sm' fontWeight={'400'}>
            {client.clientID}
            </Text>
        </Box>
        <Box>
            <Heading size='xs' textTransform='uppercase'>
            Cantidad de causas
            </Heading>
            <Text pt='2' fontSize='sm' fontWeight={'400'}>
                {client.ammount_of_projects}
            </Text>
        </Box>

        </Stack>
    </CardBody>
    <CardFooter
    justify='space-between'

  >
    <Button flex='1' variant='ghost' leftIcon={<SearchIcon />}>
      Causas
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<CalendarIcon />}>
       Vencimientos
    </Button>
  </CardFooter>
    </Card>
  )
}

export default ClientCard