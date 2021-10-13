import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from '../components/Form';
import { Container, Divider, Text, Box } from "@chakra-ui/react";
function Walletscanner() {
    //a
    return (
        <div>
            <Header />
            <Divider />
            <Container p={5} h="600px" maxW="container.lg" centerContent='true'>
                <Box m="auto" p={4} borderColor="lightblue" rounded="20px" borderWidth="thin" h="450px" >
                    <Box h="50px" p={5}>
                        <Text align="center" fontSize="x-large">
                            RGVzdGFudC4K Wallet Scanner <br />
                            1.0.0A
                        </Text>
                        <Text align="center">Early beta access.
                        </Text>
                        <Box p={2}> 
                        <Form />
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Divider />
            <Footer />
        </div>
    )
}

export default Walletscanner