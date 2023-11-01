
import { ReactNode } from 'react';
import NavBar from '../components/NavBar';
import { Grid, GridItem } from '@chakra-ui/react';

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Grid
      templateAreas={`"header"
                      "main"
                      "footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'1fr'}
      h='100vh'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
      padding={'0 10px'}
    >
      <GridItem area={'header'}>
        <NavBar />
      </GridItem>

      <GridItem area={'main'}>{children}</GridItem>
      <GridItem area={'footer'}>footer</GridItem>
    </Grid>
  );
};

export default Layout;
