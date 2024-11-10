import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { PageRoutes } from "shared/config/pages"
import { Message, Setting, Tg, VK, Youtube } from "shared/iconpack"
import {
    Flex,
    Text,
    Button,
    MenuButton,
    IconInput,
    ButtonIcon,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    DrawerBody,
    ProfileCard,
    DrawerFooter
} from "shared/ui"

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const navigate = useNavigate()

    const btns = [
        {name: 'Все товары', onClick: () => navigate(PageRoutes.MainPage)},
        {name: 'Акции', onClick: () => console.log('Акции')},
        {name: 'Одежда', onClick: () => console.log('Одежда')},
        {name: 'Украшения', onClick: () => console.log('Украшения')},
        {name: 'Мебель', onClick: () => console.log('Мебель')},
        {name: 'Игрушки', onClick: () => console.log('Игрушки')},
        {name: 'Другое', onClick: () => console.log('Другое')}
    ]

    return (
        <Flex flexDir='column' zIndex={100}>
            <Flex
                w='100%'
                p='18px 20px'
                bgColor='gray.200'
                justifyContent={'space-between'}
            >
                <Flex alignItems={'center'} gap={'30px'}>
                    <MenuButton onClick={() => setIsOpenMenu(true)} />
                    <Text
                        color={'white'}
                        fontSize={'20px'}
                    >
                        LinkMarket
                    </Text>
                    <Text
                        color={'white'}
                        fontSize={'20px'}
                        pl='30px'
                        borderLeft={'1px solid white'}
                    >
                        г Москва, Авиамоторная улица 6с4
                    </Text>
                </Flex>
                <Flex gap={'10px'}>
                    <IconInput placeholder="Поиск" />
                    <Flex gap={'10px'}>
                        <ButtonIcon
                            icon={<Message
                                width={'20px'}
                                height={'20px'}
                                color="black"
                            />}
                            onClick={() => console.log('message')}
                        />
                        <ButtonIcon
                            icon={<Setting
                                width={'20px'}
                                height={'20px'}
                                color="black"
                            />}
                            onClick={() => console.log('message')}
                        />
                    </Flex>
                </Flex>
            </Flex>
            <Drawer
                isOpen={isOpenMenu}
                onClose={() => setIsOpenMenu(false)}
                placement="left"
            >
                <DrawerOverlay />
                <DrawerContent bg='gray.200' p='15px'>
                    <DrawerBody>
                        <ProfileCard />
                        <Flex flexDir='column' gap='10px' mt='20px'>
                            {btns.map((btn) => (
                                <Button onClick={btn.onClick}>{btn.name}</Button>
                            ))}
                        </Flex>
                    </DrawerBody>
                    <DrawerFooter>
                        <Flex
                            w='100%'
                            justifyContent='space-around'
                            alignItems='center'
                        >
                            <VK color="white" />
                            <Tg color="white" />
                            <Youtube color="white" />
                        </Flex>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Flex>
    )
}

export { Header }