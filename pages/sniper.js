import Header from '../components/Header';
import Footer from '../components/Footer';
import Sniperform from '../components/Sniperform';
import { Container, Spacer, Center, Text, Box } from "@chakra-ui/react";
function Sniper() {
    //a
    const add = "0x..some-wallet-address";
    const key = "somekey-abcd"
    return (
        <div>
            <Header />
            
            <Container p={6} maxh="900px" maxW="container.lg" centerContent='true'>
                <Box m="auto" p={2}  bg="blue.800" shadow="lg" rounded="10px"  h="100%" >
                    <Box p={5}>
                    <Text color="blue.100" align="center" fontWeight="bold" fontSize="x-large">
                           Sniper 
                        </Text>
                        <Text color="gray.300" align="center" fontSize="md">
                            This is a beta Application. We are not liable for any snipes into malicious SCs remember, DYOR. <br />
                            Currently working on adding tradeEnable and block delay. <br />
                        </Text>
                        


                        <Text fontWeight="bold" align="center">
                            Please Deposit BNB to the above address via metamask and NOTE YOUR PRIVATE KEY! As soon as you leave this page this address will change for security. 
                          
                        </Text> 
                        <Spacer p={2}/>
                        <Center>
                            <Text color="gray.400" size="sm"  >
                                Your deposit Wallet:  {add}    <br />
                                Deposit Wallet Private Key:   {key}   <br />
                            </Text>
                            
                        </Center>
                        <Text color="gray.500" align="center">
                            Early beta access.
                        </Text>
                        <Box p={2}>
                            <Sniperform />
                        </Box>
                    </Box>
                </Box>
            </Container>
          
            <Footer />
        </div>
    )
}

export default Sniper