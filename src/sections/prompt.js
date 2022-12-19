import { Heading, VStack } from '@chakra-ui/react'
import React from 'react'

export default function Prompt() {
  return (
    <VStack shouldWrapChildren w='full' align='flex-start' spacing={2}>
        <Heading size='md' ml={6} color='gray.400'>Good afternoon</Heading>
        <Heading size='xl' ml={6} >Upcoming Events</Heading>

    </VStack>
  )
}
