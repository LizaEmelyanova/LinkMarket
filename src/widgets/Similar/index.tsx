import { Grid, GoodCard, Flex, Text, } from "shared/ui"


const Similar = () => {
    return (
        <Flex
            p='20px 30px 30px'
            bg='gray.300'
            borderRadius='30px'
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
                w='100%'
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
            </Grid>
        </Flex>
    )
}

export { Similar }