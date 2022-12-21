import React from 'react'
import { Button, Slide, Box, Lorem, useDisclosure} from '@chakra-ui/react'

export default function SearchBar() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <Slide direction='top' in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p='40px'
          color='white'
          mt='0'
          bg='teal.500'
          rounded='md'
          shadow='md'
        >
          <Lorem count={2} />
        </Box>
      </Slide>
    </>
  )
}
