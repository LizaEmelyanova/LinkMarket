import { useNavigate } from "react-router-dom"
import { PageRoutes } from "shared/config/pages"
import { Flex, Text, Button, } from "shared/ui"


const Actions = () => {
    const navigate = useNavigate()

    const btns = [
        {name: 'Все товары', onClick: () => navigate(PageRoutes.MainPage)},
        {name: 'Планирование', onClick: () => console.log('Планирование')},
        {name: 'Доставка', onClick: () => console.log('Доставка')},
    ]
    
    return (
        <Flex
            p='15px 40px'
            bg='gray.100'
            borderRadius='30px'
            flexDir='column'
            gap='10px'
        >
            <Text fontSize='24px'>Выберите действие</Text>
            <Flex justifyContent='space-between'>
                {btns.map((btn) => (
                    <Button
                        w='230px'
                        h='50px'
                        color='white'
                        fontSize='24px'
                        fontWeight={600}
                        bg='gray.200'
                        _hover={{
                            bg: 'gray.300'
                        }}
                        onClick={btn.onClick}
                    >
                        {btn.name}
                    </Button>
                ))}
            </Flex>
        </Flex>
    )
}

export { Actions }