import { React, Window, useState, useEffect } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useMediaQuery, Center, VStack, Text, Flex, Spacer, Box, IconButton
} from "@chakra-ui/react"
const s = "15px";

function Header() {
    const [isMinWidth, setIsMinWidth] = useState(false);
    const [mediaQuery] = useMediaQuery("(min-width: 910px)");
    console.log(mediaQuery);

    useEffect(() => {
        setIsMinWidth(mediaQuery);
    }, []);
    return (

        <header>
            <Box h="90px" w="100%" p={2}>

                {isMinWidth ?
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
                                            <Text fontSize={s}>
                                                <Link href="/privatetesting">Rug Monitor </Link>
                                            </Text>
                                        </Box>
                                    </MenuItem>
                                    <MenuItem >
                                        <Box p="1">
                                            <Text fontSize={s}>
                                                <Link href="/walletscanner">Wallet Scanner </Link>
                                            </Text>
                                        </Box>
                                    </MenuItem>
                                    <MenuItem >
                                        <Box p="1">
                                            <Text fontSize={s}>
                                                <Link href="/sniper">Sniper</Link>
                                            </Text>
                                        </Box>
                                    </MenuItem>
                                    <MenuItem >
                                        <Box p="1">
                                            <Text fontSize={s}>
                                                <Link href="/privatetesting">List of Known Scammers</Link>
                                            </Text>
                                        </Box>
                                    </MenuItem>
                                    <MenuItem >
                                        <Box p="1">
                                            <Text fontSize={s}>
                                                <Link href="/privatetesting">Tornado Cash Tracer</Link>
                                            </Text>
                                        </Box>
                                    </MenuItem>
                                    <MenuItem >
                                        <Box p="1">
                                            <Text fontSize={s}>
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
