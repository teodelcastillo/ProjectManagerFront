import { HStack } from '@chakra-ui/react'
import ClientDrawer from './ClientDrawer'
import SearchInput from './SearchInput'


const GridBar = () => {
  return (
    <HStack>
        <ClientDrawer/>
        <SearchInput />
    </HStack>
  )
}

export default GridBar