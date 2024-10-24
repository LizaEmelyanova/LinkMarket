import { Bag } from "shared/iconpack"
import { Box, Flex, Text } from ".."

export const GoodCard = () => {
    return (
        <Flex
            p='15px'
            bg='gray.200'
            flexDir='column'
            alignItems='center'
            borderRadius='15px'
            gap='10px'
        >
            <Box h='250px' w='200px' bg='gray.100' borderRadius='5px' />
            <Flex alignItems='center' gap='20px'>
                <Text
                    color='white'
                    fontSize='24px'
                    fontWeight='600'
                >
                    795 ₽
                </Text>
                <Bag color="white" />
            </Flex>
        </Flex>
    )
}