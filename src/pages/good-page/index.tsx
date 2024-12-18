import {
    ContainerPage,
    BigGoodCard,
    Grid,
    PriceCard,
    AboutGood,
    GridItem,
} from "shared/ui"
import { Similar } from "widgets"

const GoodPage = () => {
    return (
        <ContainerPage>
            <Grid
                w='100%'
                h='100%'
                gridTemplateColumns={'1fr 2fr'}
                columnGap='50px'
                rowGap='35px'
                templateAreas={`'goodCard price'
                                'goodCard about-good'
                                'similar about-good'`}
            >
                <GridItem area={'goodCard'}>
                    <BigGoodCard />
                </GridItem>
                <GridItem area={'price'}>
                    <PriceCard />
                </GridItem>
                <GridItem area={'about-good'}>
                    <AboutGood />
                </GridItem>
                <GridItem area={'similar'}>
                    <Similar />
                </GridItem>
            </Grid>
        </ContainerPage>
    )
}

export default GoodPage