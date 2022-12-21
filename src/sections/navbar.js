import React from 'react'
import { Container, Flex, VStack } from '@chakra-ui/react'
import { Heading, Text, Button, useDisclosure, Slide, Box, Lorem, Input} from '@chakra-ui/react'
import { useRef, useEffect } from 'react';

function useOutsideAlerter(ref, isOpen, onToggle) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if ((ref.current && !ref.current.contains(event.target)) && isOpen) {
        onToggle()
        //alert("You clicked outside of me!");
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, isOpen]);
}

export default function Navbar() {

  


  const { isOpen, onToggle } = useDisclosure()

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, isOpen, onToggle);


  return (
    <Flex p={6} w="full" justifyContent="space-between">
        <Button fontSize='xl'>Following</Button>
        
        <Button fontSize='xl' onClick={onToggle}>Search</Button>
        <Slide direction='top' in={isOpen} style={{ zIndex: 10 }}>
          <Box ref={wrapperRef}
            py='10px'
            
            background='white'
            rounded='md'
            shadow='md'
          >
            <Input placeholder='Basic usage' variant='outline' />
            </Box>
        </Slide>
        
    </Flex>
  )
}
