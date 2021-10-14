import { React,  useState, useEffect } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import {
    Menu,
    MenuButton,
    MenuList,
    useTheme,
    MenuItem,
    MenuDivider,
    useMediaQuery, Center,  VStack, Text, Flex, Spacer, Box, IconButton
} from "@chakra-ui/react"
const styles = {"color":"blue.100","textShadow":"lg", "fontWeight":"bold", "fontSize":"sm"};

function Header() {
    const [isMinWidth, setIsMinWidth] = useState(false);
    const [mediaQuery] = useMediaQuery("(min-width: 940px)");
    console.log(mediaQuery);
    const theme = useTheme()
    useEffect(() => {
        setIsMinWidth(mediaQuery);
    }, []);
    return (

        <header>
           
            <Box m="auto" h="60px" w="100%" p={1}>

                {isMinWidth ?
                    <Center>
                        <Flex>
                            <Box p="2">
                                <Text  {...styles}>
                                    <Link href="/">RGV 1.0.0A</Link>
                                </Text>
                            </Box>
                            <Spacer p={1}/>
                            <Box p="2">
                                <Text {...styles}>
                                    <Link href="/privatetesting">Rug Monitor</Link>
                                </Text>
                            </Box>
                            <Spacer p={1}/>
                            <Box p="2">
                                <Text {...styles}>
                                    <Link href="/walletscanner">Wallet Scanner </Link>
                                </Text>
                            </Box>
                            <Spacer p={1} />
                            <Box p="2">
                                <Text {...styles}>
                                    <Link href="/sniper">Sniper</Link>
                                </Text>
                            </Box>
                            <Spacer p={1}/>
                            <Box p="2">
                                <Text {...styles}>
                                    <Link href="/privatetesting">List of Known Scammers</Link>
                                </Text>
                            </Box>
                            <Spacer p={1}/>
                            <Box p="2">
                                <Text {...styles}>
                                    <Link href="/privatetesting">Tornado Cash Tracer</Link>
                                </Text>
                            </Box>
                            <Spacer p={1}/>
                            <Box p="2">
                                <Text {...styles}>
                                    <Link href="/privatetesting"> Typhoon Finance Tracer</Link>
                                </Text>
                            </Box>
                        </Flex>
                    </Center>

                    :

                    <Box p={3}>
                        <Menu
                            closeOnBlur="false"
                        >
                            <MenuButton
                                size="lg"
                                as={IconButton}
                                colorScheme="cyan"
                                aria-label="Options"
                                icon={<HamburgerIcon />}


                            />
                            <MenuList

                            >
                                <VStack>
                                    <MenuItem >
                                        <Box p="1">
                                            <Text fontSize="md">
                                                <Link href="/">RGV 1.0.0A</Link>
                                            </Text>
                                        </Box>
                                    </MenuItem>
                                    <MenuDivider />
                                    <MenuItem >
                                        <Box p="1">
                                            <Text fontSize={15}>
                                                <Link href="/privatetesting">Rug Monitor </Link>
                                            </Text>
                                        </Box>
                                    </MenuItem>
                                    <MenuItem >
                                        <Box p="1">
                                            <Text fontSize={15}>
                                                <Link href="/walletscanner">Wallet Scanner </Link>
                                            </Text>
                                        </Box>
                                    </MenuItem>
                                    <MenuItem >
                                        <Box p="1">
                                            <Text fontSize={15}>
                                                <Link href="/sniper">Sniper</Link>
                                            </Text>
                                        </Box>
                                    </MenuItem>
                                    <MenuItem >
                                        <Box p="1">
                                            <Text fontSize={15}>
                                                <Link href="/privatetesting">List of Known Scammers</Link>
                                            </Text>
                                        </Box>
                                    </MenuItem>
                                    <MenuItem >
                                        <Box p="1">
                                            <Text fontSize={15}>
                                                <Link href="/privatetesting">Tornado Cash Tracer</Link>
                                            </Text>
                                        </Box>
                                    </MenuItem>
                                    <MenuItem >
                                        <Box p="1">
                                            <Text fontSize={15}>
                                                <Link href="/privatetesting"> Typhoon Finance Tracer</Link>
                                            </Text>
                                        </Box>
                                    </MenuItem>
                                </VStack>
                            </MenuList>
                        </Menu>
                    </Box>

                }




            </Box>
        </header>
    )
}
export default Header
