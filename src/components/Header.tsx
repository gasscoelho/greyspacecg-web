import { Box, Flex, Stack } from '@chakra-ui/react'
import Link from 'next/link'
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
        <Flex align="center" cursor="pointer">
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
          <MenuItem to="/about" active={router.pathname === '/about'}>
            SOBRE
          </MenuItem>
          <MenuItem to="/" active={router.pathname === '/services'}>SERVIÇOS E PRODUTOS</MenuItem>
          <MenuItem to="/" active={router.pathname === '/cases'}>CASES</MenuItem>
          <MenuItem to="/team" active={router.pathname === '/team'}>NOSSA EQUIPE</MenuItem>
          <MenuItem to="/clients" active={router.pathname === '/clients'}>NOSSOS CLIENTES</MenuItem>
          <MenuItem to="/contact" active={router.pathname === '/contact'}>CONTATO</MenuItem>
        </Stack>
      </Box>
    </NavBarContainer>
  )
}
