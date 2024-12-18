import { ButtonProps, Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, ...props }: ButtonProps) => (
  <ChakraButton
    borderRadius='30px'
    border='none'
    boxShadow='none'
    _hover={{
      border: 'none',
      boxShadow: 'none',
      bg: 'white'
    }}
    _focus={{
      border: 'none',
      boxShadow: 'none',
    }}
    {...props}
  >
    {children}
  </ChakraButton>
)
