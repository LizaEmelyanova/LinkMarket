import { useState } from "react"
import {
    SalesmanInfo,
    Advertising,
    Balance,
    Box,
    ContainerPage,
    Grid,
    GridItem,
    Heading,
    BuyerInfo
} from "shared/ui"
import { Actions, BuyerGoods, UserGoods } from "widgets"


const Profile = () => {
    const [role] = useState('buyer') // 'salesman'

    return (
        <ContainerPage>
            <Box pb='30px' h={'100%'}>
                <Heading mb='20px'>Вы находитесь в личном кабинете</Heading>
                {role === 'salesman' && (
                    <Grid
                        w='100%'
                        h='100%'
                        gridTemplateColumns={'3fr 4fr'}
                        columnGap='50px'
                        rowGap='20px'
                        templateAreas={`'about balance'
                                        'about actions'
                                        'about advertising'
                                        'goods goods'`}
                    >
                        <GridItem area='about'>
                            <SalesmanInfo />
                        </GridItem>
                        <GridItem area='balance'>
                            <Balance />
                        </GridItem>
                        <GridItem area='actions'>
                            <Actions role={role} />
                        </GridItem>
                        <GridItem area='advertising'>
                            <Advertising />
                        </GridItem>
                        <GridItem area='goods'>
                            <UserGoods role={role} />
                        </GridItem>
                    </Grid>
                )}
                {role === 'buyer' && (
                    <Grid
                        w='100%'
                        h='100%'
                        gridTemplateColumns={'3fr 4fr'}
                        columnGap='50px'
                        rowGap='20px'
                        templateAreas={`'about balance'
                                        'about actions'
                                        'about my-goods'
                                        'goods my-goods'`}
                    >
                        <GridItem area='about'>
                            <BuyerInfo />
                        </GridItem>
                        <GridItem area='balance'>
                            <Balance />
                        </GridItem>
                        <GridItem area='actions'>
                            <Actions role={role} />
                        </GridItem>
                        <GridItem area='my-goods'>
                            <BuyerGoods />
                        </GridItem>
                        <GridItem area='goods'>
                            <UserGoods role={role} />
                        </GridItem>
                    </Grid>
                )}
            </Box>
        </ContainerPage>
    )
}

export default Profile