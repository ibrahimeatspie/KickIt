
import { Inter } from '@next/font/google'
import Navbar from '../src/sections/navbar'
import Prompt from '../src/sections/prompt'
const inter = Inter({ subsets: ['latin'] })
import { VStack, Heading} from '@chakra-ui/react'
import Event from '../src/sections/event'

export default function Home() {
  return (
    <>
    
    <VStack w="full" h="100vh">

     <Navbar />
     <Prompt />
     <VStack w="full" h="auto" overflowY="scroll">
      <Event />
      <Event />
      <Event />
     </VStack>


    </VStack>
    
    </>
    
  )
}