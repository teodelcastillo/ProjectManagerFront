import {  Avatar, Box, Flex, HStack, Image, Link, Text } from '@chakra-ui/react'
import ThemeSwitch from './ThemeSwitch'


const NavBar = () => {
  return (
    <HStack justify={'space-between'} h={'100%'}>
      <HStack w={'33%'}>
        <Image src='src\assets\logoestudio.png' alt='Estudio del Castillo & Asociados' boxSize={'50px'} objectFit={'cover'}/>
        <ThemeSwitch />
      </HStack>
      <HStack justify={'center'} gap={5} w={'33%'}>
        <Link>Panel general</Link>
        <Link>Clientes</Link>
        <Link>Vencimientos</Link>
        <Link>Calendario</Link>
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