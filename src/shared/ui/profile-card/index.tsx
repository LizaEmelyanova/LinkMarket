import { Button, Flex, Text } from ".."


export const ProfileCard = () => {
    return (
        <Flex
            w='100%'
            flexDir='column'
            alignItems={'center'}
            p='20px'
            gap='20px'
            textAlign='center'
            bg='gray.300'
            borderRadius='30px'
        >
            <Text color='white' fontSize='14px'>
                Сейчас вы можете только просматривать товар
            </Text>
            <Text color='white' fontSize='14px'>Полный спектр возможностей открывается после регистрации.</Text>
            <Button>Зарегистрироваться</Button>
        </Flex>
    )
}