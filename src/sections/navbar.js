import React from 'react'
import { Container, Flex, VStack } from '@chakra-ui/react'
import { Heading, Text, Button} from '@chakra-ui/react'

export default function Navbar() {
  return (
    <Flex p={6} w="full" justifyContent="space-between">
        <Button fontSize='xl'>Following</Button>
        <Button fontSize='xl'>Search</Button>
        
    </Flex>
  )
}
