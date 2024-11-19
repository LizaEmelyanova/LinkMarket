import { Button, Flex, Text } from ".."


export const AboutGood = () => {

    return (
        <Flex
            minH='500px'
            flexDir='column'
            bg='gray.100'
            p='50px 60px'
            borderRadius='30px'
            justifyContent='space-between'
        >
            <Flex flexDir='column' gap='20px'>
                <Text fontSize='24px' fontWeight={600}>
                    Описание товара:
                </Text>
                <Text fontSize='24px' fontWeight={600}>
                    Цвета: серый, белый, чёрный, голубой (мало) <br />
                    Материал: плюш, искусственная шерсть <br />
                    Приблизительное время доставки: от 2 дней
                </Text>
            </Flex>
            <Flex
                flexDir='column'
                gap='20px'
            >
                <Button
                    color='white'
                    bg='gray.200'
                    fontSize='24px'
                    px='60px'
                    py='25px'
                    _hover={{
                        bg: 'gray.300'
                    }}
                >
                    Настроить доставку под себя
                </Button>
                <Button
                    color='white'
                    bg='gray.200'
                    fontSize='24px'
                    px='60px'
                    py='25px'
                    m='0 50px'
                    _hover={{
                        bg: 'gray.300'
                    }}
                >
                    Кастомизация *
                </Button>
            </Flex>
        </Flex>
    )
}