import { Filter } from "shared/iconpack"
import { Flex, Button, GoodCard, Grid } from "shared/ui"


const GoodsList = () => {
    return (
        <Flex w='100%' gap='10px' flexDir='column'>
            <Flex>
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
            </Flex>
            <Grid
                w='100%'
                gridTemplateColumns={'repeat(auto-fit, minmax(230px, 230px))'}
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
            </Grid>
        </Flex>
    )
}

export { GoodsList }