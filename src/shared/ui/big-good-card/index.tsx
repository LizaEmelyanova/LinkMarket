import { Paperclip } from "shared/iconpack"
import { Box, Flex, Text, Textarea } from ".."

export const BigGoodCard = ({
    isEdit = false
}: {
    isEdit?: boolean
}) => {
    return (
        <Flex
            p='20px'
            bg='gray.200'
            flexDir='column'
            alignItems='center'
            borderRadius='15px'
            gap='25px'
        >
            {!isEdit ? (
                <>
                    <Box h='400px' w='450px' bg='gray.100' borderRadius='5px' />
                    <Text
                        textAlign='center'
                        color='white'
                        fontSize='24px'
                        fontWeight='600'
                    >
                        Плюшевая игрушка - волчонок, автор/магазин "Название" 
                    </Text>
                </>
            ) : (
                <>
                    <Box
                        h='400px'
                        w='450px'
                        bg='gray.100'
                        borderRadius='5px'
                    >
                        <Flex
                            w='100%'
                            h='100%'
                            justifyContent='center'
                            alignItems='center'
                            gap='15px'
                        >
                            <Text fontSize='32px' fontWeight={600}>Фото</Text>
                            <Paperclip color="black" width='30px' height='30px' />
                        </Flex>
                    </Box>
                    <Textarea placeholder="Введите название товара"/>
                </>
            )}
        </Flex>
    )
}