// import { Bag } from "shared/iconpack"
import { Box, Button, Flex, Text } from ".."
import { useNavigate } from "react-router-dom"
import { PageRoutes } from "shared/config/pages"

export const GoodCardEdit = () => {
    const navigate = useNavigate()

    return (
        <Flex
            p={'5px'}
            bg='gray.300'
            flexDir='column'
            alignItems='center'
            borderRadius='10px'
            gap='7px'
            onClick={() => navigate(PageRoutes.GoodPage)}
        >
            <Box
                h='180px'
                w='160px'
                bg='gray.100'
                borderRadius='5px'
            />
            <Flex alignItems='center' gap='20px'>
                <Text
                    color='white'
                    fontSize='16px'
                    fontWeight='600'
                >
                    795 ₽
                </Text>
                {/* <Bag color="white" /> */}
            </Flex>
            <Button>
                Редактировать
            </Button>
        </Flex>
    )
}