'use client'
import {
    Box,
    useColorModeValue,
    Drawer,
    DrawerContent,
    useDisclosure,

} from '@chakra-ui/react'
import MobileNav from './ui/MobileNav'
import Sidebar from './ui/Sidebar'
interface DashboardProps {
    children: React.ReactNode;
}
const Dashboard: React.FC<DashboardProps> = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <Sidebar onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <Sidebar onClose={onClose} />
                </DrawerContent>
            </Drawer>

            <MobileNav onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} p="4">
                {children}
            </Box>
        </Box>
    )
}

export default Dashboard