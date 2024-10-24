import { ContainerPage, Advertising, Box } from "shared/ui"
import { GoodsList } from "widgets/GoodsList"


const MainPage = () => {
    return (
        <ContainerPage>
            <Box h={'90%'} overflowY={'scroll'}>
                <Advertising />
                <GoodsList />
            </Box>
        </ContainerPage>
    )
}

export default MainPage