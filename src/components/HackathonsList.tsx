import { Box, Typography } from '@mui/material'

import Button from './Button.tsx'

type HackathonsListProps = {
    slug: string,
    title: string,
    timePlace: string,
}

function HackathonsList({ slug, title, timePlace }: HackathonsListProps) {
    return (
        <>
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
                            {title}
                        </Typography>
                        <Typography
                            component='span'
                            variant='body1'>
                            {timePlace}
                        </Typography>
                    </Box>
                </Box>
                <Button
                    pathname={`/${slug}`}
                    name={'Подробнее'} />
            </Box>
        </>
    )
}

export default HackathonsList
