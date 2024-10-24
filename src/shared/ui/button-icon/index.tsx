import { Flex } from ".."
import { ReactElement } from 'react'

export const ButtonIcon = ({
    icon,
    onClick,
}: {
    icon: ReactElement,
    onClick: () => void
}) => (
    <Flex
        bg='gray.100'
        borderRadius='100%'
        w='40px'
        h='40px'
        _hover={{
            bg: 'white'
        }}
        justifyContent='center'
        alignItems='center'
        cursor='pointer'
        onClick={onClick}
    >
        {icon}
    </Flex>
)