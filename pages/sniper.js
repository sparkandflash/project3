import Header from '../components/Header';
import Footer from '../components/Footer';
import Sniperform from '../components/Sniperform';
import { Container, Divider, Center, Text, Box } from "@chakra-ui/react";
function Sniper() {
    //a
    const add = "0x..some-wallet-address";
    const key = "somekey-abcd"
    return (
        <div>
            <Header />
            <Divider />
            <Container p={5} maxh="900px" maxW="container.lg" centerContent='true'>
                <Box m="auto" p={5} borderColor="lightblue" rounded="20px" borderWidth="thin" h="100%" >
                    <Box p={5}>
                        <Text align="center" fontSize="md">
                            This is a beta Application. We are not liable for any snipes into malicious SC's remember, DYOR. <br />
                            Currently working on adding tradeEnable and block delay. <br />
                        </Text>
                        <Center>
                            <Text align="justify" >
                                Your deposit Wallet:  {add}    <br />
                                Deposit Wallet Private Key:   {key}   <br />
                            </Text>
                        </Center>


                        <Text align="center">
                            Please Deposit BNB to the above address via metamask and NOTE YOUR PRIVATE KEY! As soon as you leave this page this address will change for security. <br />
                            Early beta access.
                        </Text>
                        <Box p={2}>
                            <Sniperform />
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Divider />
            <Footer />
        </div>
    )
}

export default Sniper