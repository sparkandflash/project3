import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Divider, Text, Box } from "@chakra-ui/react";
function Private_testing() {
    //a
    return (
        <div>
            <Header />
         
            <Container p={5} h="400px" maxW="container.lg" centerContent='true'>
                <Box m="auto" p={4} shadow="lg" bg="blue.800" rounded="10px"  h="250px" >
<Box h="50px" p={5}>
                    <Text fontWeight="bold" fontSize="x-large">
                        Page Coming Soon.


                    </Text>
                    <Text color="gray.500">Currently in Private Testing.</Text>
</Box>

                    
                    </Box>
                
            </Container>
           
            <Footer />
        </div>
    )
}

export default Private_testing