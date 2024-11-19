import { ContainerPage, Box, Flex, Text } from "shared/ui"
import { GoodsList } from "widgets/GoodsList"

const Basket = () => {
    return (
        <ContainerPage>
            <Flex
                w='100%'
                py='15px'
                justifyContent='center'
                bg='gray.100'
                borderRadius='30px'
                mb='20px'
            >
                <Text
                    fontSize='32px'
                    fontWeight={600}
                    textAlign='center'
                >
                    Корзина
                </Text>
            </Flex>
            <Box>
                <GoodsList />
            </Box>
        </ContainerPage>
    )
}

export default Basket