import { Button, Flex, Text, Box } from ".."


export const AboutCard = () => {

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
                            Статус: Покупатель <br />
                            Рейтинг покупателя: 5.0
                        </Text>
                        <Text color='white' fontSize='16px' fontWeight={600}>
                            Число покупок за месяц: 20
                        </Text>
                        <Text color='white' fontSize='16px' fontWeight={600}>
                            Связь: <br />
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
                        Сообщение
                    </Button>
                </Flex>
            </Flex>
        </Box>
    )
}