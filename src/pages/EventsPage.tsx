import { Box, Typography } from '@mui/material'
import { z } from 'zod'

import HackathonsList from '../components/HackathonsList.tsx'
import data from '../data.ts'

function EventsPage() {
    const pageShema = z.object({
        slug: z.string(),
        title: z.string(),
        timePlace: z.string()
    })

    const validatedPages = data.map((page) => pageShema.parse(page))

    return (
        <Box className='flex flex-col max-h-[69vh]'>
            <Typography
                className='pb-[20px]'
                fontWeight='bold'
                variant='h5'>
                🔥 Все мероприятия
            </Typography>
            <div className='flex flex-col gap-[20px] overflow-y-auto'>
                {validatedPages.map((p, k) => (
                    <Box key={k}>
                        <HackathonsList
                            slug={p.slug}
                            title={p.title}
                            timePlace={p.timePlace} />
                    </Box>
                ))}
            </div>
        </Box>
    )
}

export default EventsPage
