import {
    ContainerPage,
    BigGoodCard,
    Grid,
    PriceCard,
    AboutGood,
    GridItem,
    Text,
} from "shared/ui"
import { Similar } from "widgets"

const GoodPage = () => {
    return (
        <ContainerPage>
            <Grid
                w='100%'
                h='95%'
                gridTemplateColumns={'1fr 2fr'}
                gridTemplateRows={'1fr 4fr 3fr'}
                columnGap='50px'
                rowGap='35px'
                overflowY='scroll'
                templateAreas={`'goodCard price'
                                'goodCard about-good'
                                'similar text'`}
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
                <GridItem mt='-25px' area={'similar'}>
                    <Similar />
                </GridItem>
                <GridItem area={'text'}>
                    <Text
                        fontSize='24px'
                    >
                        Подробное описание товара,
                        процесса изготовления, информация о продавце,
                        его контактные данные
                    </Text>
                </GridItem>
            </Grid>
        </ContainerPage>
    )
}

export default GoodPage