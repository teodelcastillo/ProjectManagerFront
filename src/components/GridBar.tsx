import { HStack } from '@chakra-ui/react'
import ClientDrawer from './ClientDrawer'
import SearchInput from './SearchInput'
import CreateCase from './CreateCase'

const GridBar = () => {
  return (
    <HStack>
        <ClientDrawer/>
        <SearchInput />
    </HStack>
  )
}

export default GridBar