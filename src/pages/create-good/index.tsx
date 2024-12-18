import {
    ContainerPage,
    BigGoodCard,
    Grid,
    PriceCard,
    AboutGoodEdit,
    GridItem,
} from "shared/ui"
import { Similar } from "widgets"


const CreateGood = () => {
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
                    <BigGoodCard isEdit />
                </GridItem>
                <GridItem area={'price'}>
                    <PriceCard isEdit />
                </GridItem>
                <GridItem area={'about-good'}>
                    <AboutGoodEdit />
                </GridItem>
                <GridItem area={'similar'}>
                    <Similar />
                </GridItem>
            </Grid>
        </ContainerPage>
    )
}

export default CreateGood