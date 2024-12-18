import { Grid, GoodCard, Flex, Text, Button } from "shared/ui"

const UserGoods = ({role}: {role: string}) => {
    const salesmanBtns = [
        {name: 'Любимое', active: false, onClick: () => console.log('Любимое')},
        {name: 'Корзина', active: false, onClick: () => console.log('Корзина')},
        {name: 'История', active: true, onClick: () => console.log('История')},
    ]

    const buyerBtns = [
        {name: 'Любимое', active: false, onClick: () => console.log('Любимое')},
        {name: 'Корзина', active: false, onClick: () => console.log('Корзина')},
        {name: 'Конкуренты', active: true, onClick: () => console.log('Конкуренты')},
    ]

    const btns = role === 'salesman' ? salesmanBtns : buyerBtns

    return (
        <Flex
            p='25px 35px'
            bg='gray.300'
            borderRadius='30px'
            flexDir='column'
            textAlign='center'
            gap='20px'
        >
            <Text
                color='white'
                fontSize='28px'
                fontWeight={600}
            >
                Выберите категорию
            </Text>
            <Flex gap='15px'>
                {btns.map((btn, i) => (
                    <Button
                        key={i}
                        maxW='230px'
                        h='50px'
                        color={btn.active ? 'gray.200' : 'white'}
                        fontSize='24px'
                        fontWeight={600}
                        bg={btn.active ? 'white' : 'gray.200'}
                        _hover={{
                            bg: btn.active ? 'gray.200' : 'white',
                            color: btn.active ? 'white' : 'gray.200'
                        }}
                        onClick={btn.onClick}
                    >
                        {btn.name}
                    </Button>
                ))}
            </Flex>
            <Grid
                gridTemplateColumns={'repeat(auto-fit, minmax(120px, 120px))'}
                justifyContent='space-between'
                // columnGap={btns.length >= 3 ? '' : '25px'}
                // justifyContent={btns.length >= 3 ? 'space-between' : ''}
                rowGap='20px'   
            >

                <GoodCard small />
                <GoodCard small />
                <GoodCard small />
                <GoodCard small />
                <GoodCard small />
                <GoodCard small />
                <GoodCard small />
                <GoodCard small />
                <GoodCard small />
                <GoodCard small />
                <GoodCard small />
            </Grid>
        </Flex>
    )
}

export { UserGoods }