import { HStack, Heading } from '@chakra-ui/react'
import ThemeSwitch from './ThemeSwitch'


const NavBar = () => {
  return (
    <HStack justify={'space-between'} h={'100%'}>
        <Heading size={"lg"}>del Castillo & Asociados</Heading>
        <ThemeSwitch />
    </HStack>
  )
}

export default NavBar