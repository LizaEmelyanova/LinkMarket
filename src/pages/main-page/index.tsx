import { ContainerPage, Advertising } from "shared/ui"
import { GoodsList } from "widgets/GoodsList"


const MainPage = () => {
    return (
        <ContainerPage>
            <Advertising />
            <GoodsList />
        </ContainerPage>
    )
}

export default MainPage