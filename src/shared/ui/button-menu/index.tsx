import { Flex } from ".."
import { Menu } from "shared/iconpack"

export const MenuButton = ({onClick}: {onClick: () => void}) => (
    <Flex
        bg='transparent'
        borderRadius='100%'
        w='40px'
        h='40px'
        _hover={{
            bg: 'gray.300'
        }}
        justifyContent='center'
        alignItems='center'
        cursor='pointer'
        onClick={onClick}
    >
        <Menu width='20px' height='20px' color="white" />
    </Flex>
)