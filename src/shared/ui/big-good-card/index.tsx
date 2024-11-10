import { Box, Flex, Text } from ".."
import { useNavigate } from "react-router-dom"
import { PageRoutes } from "shared/config/pages"

export const BigGoodCard = () => {
    const navigate = useNavigate()

    return (
        <Flex
            p='20px'
            bg='gray.200'
            flexDir='column'
            alignItems='center'
            borderRadius='15px'
            gap='25px'
            onClick={() => navigate(PageRoutes.GoodPage)}
        >
            <Box h='400px' w='450px' bg='gray.100' borderRadius='5px' />
            <Text
                textAlign='center'
                color='white'
                fontSize='24px'
                fontWeight='600'
            >
                Плюшевая игрушка - волчонок, автор/магазин "Название" 
            </Text>
        </Flex>
    )
}