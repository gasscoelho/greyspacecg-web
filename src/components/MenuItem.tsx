import Link from 'next/link'
import { Text } from '@chakra-ui/react'

export default function MenuItem({
  children,
  isLast = false,
  to = '/',
  active = false,
  ...rest
}) {
  return (
    <Link href={to}>
      <Text
        // mb={{ base: isLast ? 0 : 8, sm: 0 }}
        // mr={{ base: 0, sm: isLast ? 0 : 8 }}
        display="block"
        cursor="pointer"
        borderBottom={active ? '2px' : 'none'}
        fontWeight={active ? 'medium' : 'normal'}
        pb="1"
        borderColor="gray.900"
        {...rest}
      >
        {children}
      </Text>
    </Link>
  )
}
