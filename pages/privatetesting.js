import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Divider, Text, Box } from "@chakra-ui/react";
function Private_testing() {
    //a
    return (
        <div>
            <Header />
            <Divider />
            <Container p={5} h="600px" maxW="container.lg" centerContent='true'>
                <Box m="auto" p={4} borderColor="lightblue" rounded="20px" borderWidth="thin" h="250px" >
<Box h="50px" p={5}>
                    <Text fontSize="x-large">
                        Page Coming Soon.


                    </Text>
                    <Text>Currently in Private Testing.</Text>
</Box>

                    
                    </Box>
                
            </Container>
            <Divider />
            <Footer />
        </div>
    )
}

export default Private_testing