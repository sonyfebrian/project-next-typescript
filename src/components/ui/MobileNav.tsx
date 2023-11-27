'use client'

import { useState, useEffect } from 'react';
import {
    IconButton,
    Flex,
    VStack,
    useColorModeValue,
    Text,
    FlexProps,
} from '@chakra-ui/react'
import {
    FiMenu,
} from 'react-icons/fi'
import { useRouter } from 'next/router';

interface MobileProps extends FlexProps {
    onOpen: () => void
}


const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    const router = useRouter();
    const [pageTitle, setPageTitle] = useState('Sales Dashboard');

    useEffect(() => {
        const handleRouteChange = () => {

            if (router.pathname === '/Users/Users') {
                setPageTitle('Users Dashboard');
            } else {
                setPageTitle('Sales Dashboard');
            }
        };


        router.events.on('routeChangeComplete', handleRouteChange);


        handleRouteChange();


        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.pathname, router.events]);
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}

            {...rest}>
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Text
                display={{ base: 'flex', md: 'none' }}
                fontSize="2xl"
                fontFamily="monospace"
                fontWeight="bold">
                delman.io
            </Text>


            <VStack
                display={{ base: 'none', md: 'flex' }}
                alignItems="flex-start"
                spacing="1px"
                ml="2">
                <Text
                    fontSize="2xl"
                    fontFamily="monospace"
                    fontWeight="bold">
                    {pageTitle}
                </Text>
                <Text fontSize="xs" color="blue.600">
                    {pageTitle === 'Users Dashboard' ? 'List of Users data' : 'List of Sales data'}
                </Text>
            </VStack>

        </Flex>
    )
}

export default MobileNav