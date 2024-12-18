import { Flex } from ".."
import { ReactElement } from 'react'

export const ButtonIcon = ({
    icon,
    onClick,
    bg = 'gray.100',
    hover_bg = 'white'
}: {
    icon: ReactElement,
    onClick: () => void,
    bg?: string,
    hover_bg?: string
}) => (
    <Flex
        bg={bg}
        borderRadius='100%'
        w='40px'
        h='40px'
        _hover={{
            bg: `${hover_bg}`
        }}
        justifyContent='center'
        alignItems='center'
        cursor='pointer'
        onClick={onClick}
    >
        {icon}
    </Flex>
)