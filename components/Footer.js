import React, { Component } from 'react';
import { Container,Text } from "@chakra-ui/react"
export default class Footer extends Component {
    render() {

        return (
            <footer >
         <Container   p={5} centerContent='true'>
  <Text>© 2021 Copyright: RGV.</Text>
</Container>
            </footer>
            );
        }
    }