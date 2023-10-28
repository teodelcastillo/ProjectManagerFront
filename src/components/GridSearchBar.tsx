import { HStack } from '@chakra-ui/react'
import ClientDrawer from './ClientDrawer'
import SearchInput from './SearchInput'

const GridSearchBar = () => {
  return (
    <HStack>
        <ClientDrawer/>
        <SearchInput />
    </HStack>
  )
}

export default GridSearchBar