import { Favourite } from "shared/iconpack"
import { Box, Flex, Grid, Input, Text } from ".."

export const ChatCard = ({
    name,
    favourite,
    messages,
    // onClick,
}: {
    name: string
    favourite: boolean
    messages: number
    // onClick: () => void
}) => {
    return (
        <Flex
            p='10px 30px'
            bg='white'
            borderRadius='20px'
            w='100%'
            cursor='pointer'
            // onClick={onClick}
        >
            <Grid
                w='100%'
                gridTemplateColumns={'1fr 7fr 10fr'}
                alignItems='center'
            >
                <Flex>
                    <Box
                        h='60px'
                        w='60px'
                        bg='gray.200'
                        borderRadius='100%'
                    />
                </Flex>
                <Flex
                    alignItems='center'
                    gap='10px'
                >
                    <Text
                        color='black'
                        fontSize='24px'
                        fontWeight='600'
                    >
                        {name}
                    </Text>
                    {favourite && <Favourite width='35px' height='35px' color="black"/>}
                </Flex>
                <Flex
                    alignItems='center'
                    justifyContent='space-between'
                >
                    <Input
                        zIndex={10}
                        placeholder="Поиск"
                        bg='transparent'
                        borderRadius='0'
                        borderLeft='1px solid black'
                        _hover={{
                            borderLeft: '1px solid black'
                        }}
                        _focus={{
                            borderLeft: '1px solid black',
                            boxShadow: 'none'
                        }}
                    />
                    {messages !== 0 && (
                        <Flex>
                            <Flex
                                h='40px'
                                w='40px'
                                bg='blue.100'
                                borderRadius='100%'
                                justifyContent='center'
                                alignItems='center'
                                color='black'
                            >
                                {messages}
                            </Flex>
                        </Flex>
                    )}
                </Flex>
            </Grid>
        </Flex>
    )
}