import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from '../components/Form';
import { Container, Divider, Text, Box } from "@chakra-ui/react";
function Walletscanner() {
    //a
    return (
        <div>
            <Header />
         
            <Container p={5} h="550px" maxW="container.lg" centerContent='true'>
                <Box m="auto" p={2}  shadow="lg" bg="blue.800" rounded="10px"  h="450px" >
                    <Box h="50px" p={3}>
                        <Text color="blue.100" align="center" fontWeight="bold" fontSize="x-large">
                            RGVzdGFudC4K Wallet Scanner <br />
                            1.0.0A
                        </Text>
                        <Text color="gray.500" align="center">Early beta access.
                        </Text>
                        <Box p={2}> 
                        <Form />
                        </Box>
                    </Box>
                </Box>
            </Container>
          
            <Footer />
        </div>
    )
}

export default Walletscanner