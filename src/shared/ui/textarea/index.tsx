import { Textarea as ChakraTextarea, TextareaProps } from '@chakra-ui/react'

export const Textarea = ({
  color='black',
  bg='gray.100',
  borderRadius='20px',
  border='none',
  fontWeight=600,
  resize='none',
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
}: TextareaProps) => (
  <ChakraTextarea
    color={color}
    bg={bg}
    border={border}
    borderRadius={borderRadius}
    fontWeight={fontWeight}
    resize={resize}
    _placeholder={_placeholder}
    _hover={_hover}
    _focus={_focus}
    {...props}
  />
)