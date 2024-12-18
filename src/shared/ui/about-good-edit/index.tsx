import { useState } from "react"
import { Button, Flex, Switch, Text, Textarea } from ".."

export const AboutGoodEdit = () => {
    const [isCustom, setIsCustom] = useState(false)

    return (
        <>
            {!isCustom ? (
                <Flex
                    w='100%'
                    flexDir='column'
                    gap='50px'
                >
                    <Flex
                        minH='500px'
                        flexDir='column'
                        bg={'gray.200'}
                        p='50px 60px'
                        borderRadius='30px'
                        justifyContent='space-between'
                        gap='20px'
                    >
                        <Text
                            fontSize='24px'
                            fontWeight={600}
                            color={'white'}
                        >
                            Описание товара:
                        </Text>
                        <Textarea
                            placeholder="Опишите подробно ваш товар"
                            minH='200px'
                        />
                        <Button
                            color='white'
                            bg={'gray.300'}
                            fontSize='24px'
                            px='60px'
                            py='25px'
                            _hover={{
                                bg: 'gray.200'
                            }}
                        >
                            Настроить доставку для клиента
                        </Button>
                        <Flex
                            justifyContent='space-between'
                            m='0 50px'
                        >
                            <Button
                                color='white'
                                bg='gray.100'
                                fontSize='24px'
                                px='60px'
                                py='25px'
                                _hover={{
                                    bg: 'gray.300'
                                }}
                            >
                                Настройки скидок
                            </Button>
                            <Button
                                color='white'
                                bg='gray.100'
                                fontSize='24px'
                                px='60px'
                                py='25px'
                                _hover={{
                                    bg: 'gray.300'
                                }}
                            >
                                Ограничения
                            </Button>
                        </Flex>
                    </Flex>
                    <Button
                        p='40px'
                        fontSize='32px'
                        fontWeight={600}
                        bg='gray.300'
                        color='white'
                        _hover={{
                            bg: 'gray.200'
                        }}
                        onClick={() => setIsCustom(true)}
                    >
                        Раздел кастомизации
                    </Button>
                </Flex>
            ) : (
                <Flex
                    p='65px'
                    bg='gray.200'
                    borderRadius='30px'
                    flexDir='column'
                    gap='30px'
                >
                    <Text color='white' fontSize='32px' fontWeight={600}>
                        Подходы кастомизации:
                    </Text>
                    <Flex
                        flexDir='column'
                        gap='20px'
                    >
                        <Flex
                            bg='gray.100'
                            p='25px 15px'
                            borderRadius='20px'
                            justifyContent='space-between'
                        >
                            <Text fontWeight={600}>
                                Дайте клиенту самому описать то, чего он хочет
                            </Text>
                            <Switch size='lg' />
                        </Flex>
                        <Text
                            color='white'
                            fontWeight={600}
                        >
                            У товара появится отдельное окошко,
                            где потенциальный покупатель сможет задать
                            словесное описание товара. Вам придёт заявка,
                            когда форма описания будет заполнена и отправлена.
                            Далее уже вы примете решение, браться ли за данную
                            работу и сможете написать в чат заказчику
                            для уточнения деталей и итоговой цены.
                        </Text>
                    </Flex>
                    <Flex
                        flexDir='column'
                        gap='20px'
                    >
                        <Flex
                            bg='gray.100'
                            p='25px 15px'
                            borderRadius='20px'
                            justifyContent='space-between'
                        >
                            <Text fontWeight={600}>
                                Задайте свои границы
                            </Text>
                            <Switch size='lg' />
                        </Flex>
                        <Text
                            color='white'
                            fontWeight={600}
                        >
                            Нажав на эту кнопку, вы откроете меню
                            с параметрами, которые сможете настроить
                            самостоятельно, например: цвет товара,
                            размеры товара, материал, свои дизайнерские
                            решения.
                        </Text>
                    </Flex>
                </Flex>
            )}
        </>
    )
}