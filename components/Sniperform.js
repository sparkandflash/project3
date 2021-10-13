import React, { useState, useEffect } from 'react';
import {
    Text, FormControl, FormLabel, Button, Box, Center, Input, VStack
} from "@chakra-ui/react"

function SnipeForm() {
    const Sniper = async event => {
        event.preventDefault()
        //on submit action
        console.log(event.target.coinaddress.value)
        console.log(event.target.sendto.value)
        console.log(event.target.BNBAmount.value)
        console.log(event.target.amountOftimes.value)
    }

    return (
        <Box w="100%" m="auto" p={5} rounded="20px" borderWidth="thin" h="100%" >

            <form onSubmit={Sniper}>

                <FormControl id="wallet">
                 <VStack>
                   <Box>
                    <FormLabel><Text fontSize="md">Coin Address:</Text></FormLabel>
                    <Input size="lg" variant="outline"   id="coinaddress" type="text" />
                </Box>

                <Box>
                    <FormLabel><Text fontSize="md">Wallet To Send To:</Text></FormLabel>
                    <Input size="lg" variant="outline"  placeholder="0x...." id="sendto" type="text" />
                </Box>

                <Box>
                    <FormLabel><Text fontSize="md">BNB Amount to Snipe:</Text></FormLabel>
                    <Input size="lg" variant="outline"   id="BNBAmount" type="text" />
                </Box>

                <Box>
                    <FormLabel><Text fontSize="md">Amount of Times to Buy:</Text></FormLabel>
                    <Input size="lg" variant="outline"   id="amountOftimes" type="text" />
                </Box>

                 </VStack>
                </FormControl>
                <Center>
                    <Box p={5}>
                        <Button h="10" p={2} size="lg"  type="submit" colorScheme="teal" variant="solid"  >Submit</Button>
                    </Box>
                </Center>
            </form>

        </Box>
    );
}
export default SnipeForm
