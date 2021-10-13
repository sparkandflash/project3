import React from 'react';
import { IconButton, HamburgerIcon} from '@chakra-ui/icons'
import Link from 'next/link';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useMediaQuery, Center, Text, Flex, Spacer, Box , Button
} from "@chakra-ui/react"
const s = "15px";

function Header() {
    var [isLargerThan1280] = useMediaQuery("(max-width: 910px)")
    //910px is max width before it gets ugly
   

        return (

            <header>
               
                    <Box h="80px" w="100%" p={2}>
                    {isLargerThan1280 ?
                     
                       
                   
                    
                   
                        
                        <Menu>
                        <MenuButton
                       scale="md"
                            as={Button}
                            outlineColor="lightblue"
                            aria-label="Options"
                            icon={<HamburgerIcon />}
                            variant="outline"
                            
                        />
                        <MenuList>
                            <MenuItem >
                                <Link href="/">RGV 1.0.0A</Link>
                            </MenuItem>
                            <MenuDivider />
                            <MenuItem >
                                <Link href="/privatetesting">Rug Monitor </Link>
                            </MenuItem>
                            <MenuItem >
                                <Link href="/walletscanner">Wallet Scanner </Link>
                            </MenuItem>
                            <MenuItem >
                                <Link href="/sniper">Sniper</Link>
                            </MenuItem>
                            <MenuItem >
                                <Link href="/privatetesting">List of Known Scammers</Link>
                            </MenuItem>
                            <MenuItem >
                                <Link href="/privatetesting">Tornado Cash Tracer</Link>
                            </MenuItem>
                            <MenuItem >
                                <Link href="/privatetesting"> Typhoon Finance Tracer</Link>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    :
                    <Center>
                    <Flex>
                        <Box p="2">
                            <Text fontSize={s}>
                                <Link href="/">RGV 1.0.0A</Link>
                            </Text>
                        </Box>
                        <Spacer />
                        <Box p="2">
                            <Text fontSize={s}>
                                <Link href="/privatetesting">Rug Monitor </Link>
                            </Text>
                        </Box>
                        <Spacer />
                        <Box p="2">
                            <Text fontSize={s}>
                                <Link href="/walletscanner">Wallet Scanner </Link>
                            </Text>
                        </Box>
                        <Spacer />
                        <Box p="2">
                            <Text fontSize={s}>
                                <Link href="/sniper">Sniper</Link>
                            </Text>
                        </Box>
                        <Spacer />
                        <Box p="2">
                            <Text fontSize={s}>
                                <Link href="/privatetesting">List of Known Scammers</Link>
                            </Text>
                        </Box>
                        <Spacer />
                        <Box p="2">
                            <Text fontSize={s}>
                                <Link href="/privatetesting">Tornado Cash Tracer</Link>
                            </Text>
                        </Box>
                        <Spacer />
                        <Box p="2">
                            <Text fontSize={s}>
                                <Link href="/privatetesting"> Typhoon Finance Tracer</Link>
                            </Text>
                        </Box>
                    </Flex>
                </Center>
}
                    </Box>

                   

            </header>


        );
    
}
export default Header
