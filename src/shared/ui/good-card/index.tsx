import { Bag } from "shared/iconpack"
import { Box, Flex, Text } from ".."
import { useNavigate } from "react-router-dom"
import { PageRoutes } from "shared/config/pages"

export const GoodCard = ({
    small = false,
    basket = true,
}: {
    small?: boolean
    basket?: boolean
}) => {
    const navigate = useNavigate()

    return (
        <Flex
            p={small ? '5px' : '15px'}
            bg='gray.200'
            flexDir='column'
            alignItems='center'
            borderRadius={small ? '10px' : '15px'}
            gap='10px'
            onClick={() => navigate(PageRoutes.GoodPage)}
        >
            <Box
                h={small ? '125px' : '250px'}
                w={small ? '100px' : '200px'}
                bg='white'
                borderRadius='5px' />
            <Flex alignItems='center' gap='20px'>
                <Text
                    color='white'
                    fontSize={small ? '16px' : '24px'}
                    fontWeight='600'
                >
                    795 ₽
                </Text>
                {basket && <Bag color="white" />}
            </Flex>
        </Flex>
    )
}