import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'

import data from '../data'
import Button from '../components/Button.tsx'
import RegistrationForm from '../components/RegistrationForm.tsx'

const DetailPage = ({ setDynamic }: {setDynamic: (val: boolean) => void}) => {
    const { title } = useParams();
    const pageData = data.find(item => item.slug === title);
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        setDynamic(true)
        return () => setDynamic(false)
    }, [])

    if (!pageData) return <div>Страница не найдена</div>;

    return (
        <Box className='flex flex-col gap-[30px]'>
            <Box className='flex flex-col gap-[20px] items-center'>
                <Typography
                    fontWeight='bold'
                    variant='h5'>
                    ХАКАТОН
                </Typography>
                <Typography
                    fontWeight='normal'
                    variant='h5'>
                    {pageData.title}
                </Typography>
            </Box>
            <span className='h-[2px] bg-[#308C78]'></span>
            <Box className='flex flex-col gap-[20px]'>
                <Typography
                    fontWeight='bold'
                    variant='h6'>
                    🔥Дата и место
                </Typography>
                <Typography>
                    {pageData.timePlace}
                </Typography>
            </Box>
            <span className='h-[2px] bg-[#308C78]'></span>
            <Box className='flex justify-between items-center'>
                <Box className='flex flex-col gap-[20px] w-[80%]'>
                    <Typography
                        fontWeight='bold'
                        variant='h6'>
                        🔥Описание
                    </Typography>
                    <Typography>
                        {pageData.description}
                    </Typography>
                </Box>
                <img src={pageData.logo} height='100px' />
            </Box>
            <span className='h-[2px] bg-[#308C78]'></span>
            <Box className='flex justify-between items-center'>
                <Box className='flex flex-col gap-[20px] w-[80%]'>
                    <Typography
                        fontWeight='bold'
                        variant='h6'>
                        🔥Участники
                    </Typography>
                    <Typography>
                        {pageData.participants} <br />
                        Присоединяйся!
                    </Typography>
                </Box>
                <Button
                    pathname={'#'}
                    onClick={() => setShowForm(true)}
                    name={'Регистрация'} />
                <RegistrationForm open={showForm} onClose={() => setShowForm(false)} />
            </Box>
            <span className='h-[2px] bg-[#308C78]'></span>
            <Box className='flex flex-col gap-[20px]'>
                <Typography
                    fontWeight='bold'
                    variant='h6'>
                    🔥Темы хакатонов
                </Typography>
                <Box className='flex gap-[100px]'>
                    {pageData.topic.map((p, k) => (
                        <Box
                            key={k}
                            className='flex flex-col items-center'>
                            <img src={p.image} width='80px' />
                            <Typography>
                                {p.title}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default DetailPage
