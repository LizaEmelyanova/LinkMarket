import { Input as ChakraInput, InputProps } from '@chakra-ui/react'

export const Input = ({
  color='black',
  bg='gray.100',
  borderRadius='100px',
  border='none',
  fontWeight=600,
  _placeholder={ color: 'gray.200' },
  _hover={
    border: 'none',
    boxShadow: 'none',
  },
  _focus={
    border: 'none',
    boxShadow: 'none',
  },
  ...props
}: InputProps) => (
  <ChakraInput
    color={color}
    bg={bg}
    border={border}
    borderRadius={borderRadius}
    fontWeight={fontWeight}
    _placeholder={_placeholder}
    _hover={_hover}
    _focus={_focus}
    {...props}
  />
)
