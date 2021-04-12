import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  MenuItem as MenuItemChakra
} from '@chakra-ui/react'
import Link from 'next/link'
import { FiChevronDown } from 'react-icons/fi'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Logo from './Logo'
import MenuItem from './MenuItem'
import MenuToggleButton from './MenuToggleButton'
import NavBarContainer from './NavbarContainer'

export default function Header({ invertColors = false }, props) {
  const [show, setShow] = useState(false)
  const router = useRouter()

  return (
    <NavBarContainer {...props} color={invertColors ? 'black' : 'white'}>
      <Link href="/">
        <Flex align="center" cursor="pointer" mb="4">
          <Logo dark={!invertColors} />
        </Flex>
      </Link>

      <MenuToggleButton
        isOpen={show}
        toggle={() => {
          setShow(state => !state)
        }}
      />
      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Stack
          spacing={8}
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
          fontSize={{ base: 'sm', md: 'md' }}
        >
          <MenuItem to="/" invertColor active={router.pathname === '/'}>
            INÍCIO
          </MenuItem>
          <MenuItem to="/about" active={router.pathname === '/about'}>
            SOBRE
          </MenuItem>
          <MenuItem to="/services-and-products" active={router.pathname === '/services-and-products'}>
            SERVIÇOS E PRODUTOS
          </MenuItem>
          <MenuItem to="/" active={router.pathname === '/cases'}>
            CASES
          </MenuItem>
          <MenuItem to="/team" active={router.pathname === '/team'}>
            NOSSA EQUIPE
          </MenuItem>
          <MenuItem to="/clients" active={router.pathname === '/clients'}>
            NOSSOS CLIENTES
          </MenuItem>
          <MenuItem to="/contact" active={router.pathname === '/contact'}>
            CONTATO
          </MenuItem>
          <Box>
            <Menu>
              <MenuButton
                // border="1px solid red"
                // px={4}
                py={2}
                marginTop="-4px !important"
                transition="all 0.2s"
                // _hover={{ bg: 'gray.400' }}
                // _expanded={{ bg: 'blue.400' }}
                _focus={{ boxShadow: 'none' }}
                // borderRadius="md"
                // borderWidth="1px"
              >
                <Flex align="center">
                  PT - BR{' '}
                  <Box ml="1">
                    <FiChevronDown size={18} />
                  </Box>
                </Flex>
              </MenuButton>
              <MenuList color="black">
                <MenuItemChakra>EN - US</MenuItemChakra>
                <MenuItemChakra>日本語</MenuItemChakra>
                <MenuItemChakra>درباره ما</MenuItemChakra>
              </MenuList>
            </Menu>
          </Box>
        </Stack>
      </Box>
    </NavBarContainer>
  )
}
