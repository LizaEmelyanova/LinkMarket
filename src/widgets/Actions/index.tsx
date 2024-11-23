import { useNavigate } from "react-router-dom"
import { PageRoutes } from "shared/config/pages"
import { Flex, Text, Button, Grid, } from "shared/ui"


const Actions = ({role}: {role: string}) => {
    const navigate = useNavigate()

    const salesmanBtns = [
        {name: 'Все товары', onClick: () => navigate(PageRoutes.MainPage)},
        {name: 'Планирование', onClick: () => console.log('Планирование')},
        {name: 'Доставка', onClick: () => console.log('Доставка')},
    ]

    const buyerBtns = [
        {name: 'Добавить товар', onClick: () => console.log('Добавить товар')},
        {name: 'Все клиенты', onClick: () => console.log('Все клиенты')},
        {name: 'Планирование', onClick: () => console.log('Планирование')},
        {name: 'Заказы', onClick: () => console.log('Заказы')},
        {name: 'VIP-клиенты', onClick: () => console.log('VIP-клиенты')},
        {name: 'Доставка', onClick: () => console.log('Доставка')},
        {name: 'Заказы-К*', onClick: () => console.log('Заказы-К*')},
        {name: 'Объявления', onClick: () => console.log('Объявления')},
        {name: 'Отзывы', onClick: () => console.log('Отзывы')},
    ]

    const btns = role === 'salesman' ? salesmanBtns : buyerBtns
    
    return (
        <Flex
            p='15px 40px'
            bg='gray.100'
            borderRadius='30px'
            flexDir='column'
            gap='10px'
        >
            <Text fontSize='24px'>Выберите действие</Text>
            <Grid
                templateColumns='repeat(auto-fit, minmax(230px, 230px))'
                columnGap={btns.length >= 3 ? '' : '25px'}
                justifyContent={btns.length >= 3 ? 'space-between' : ''}
                rowGap='15px'
            >
                {btns.map((btn, i) => (
                    <Button
                        key={i}
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
            </Grid>
        </Flex>
    )
}

export { Actions }