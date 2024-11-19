import { AboutCard, Advertising, Balance, Box, ContainerPage, Grid, GridItem, Heading } from "shared/ui"
import { Actions, UserGoods } from "widgets"


const Profile = () => {
    return (
        <ContainerPage>
            <Box pb='30px' h={'100%'}>
                <Heading mb='20px'>Вы находитесь в личном кабинете</Heading>
                <Grid
                    w='100%'
                    h='100%'
                    gridTemplateColumns={'3fr 4fr'}
                    columnGap='50px'
                    rowGap='10px'
                    templateAreas={`'about balance'
                                    'about actions'
                                    'about advertising'
                                    'goods goods'`}
                >
                    <GridItem area='about'>
                        <AboutCard />
                    </GridItem>
                    <GridItem area='balance'>
                        <Balance />
                    </GridItem>
                    <GridItem area='actions'>
                        <Actions />
                    </GridItem>
                    <GridItem area='advertising'>
                        <Advertising />
                    </GridItem>
                    <GridItem area='goods'>
                        <UserGoods />
                    </GridItem>
                </Grid>
            </Box>
        </ContainerPage>
    )
}

export default Profile