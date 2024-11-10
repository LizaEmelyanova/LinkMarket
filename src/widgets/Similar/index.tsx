import { Grid, GoodCard, Flex, Text, } from "shared/ui"


const Similar = () => {
    return (
        <Flex
            p='20px 30px 60px'
            bg='gray.300'
            borderRadius='30px 30px 0 0'
            flexDir='column'
            gap='10px'
        >
            <Text
                color='white'
                fontSize='24px'
                fontWeight={600}
            >
                Похожие товары
            </Text>
            <Grid
                gridTemplateColumns={'repeat(auto-fit, minmax(130px, 130px))'}
                justifyContent='space-between'
                rowGap='20px'   
            >

                <GoodCard small />
                <GoodCard small />
                <GoodCard small />
            </Grid>
        </Flex>
    )
}

export { Similar }