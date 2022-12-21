import React from 'react'
import { Container, Flex, VStack } from '@chakra-ui/react'
import { Heading, Text, Button, useDisclosure, Slide, Box, Lorem, Input} from '@chakra-ui/react'

export default function Navbar() {

  const { isOpen, onToggle } = useDisclosure()


  return (
    <Flex p={6} w="full" justifyContent="space-between">
        <Button fontSize='xl' onClick={onToggle}>Following</Button>
        <Slide direction='top' in={isOpen} style={{ zIndex: 10 }}>
          <Box onClick={onToggle}
            py='10px'
            color='white'
            
            rounded='md'
            shadow='md'
          >
            <Input placeholder='Basic usage' />
            </Box>
        </Slide>
        <Button fontSize='xl'>Search</Button>
        
    </Flex>
  )
}
