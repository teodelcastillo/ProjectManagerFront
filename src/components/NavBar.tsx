import {  HStack, Image } from '@chakra-ui/react'
import ThemeSwitch from './ThemeSwitch'


const NavBar = () => {
  return (
    <HStack justify={'space-between'} h={'100%'} padding={'10px'}>
      <HStack>
        <Image src='src\assets\logoestudio.png' alt='Estudio del Castillo & Asociados' boxSize={'50px'} objectFit={'cover'}/>
        <ThemeSwitch />
      </HStack>
    </HStack>
  )
}

export default NavBar