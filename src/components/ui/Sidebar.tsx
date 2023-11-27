'use client'

import {
    Box,
    CloseButton,
    Flex,
    Text,
    useColorModeValue,
    BoxProps,

} from '@chakra-ui/react'

import { MdDashboard } from "react-icons/md";
import { HiMiniUsers, HiMiniUserPlus } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";
import NavItem from './NavItem'
import Link from 'next/link';





interface SidebarProps extends BoxProps {
    onClose: () => void
}



const Sidebar = ({ onClose, ...rest }: SidebarProps) => {

    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    delman.io
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>

            <NavItem icon={MdDashboard}>
                <Link href="/"> Dashboard </Link>
            </NavItem>
            <NavItem icon={HiMiniUsers}>
                <Link href="/Users/Users">  Users</Link>
            </NavItem>
            <NavItem icon={HiMiniUserPlus}>
                <Link href="/">   Registration</Link>
            </NavItem>
            <NavItem icon={HiOutlineSearch}>
                <Link href="/">  Search</Link>
            </NavItem>
        </Box>
    )
}

export default Sidebar