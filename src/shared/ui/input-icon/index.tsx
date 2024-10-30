import { Search } from 'shared/iconpack'
import { Input, InputGroup, InputRightElement  } from '..'

interface PasswordInputProps {
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  // onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
  // value: string
  placeholder?: string
  // id?: string
  // name?: string
}

export const IconInput = ({
  placeholder,
}: PasswordInputProps) => {
  return (
    <InputGroup minW='320px'>
      <Input
        w={'100%'}
        placeholder={placeholder}
      />
      <InputRightElement cursor={'pointer'} width="3rem">
        <Search
          color='black'
          width='20px'
          height='20px'
        />
      </InputRightElement>
    </InputGroup>
  )
}
