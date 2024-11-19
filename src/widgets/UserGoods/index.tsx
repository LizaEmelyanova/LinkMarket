import { Grid, GoodCard, Flex, Text, Button } from "shared/ui"

const UserGoods = () => {
    const btns = [
        {name: 'Любимое', active: false, onClick: () => console.log('Любимое')},
        {name: 'Корзина', active: false, onClick: () => console.log('Корзина')},
        {name: 'История', active: true, onClick: () => console.log('История')},
    ]

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
                {btns.map((btn) => (
                    <Button
                        w='230px'
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
                gridTemplateColumns={'repeat(auto-fit, minmax(130px, 130px))'}
                justifyContent='space-between'
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