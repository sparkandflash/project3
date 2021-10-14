import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { Container,   Text, Box } from "@chakra-ui/react";
const acc = "0x--some wallet address--" ;
const value ="somevalue";
export default function Home() {
  
  return (
    <div color="blue.900">

      <Header />
      
      <Container p={5}  h="500px" maxW="container.lg" centerContent='true'>
      
        <Box  m="auto" shadow="lg" p={4} opacity="90%" blur="3px" bg="blue.800" rounded="10px"  h="350px">

          <Box h="90px"  p={3}>

            <Text color="blue.100" fontSize="2xl" fontWeight="bold" align="center">
              RGV Scam Prevention Toolkit 1.0.0A
            </Text>

          </Box>

          <Box h="144px">

            <Text color="gray.300" align="center">
              Current HEAD block: someblocknumber <br />
              Loaded Account: {acc} <br />
              Current Balance: {value} <br />
              Current V1 Balance: {value} <br />
              Current V2 Balance: {value} <br />
              Current V3 Balance: {value} <br />
            </Text>

          </Box>

        </Box>
     
      </Container>
      
      <Footer />

    </div>
  )
}
