import { Plus } from "shared/iconpack"
import { ButtonIcon, Flex, Text } from ".."


export const Balance = () => {
    
    return (
        <Flex
            bgColor='gray.300'
            p='20px 50px'
            justifyContent='space-between'
            borderRadius='30px'
            alignItems='center'
        >
            <Text color='white' fontSize='32px' fontWeight={600}>
                Ваш баланс: 2376 руб.
            </Text>
            <ButtonIcon
                bg=""
                hover_bg=""
                icon={<Plus color="white" width='50px' height='50px' />}
                onClick={() => console.log('Пополнить баланс')}
            />
        </Flex>
    )
}