import { Grid, Flex, Text, GoodCardEdit } from "shared/ui"

const BuyerGoods = () => {
    return (
        <Flex
            p='25px 35px'
            bg='gray.200'
            borderRadius='30px'
            flexDir='column'
            gap='20px'
        >
            <Text
                color='white'
                fontSize='28px'
                fontWeight={600}
            >
                Ваши товары
            </Text>
            <Grid
                gridTemplateColumns={'repeat(auto-fit, minmax(170px, 170px))'}
                justifyContent='space-between'
                // columnGap={btns.length >= 3 ? '' : '25px'}
                // justifyContent={btns.length >= 3 ? 'space-between' : ''}
                rowGap='20px'   
            >
                <GoodCardEdit />
                <GoodCardEdit />
                <GoodCardEdit />
                <GoodCardEdit />
                <GoodCardEdit />
                <GoodCardEdit />
                <GoodCardEdit />
                <GoodCardEdit />
                <GoodCardEdit />
                <GoodCardEdit />
                <GoodCardEdit />
            </Grid>
        </Flex>
    )
}

export { BuyerGoods }