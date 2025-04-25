import { Routes, Route, useLocation } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import MainPage from './pages/MainPage.tsx'
import EventsPage from './pages/EventsPage.tsx'
import useHandleClick from './functions/useHandleClick.tsx'
import DetailPage from './pages/DetailsPage.tsx'
import InfoPage from './pages/InfoPage.tsx'

function Layout() {
    const [dynamic, setDynamic] = useState(false)
    const location = useLocation()
    const handleClick = useHandleClick()

    const navItems = [
        { label: 'Главная', path: '/' },
        { label: 'О проекте', path: '/about' },
        { label: 'Мероприятия', path: '/hackathons' },
    ]

    const steps = [
        { img: '/Component 1.svg', text: 'Зарегистрируйся' },
        { img: '/Component 2.svg', text: 'Собери команду' },
        { img: '/Component 3.svg', text: 'Выбери трек' },
        { img: '/Component 4.svg', text: 'Прими участие' },
    ]

    return (
        <Box className='flex'>
            <Box className='flex flex-col w-[18%] p-[40px] bg-[#E4CEBC] min-h-[100vh] gap-[20px]'>
                {navItems.map((item) => (
                    <motion.div
                        key={item.path}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className='bg-transparent'>
                        <Typography
                            variant='h5'
                            className='cursor-pointer no-underline bg-transparent'
                            key={item.path}
                            onClick={() => handleClick(item.path)}>
                            {item.label}
                        </Typography>
                    </motion.div>
                ))}
                <Box className='flex flex-col pt-[25vh] bg-transparent'>
                    <Typography
                        variant='h5'
                        className='font-bold pb-[20px] bg-transparent'>
                        Как учавствовать?
                    </Typography>
                    {steps.map((step, index) => (
                        <Box
                            className='flex items-center gap-[5px] bg-transparent pb-[10px]'
                            key={index}>
                            <img
                                className='bg-transparent'
                                src={step.img}/>
                            <Typography
                                className='bg-transparent'
                                component='span'
                                variant='body1'>
                                {step.text}
                            </Typography>
                        </Box>
                    ))}
                </Box>
                <Box className='flex flex-col bg-transparent pt-[10vh]'>
                    <Typography
                        className='pb-[20px] bg-transparent'
                        component='span'
                        variant='body1'>
                        Все права защищены, 2025
                    </Typography>
                    <Typography
                        className='bg-transparent flex flex-col'
                        component='span'
                        variant='body1'>
                        Связь с нами:
                        <Typography
                            className='bg-transparent pt-[10px]'
                            component='span'
                            variant='body1'>
                            example@gmail.com <br />
                            +7 999 888 77 66
                        </Typography>
                    </Typography>
                </Box>
            </Box>

            <Box className='flex w-[82%] p-[30px]'>
                <Box className='flex-1 flex-col border-2 border-[#308C78] p-[40px]'>
                    {!dynamic && (
                        <Typography
                        className='flex justify-between'
                        variant='h4'>
                        Твоя идея — против времени. Проверь,<br /> на что ты способен
                        <img src='/image%208.svg'></img>
                        </Typography>
                    )}
                    <AnimatePresence mode='wait'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            key='box'>
                            <Routes location={location} key={location.pathname}>
                                <Route
                                    path='/'
                                    element={
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0 }}
                                            transition={{ duration: 0.3 }}>
                                            <MainPage />
                                        </motion.div>} />
                                <Route
                                    path='/about'
                                    element={
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0 }}
                                            transition={{ duration: 0.3 }}>
                                            <InfoPage setDynamic={setDynamic}/>
                                        </motion.div>} />
                                <Route
                                    path='/hackathons'
                                    element={
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0 }}
                                            transition={{ duration: 0.3 }}>
                                            <EventsPage />
                                        </motion.div>} />
                                <Route
                                    path='/:title'
                                    element={
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0 }}
                                            transition={{ duration: 0.3 }}>
                                            <DetailPage setDynamic={setDynamic} />
                                        </motion.div>} />
                            </Routes>
                        </motion.div>
                    </AnimatePresence>
                </Box>
            </Box>
        </Box>
    )
}

export default Layout
