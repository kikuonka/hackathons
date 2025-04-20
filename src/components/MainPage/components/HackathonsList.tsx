import { Box, Typography } from "@mui/material";

function HackathonsList() {
    return (
        <Box className='flex justify-between items-center border-2 border-[#308C78] px-[30px] py-[15px]'>
            <Box className='flex gap-[40px]'>
                <Typography
                    variant='h4'
                    fontWeight='bold'>
                    HACK <br /> ATHON <br /> 2025
                </Typography>
                <Box>
                    <Typography
                        className='pt-[20px] pb-[10px]'
                        fontWeight='bold'
                        variant='h5'>
                        ClimateTech / Экотехнологии
                    </Typography>
                    <Typography
                        variant='body1'>
                        12-14 мая | Москва, Санкт-Петербург, Волгоград
                    </Typography>
                </Box>
            </Box>
            <button
                className='bg-[#308C78] border border-[#000000] cursor-pointer h-[50px] w-[200px]'>
                <Typography
                    className='bg-transparent text-[#FFFFFF]'
                    variant='body1'>
                    Подробнее
                </Typography>
            </button>
        </Box>
    )
}

export default HackathonsList
