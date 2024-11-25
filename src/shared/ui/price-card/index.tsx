import { Wallet } from "shared/iconpack"
import {
    Button,
    ButtonIcon,
    Flex,
    Input,
    Text,
    Box
} from ".."


export const PriceCard = ({
    isEdit = false,
}: {
    isEdit?: boolean
}) => {
    
    return (
        <Flex
            bgColor='gray.300'
            p='20px 50px'
            justifyContent='space-between'
            borderRadius='30px'
            alignItems='center'
        >
            {!isEdit ? (
                <>
                    <Text color='white' fontSize='32px' fontWeight={600}>
                        Цена: 260 руб.
                    </Text>
                    <Button
                        fontSize='30px'
                        fontWeight={600}
                        color='white'
                        py='15px'
                        px='25px'
                        _hover={{
                            bg: 'gray.200'
                        }}
                    >
                        Купить
                    </Button>
                </>
            ) : (
                <>
                    <Flex gap='10px'>
                        <Text color='white' fontSize='32px' fontWeight={600}>
                            Цена:
                        </Text>
                        <Input maxW='200px' />
                        <Box>
                            <ButtonIcon
                                icon={<Wallet color="white" />}
                                hover_bg='gray.200'
                                onClick={() => console.log('Настройка валюты')}
                            />
                        </Box>
                    </Flex>
                    <Button
                        fontSize='30px'
                        fontWeight={600}
                        color='white'
                        py='15px'
                        px='25px'
                        _hover={{
                            bg: 'gray.200'
                        }}
                    >
                        Добавить
                    </Button>
                </>
            )}
        </Flex>
    )
}