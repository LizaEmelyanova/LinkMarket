import { Button, Flex, Heading, ListItem, OrderedList, Text } from ".."


export const RegistrationCard = ({
    role,
    setOption,
    setRole,
}: {
    role: string
    setOption: ( option: string ) => void
    setRole: ( role: string ) => void
}) => {
    return (
        <Flex
            w='500px'
            h='95%'
            bgColor='gray.200'
            borderRadius='15px'
            alignItems='center'
            justifyContent='center'
            p='25px'
        >
            <Flex
                flexDir='column'
                alignItems='center'
                justifyContent='space-between'
                p='30px 50px'
                w='100%'
                h='100%'
                bgColor='gray.100'
                borderRadius='10px'
            >
                <Flex alignItems='center' flexDir='column' gap='30px'>
                    <Heading>
                        {role === 'buyer' && 'Покупатель'}
                        {role === 'salesman' && 'Предприниматель'}
                    </Heading>
                    <Flex flexDir='column'>
                        <Text fontSize='24px'>
                            Возможности:
                        </Text>
                        {role === 'buyer' && (
                            <OrderedList fontSize='18px'>
                                <ListItem>Добавлять товары в корзину и оформлять заказы</ListItem>
                                <ListItem>Добавлять товары в избранное</ListItem>
                                <ListItem>Активировать запланированное оформление доставки</ListItem>
                            </OrderedList>
                        )}
                        {role === 'salesman' && (
                            <OrderedList fontSize='18px'>
                                <ListItem>Все возможности покупателя</ListItem>
                                <ListItem>Выкладывать на свою страницу товары с описанием</ListItem>
                                <ListItem>Публиковать новости про свою продукцию</ListItem>
                                <ListItem>Просматривать своих конкурентов с помощью специальной кнопки</ListItem>
                                <ListItem>Собирать статистику продаж и планировать производство</ListItem>
                            </OrderedList>
                        )}
                    </Flex>
                </Flex>
                <Button
                    fontSize='30px'
                    fontWeight={400}
                    w='100%'
                    h='60px'
                    color='white'
                    bgColor='gray.300'
                    _hover={{
                        color: 'gray.300',
                        fontWeight: 600,
                        bgColor: 'white'
                    }}
                    onClick={() => {
                        setOption('registration')
                        setRole(role)
                    }}
                >
                    Выбрать
                </Button>
            </Flex>
        </Flex>
    )
}