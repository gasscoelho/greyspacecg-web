import { Box } from '@chakra-ui/react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export default function MenuToggleButton({ toggle, isOpen }) {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
    </Box>
  )
}
