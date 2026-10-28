import React from 'react';
import {
    Box,
    Flex,
    Link,
    useColorMode,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Hide,
    Show,
    Text,
    Button,
    HStack,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import { FaHouse } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

import { GitHubIcon } from '~/components/Icons';

function Header() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box
            as="header"
            w="100%"
            position="fixed"
            top="0"
            zIndex="1000"
            className="backdrop-blur-xl"
            boxShadow="0 6px 8px rgba(0, 0, 0, 0.2)"
        >
            <Flex className="navbar" display="flex" h={14} alignItems="center" justifyContent="space-between" mx={5}>
                {/* Logo */}
                <Box className="nav-item">
                    <Button rounded="50px" colorScheme={colorMode === 'dark' ? 'orange' : 'purple'}>
                        <NavLink to="/">
                            <FaHouse />
                        </NavLink>
                    </Button>
                </Box>
                {/* NavItem */}
                <Hide below="md">
                    <HStack spacing={8} alignItems="center">
                        <NavLink
                            to="/projects"
                            activeclassname="bg-blue-500"
                            className={({ isActive }) => (isActive ? 'underline' : '')}
                        >
                            <Text _hover={{ textDecoration: 'underline' }}>Projects</Text>
                        </NavLink>
                        <Link
                            href="https://github.com/happy-bmo"
                            display="flex"
                            alignItems="center"
                            _hover={{ textDecoration: 'underline' }}
                            isExternal
                        >
                            <GitHubIcon />
                            <Text ml="5px">Sources</Text>
                        </Link>
                    </HStack>
                </Hide>
                <Flex className="nav-item">
                    {/* ChangeTheme */}
                    <IconButton
                        colorScheme={colorMode === 'dark' ? 'orange' : 'purple'}
                        rounded="50px"
                        icon={colorMode === 'light' ? <MoonIcon color="white" /> : <SunIcon color="black" />}
                        aria-label="Toggle Color Mode"
                        onClick={toggleColorMode}
                    />
                    {/* Mobile */}
                    <Show below="sm">
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label="Options"
                                icon={<HamburgerIcon />}
                                variant="outline"
                                ml="10px"
                            />
                            <MenuList>
                                <MenuItem as={NavLink} to="/projects">
                                    <Text>Projects</Text>
                                </MenuItem>
                                <MenuItem>
                                    <Link
                                        href="https://github.com/happy-bmo"
                                        display="flex"
                                        alignItems="center"
                                        _hover={{ textDecoration: 'none' }}
                                        isExternal
                                    >
                                        <Text ml="2px">Source (Github)</Text>
                                    </Link>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Show>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Header;
