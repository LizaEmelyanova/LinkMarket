import { Button, Flex, Text, Box } from ".."


export const BuyerInfo = () => {

    return (
        <Box
            bg='gray.200'
            p='25px 20px'
            borderRadius='15px'
        >
            <Flex justifyContent='space-between'>
                <Box bg='gray.100' w='270px' h='330px' borderRadius='30px' />
                <Flex flexDir='column' justifyContent='space-between'>
                    <Flex gap='15px' flexDir='column'>
                        <Text color='white' fontSize='16px' fontWeight={600}>
                            ФИО: Зайцева Алёна Семёновна
                        </Text>
                        <Text color='white' fontSize='16px' fontWeight={600}>
                            Статус: Предприниматель <br />
                            Фирма: "Wow-Pets@" <br />
                            Рейтинг продавца: 4.7
                        </Text>
                        <Text color='white' fontSize='16px' fontWeight={600}>
                            Число покупателей: 125
                        </Text>
                        <Text color='white' fontSize='16px' fontWeight={600}>
                            Связь с вами (видят все): <br />
                            тел. +7 (069) 364 23-01 <br />
                            почта: werje@mail.ru
                        </Text>
                    </Flex>
                    <Button
                        fontSize='20px'
                        bg='white'
                        _hover={{
                            bg: 'gray.100'
                        }}
                    >
                        Изменить
                    </Button>
                </Flex>
            </Flex>
            <Flex
                mt='25px'
                bg='white'
                borderRadius='30px'
                h='240px'
                p='20px 25px'
            >
                <Text
                    color='blue.100'
                    fontWeight={600}
                    fontSize='24px'
                >
                    Статистика продаж
                </Text>
            </Flex>
        </Box>
    )
}