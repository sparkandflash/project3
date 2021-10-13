import React, { useState, useEffect } from 'react';
import {
    Text, FormControl, FormLabel, Button, Box, Center, Input
} from "@chakra-ui/react"

function WalForm() {
    const [loading, setLoading] = useState(false)
    const [disableinput, setDisableinput] = useState(false)
    const getwallet = async event => {
        event.preventDefault()
        //on submit action
        console.log(event.target.address.value)
    }

    return (
        <Box w="100%" m="auto" p={5} rounded="20px" borderWidth="thin" h="250px" >

            <form onSubmit={getwallet}>

                <FormControl id="wallet">
                    <FormLabel><Text fontSize="md">Wallet address:</Text></FormLabel>
                    <Input size="lg" variant="outline" disabled={disableinput} placeholder="0x...." id="address" type="text" />
                </FormControl>
                <Center>
                    <Box p={5}>
                        <Button h="10" p={2} size="lg" isLoading={loading} type="submit" colorScheme="teal" variant="solid"  >Submit</Button>
                    </Box>
                </Center>
            </form>

        </Box>
    );
}
export default WalForm

