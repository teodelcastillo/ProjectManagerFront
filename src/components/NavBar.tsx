import {  Avatar, Box, Flex, HStack, Image, Link, Text } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import ThemeSwitch from './ThemeSwitch'


const NavBar = () => {
  return (
    <HStack justify={'space-between'} h={'100%'}>
      <HStack w={'33%'}>
        <Image src='src\assets\logoestudio.png' alt='Estudio del Castillo & Asociados' boxSize={'50px'} objectFit={'cover'}/>
        <ThemeSwitch />
      </HStack>
      <HStack justify={'center'} gap={5} w={'33%'}>
        <Link as={ReactRouterLink} to={'/'}>Panel general</Link>
        <Link as={ReactRouterLink} to={'/clients'}>Clientes</Link>
        <Link as={ReactRouterLink} to={'/projects'}>Causas</Link>
        <Link as={ReactRouterLink} to={'/appointments'}>Vencimientos</Link>
        <Link as={ReactRouterLink} to={'/calendar'}>Calendario</Link>
      </HStack>
      <HStack w={'33%'} justify={'flex-end'}>
      <Flex>
        <Box ml='3'>
          <Text fontWeight='bold'>
            Usuario
          </Text>
          <Text fontSize='sm'>Descripcion de rol</Text>
        </Box>
        <Avatar name='Teodoro del Castillo' src='src\assets\logoestudio.png' marginLeft={'7px'}/>
      </Flex>
      </HStack>
    </HStack>
  )
}

export default NavBar