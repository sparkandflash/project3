import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Divider, Text, Box } from "@chakra-ui/react"
const acc = "0x--some wallet address--"
export default function Home() {
  return (
    <div>

      <Header />
      <Divider />
      <Container p={5} h="600px" maxW="container.lg" centerContent='true'>
        
        <Box m="auto" p={4} borderColor="lightblue" rounded="20px" borderWidth="thin" h="650px">

          <Box h="150px" p={3}>

            <Text fontSize="2xl" align="center">
              RGV Scam Prevention Toolkit 1.0.0A
            </Text>

          </Box>

          <Box h="144px">

            <Text align="center">
              Current HEAD block: someblocknumber <br />
              Loaded Account: {acc} <br />
              Current Balance: 0.0 BNB <br />
              Current V1 Balance: 0.0 RGVzdGFudC4K V1 <br />
              Current V2 Balance: 0.0 RGVzdGFudC4K V2 <br />
              Current V3 Balance: 0.0 RGVzdGFudC4K V3 <br />
            </Text>

          </Box>

        </Box>

      </Container>
      <Divider />
      <Footer />

    </div>
  )
}
