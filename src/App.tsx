import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import CaseGrid from "./components/ProjectGrid"
import { Client } from "./hooks/useClients"

interface ProjectQuery {
  client: Client | null
  sortOrder: string
  searchText: string
}


function App() {


  return (
    <Grid
    templateAreas={`"header"
                    "main"
                    "footer"`}
    gridTemplateRows={'50px 1fr 30px'}
    gridTemplateColumns={'1fr'}
    h='200px'
    gap='1'
    color='blackAlpha.700'
    fontWeight='bold'
    height='100vh'
    padding={'0 10px'}
  >
    <GridItem   area={'header'}>
      <NavBar/>
    </GridItem>
  
    <GridItem   area={'main'} >
      <CaseGrid />
    </GridItem>
    <GridItem   area={'footer'}>
      footer
    </GridItem>
  </Grid>
  )
}

export default App
