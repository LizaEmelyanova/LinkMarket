import { Button, Flex, Text } from ".."


export const PriceCard = () => {
    
    return (
        <Flex
            bgColor='gray.300'
            p='20px 50px'
            justifyContent='space-between'
            borderRadius='30px'
            alignItems='center'
        >
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
        </Flex>
    )
}