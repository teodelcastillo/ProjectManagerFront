import { HStack, Switch, useColorMode } from "@chakra-ui/react"



const ThemeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode()
  return (
    <HStack>
        <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
        
    </HStack>
  )
}

export default ThemeSwitch