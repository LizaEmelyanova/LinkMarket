import { Box, Image } from ".."

export const Advertising = () => {
    return (
        <Box
            w='100%'
            maxH='250px'
            minH='115px'
            mb='20px'
            borderRadius='20px'
            overflow='hidden'
        >
            <Image w='100%' src="/advertising.png" />
        </Box>
    )
}