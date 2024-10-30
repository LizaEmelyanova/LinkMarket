import { Check, Paperclip } from "shared/iconpack"
import {
    Flex,
    Heading,
    Button,
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage
} from "shared/ui"

export const RegistrationForm = ({
    role
}: {
    role?: string
}) => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            console.log(file.name)
        }
    }

    return (
        <Flex
            w='900px'
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
                <Flex
                    w='100%'
                    alignItems='center'
                    flexDir='column'
                    gap='30px'
                >
                    <Heading>
                        {role === 'buyer' && 'Покупатель'}
                        {role === 'salesman' && 'Предприниматель'}
                    </Heading>
                    <Flex w='100%' gap='15px' flexDir='column'>
                        <FormControl
                            w='100%'
                            bg='gray.300'
                            p='15px 20px'
                            borderRadius='30px'
                        >
                            <Flex
                                alignItems='center'
                                justifyContent='space-between'
                            >
                                <FormLabel
                                    h='100%'
                                    color='white'
                                    fontSize='24px'
                                    fontWeight={600}
                                    m={0}
                                >
                                    ФИО
                                </FormLabel>
                                <Input maxW='500px' />
                            </Flex>
                            <FormErrorMessage></FormErrorMessage>
                        </FormControl>
                        <FormControl
                            w='100%'
                            bg='gray.300'
                            p='15px 20px'
                            borderRadius='30px'
                        >
                            <Flex
                                alignItems='center'
                                justifyContent='space-between'
                            >
                                <FormLabel
                                    h='100%'
                                    color='white'
                                    fontSize='24px'
                                    fontWeight={600}
                                    m={0}
                                >
                                    ПОЧТА
                                </FormLabel>
                                <Input maxW='500px' />
                            </Flex>
                            <FormErrorMessage></FormErrorMessage>
                        </FormControl>
                        <FormControl
                            w='100%'
                            bg='gray.300'
                            p='15px 20px'
                            borderRadius='30px'
                        >
                            <Flex
                                alignItems='center'
                                justifyContent='space-between'
                            >
                                <FormLabel
                                    h='100%'
                                    color='white'
                                    fontSize='24px'
                                    fontWeight={600}
                                    m={0}
                                >
                                    ТЕЛЕФОН
                                </FormLabel>
                                <Input maxW='500px' />
                            </Flex>
                            <FormErrorMessage></FormErrorMessage>
                        </FormControl>
                        {role === 'salesman' && (
                            <FormControl
                                w='100%'
                                bg='gray.300'
                                p='15px 20px'
                                borderRadius='30px'
                            >
                                <Flex
                                    alignItems='center'
                                    justifyContent='space-between'
                                >
                                    <FormLabel
                                        h='100%'
                                        color='white'
                                        fontSize='24px'
                                        fontWeight={600}
                                        m={0}
                                    >
                                        ДОКУМЕНТЫ
                                    </FormLabel>
                                    <Input
                                        maxW='500px'
                                        type="file"
                                        bgColor='rgba(201, 214, 223, .4)'
                                        cursor='pointer'
                                        title="Выберите файл"
                                        display='none'
                                        onChange={handleFileChange}
                                    />
                                    <label>
                                        <Button
                                            w='500px'
                                            as='span'
                                            color='white'
                                            bgColor='rgba(201, 214, 223, .4)'
                                            cursor='pointer'
                                            rightIcon={<Paperclip width='20px' height='20px' />}
                                            _hover={{
                                                bgColor: 'gray.100',
                                                color: 'gray.300'
                                            }}
                                        >
                                            Прикрепить документы
                                        </Button>
                                    </label>
                                </Flex>
                                <FormErrorMessage></FormErrorMessage>
                            </FormControl>
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
                    rightIcon={role === 'salesman' ? <Check /> : undefined}
                    _hover={{
                        color: 'gray.300',
                        fontWeight: 600,
                        bgColor: 'white'
                    }}
                    onClick={() => {

                    }}
                >
                    {role === 'buyer' && 'Зарегистрироваться'}
                    {role === 'salesman' && 'Получить подтверждение'}
                </Button>
            </Flex>
        </Flex>
    )
}