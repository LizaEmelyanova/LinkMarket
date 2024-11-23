import { ContainerPage, Flex, Text } from "shared/ui"
import { ChatsWidget } from "widgets"

const Chats = () => {
    return (
        <ContainerPage>
            <Flex
                w='100%'
                py='15px'
                justifyContent='center'
                bg='gray.100'
                borderRadius='30px'
                mb='20px'
            >
                <Text
                    fontSize='32px'
                    fontWeight={600}
                    textAlign='center'
                >
                    Чаты
                </Text>
            </Flex>
            <ChatsWidget />
        </ContainerPage>
    )
}

export default Chats