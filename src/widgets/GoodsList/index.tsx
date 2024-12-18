import { useMatch, useNavigate } from "react-router-dom"
import { PageRoutes } from "shared/config/pages"
import { BagCheck, Edit, Filter } from "shared/iconpack"
import { Flex, Button, GoodCard, Grid } from "shared/ui"


const GoodsList = () => {
    const navigate = useNavigate()

    const isMain = useMatch(PageRoutes.MainPage)
    const isBasket = useMatch(PageRoutes.Basket)

    return (
        <Flex w='100%' gap='10px' flexDir='column'>
            <Flex
                gap={isMain ? '24px' : ''}
                justifyContent={isBasket ? 'space-between' : ''}
            >
                <Button
                    borderRadius='30px'
                    p='10px 20px'
                    color='white'
                    bg='gray.300'
                    _hover={{
                        bg: 'gray.200'
                    }}
                    rightIcon={<Filter color="white" width='20px' height='20px' />}
                >
                    Фильтр
                </Button>
                {isMain && (
                    <Button
                        borderRadius='30px'
                        p='10px 20px'
                        color='white'
                        bg='gray.300'
                        _hover={{
                            bg: 'gray.200'
                        }}
                        rightIcon={<BagCheck color="white" width='20px' height='20px' />}
                        onClick={() => navigate(PageRoutes.Basket)}
                    >
                        Моя корзина
                    </Button>
                )}
                {isBasket && (
                    <Button
                        borderRadius='30px'
                        p='10px 20px'
                        color='white'
                        bg='gray.300'
                        _hover={{
                            bg: 'gray.200'
                        }}
                        rightIcon={<Edit color="white" width='20px' height='20px' />}
                        onClick={() => navigate(PageRoutes.OrderPage)}
                    >
                        Оформить заказ
                    </Button>
                )}
            </Flex>
            <Grid
                w='100%'
                gridTemplateColumns={'repeat(auto-fit, minmax(230px, 230px))'}
                // columnGap={btns.length >= 3 ? '' : '25px'}
                // justifyContent={btns.length >= 3 ? 'space-between' : ''}
                justifyContent='space-between'
                rowGap='20px'                
            >
                <GoodCard />
                <GoodCard />
                <GoodCard />
                <GoodCard />
                <GoodCard />
                <GoodCard />
                <GoodCard />
                <GoodCard />
                <GoodCard />
            </Grid>
        </Flex>
    )
}

export { GoodsList }