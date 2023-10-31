import { HStack } from '@chakra-ui/react'
import ClientDrawer from './ClientDrawer'
import SearchInput from './SearchInput'
import ClientSelect from './ClientSelect'


const GridBar = () => {
  return (
    <HStack>
        <ClientSelect  />
        <SearchInput />
    </HStack>
  )
}

export default GridBar