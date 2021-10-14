import React, { Component } from 'react';
import Image from 'next/image';
import { Box, Flex, Container,Text } from "@chakra-ui/react"
export default class Footer extends Component {
    render() {

        return (
            <footer >
         <Container   p={5} centerContent='true'>
         
  <Text color="gray.600">© 2021 Copyright: RGV.</Text>

        
      
</Container>
            </footer>
            );
        }
    }