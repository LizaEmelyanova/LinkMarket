import { Link } from "shared/iconpack"
import { Flex, Button, GoodCard, Text, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from "shared/ui"


const OrderSettings = () => {
    return (
        <Flex
            w='100%'
            gap='35px'
            flexDir='column'
            bg='gray.100'
            borderRadius='30px'
            p='40px 45px'
        >
            <Flex
                flexDir='column'
                gap='15px'
            >
                <Flex
                    alignItems='center'
                    justifyContent='space-between'
                >
                    <Text fontSize='32px' fontWeight={600}>
                        Посмотрите товары
                    </Text>
                    <Button
                        p='25px'
                        fontSize='28px'
                        bgColor='white'
                        rightIcon={
                            <Link color="black" />
                        }
                        _hover={{
                            bg: 'gray.200'
                        }}
                    >
                        Заказать
                    </Button>
                </Flex>
                <Flex
                    w='100%'
                    overflowX='scroll'
                    gap='20px'
                >
                    <GoodCard basket={false} />
                    <GoodCard basket={false} />
                    <GoodCard basket={false} />
                    <GoodCard basket={false} />
                    <GoodCard basket={false} />
                    <GoodCard basket={false} />
                </Flex>
            </Flex>
            <Text fontSize='32px' fontWeight={600}>
                Сумма заказа: 13 555 руб
            </Text>
            <Text fontSize='32px' fontWeight={600}>
                Настройте срок доставки
            </Text>
            <Flex
                bg='gray.200'
                borderRadius='20px'
                gap='30px'
                flexDir='column'
                p='20px 40px'
            >
                <RangeSlider aria-label={['min', 'max']} defaultValue={[10, 80]}>
                    <RangeSliderTrack bg='white'>
                        <RangeSliderFilledTrack bg='blue.100' />
                    </RangeSliderTrack>
                    <RangeSliderThumb boxSize={6} index={0} />
                    <RangeSliderThumb boxSize={6} index={1} />
                </RangeSlider>
                <Flex
                    alignItems='center'
                    justifyContent='space-between'
                >
                    <Text
                        color='white'
                        fontSize='32px'
                        fontWeight={600}
                    >
                        Минимум: 35 дней
                    </Text>
                    <Text
                        color='white'
                        fontSize='32px'
                        fontWeight={600}
                    >
                        Максимум: 1 год
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export { OrderSettings }