import { Input } from '@chakra-ui/react'
import {useRef} from 'react'

interface Props {
  onSearch: (searchText: string) => void
  label: string
}

const SearchInput = ({onSearch, label}: Props) => {
  const ref = useRef<HTMLInputElement>(null)
  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      if (ref.current) onSearch(ref.current.value)

    }}>
      <Input ref={ref} placeholder={label} variant={'filled'}/>
    </form>
  )
}

export default SearchInput