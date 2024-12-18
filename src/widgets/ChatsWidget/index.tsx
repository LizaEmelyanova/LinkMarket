import { useNavigate } from "react-router-dom"
import { PageRoutes } from "shared/config/pages"
import { Flex, ChatCard, } from "shared/ui"


const ChatsWidget = () => {
    const navigate = useNavigate()

    const users = [
        {name: 'Васильев Михаил', favourite: true, messages: 1, onClick: () => navigate(PageRoutes.MainPage)},
        {name: 'Владимирова Дарья', favourite: true, messages: 5, onClick: () => navigate(PageRoutes.MainPage)},
        {name: 'Филимонова София', favourite: false, messages: 0, onClick: () => navigate(PageRoutes.MainPage)},
        {name: 'Лукьянов Иван', favourite: false, messages: 0, onClick: () => navigate(PageRoutes.MainPage)},
        {name: 'Сидорова Марьям', favourite: false, messages: 0, onClick: () => navigate(PageRoutes.MainPage)},
        {name: 'Орлов Михаил', favourite: false, messages: 0, onClick: () => navigate(PageRoutes.MainPage)},
    ]
    
    return (
        <Flex
            h='100%'
            p='40px 30px'
            bg='gray.100'
            borderRadius='30px'
            flexDir='column'
            gap='30px'
            overflow={'scroll'}
        >
            {users.map((user) => (
                <ChatCard
                    name={user.name}
                    favourite={user.favourite}
                    messages={user.messages}
                    // onClick={user.onClick}
                />
            ))}
        </Flex>
    )
}

export { ChatsWidget }