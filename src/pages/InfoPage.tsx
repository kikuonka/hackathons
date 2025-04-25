import { Box, Typography } from '@mui/material'

import { useEffect } from 'react'

const InfoPage = ({ setDynamic }: {setDynamic: (val: boolean) => void}) => {
    useEffect(() => {
        setDynamic(true)
        return () => setDynamic(false)
    }, [])

    return (
        <Box className='flex flex-col gap-[30px]'>
            <Box className='flex flex-col gap-[20px]'>
                <Typography
                    fontWeight='bold'
                    variant='h5'>
                    🌿О ПРОЕКТЕ
                </Typography>
            </Box>
            <span className='h-[2px] bg-[#308C78]'></span>
            <Box className='flex flex-col gap-[20px]'>
                <Typography
                    fontWeight='bold'
                    variant='h6'>
                    🔥Цель проекта
                </Typography>
                <Typography>
                    Информационный портал создан для объединения информации о хакатонах разных направлений: от ClimateTech и Fintech до ИИ и образования.
                    Наша цель — сделать доступ к инновационным мероприятиям простым и удобным: участники могут узнать о хакатонах, их тематиках, датах и условиях участия, а также зарегистрироваться на интересующие события.
                    Мы стремимся поддерживать развитие технологий и создавать среду для продуктивного общения, командной работы и обмена идеями.
                </Typography>
            </Box>
            <span className='h-[2px] bg-[#308C78]'></span>
            <Box className='flex flex-col gap-[20px]'>
                <Typography
                    fontWeight='bold'
                    variant='h6'>
                    🔥Разработка
                </Typography>
                <Typography>
                    Каждое мероприятие, представленное на портале, сопровождается актуальной информацией: описание целей, место проведения, направления, темы, партнёры и призовой фонд.
                    Организаторы могут добавлять и редактировать данные о своих хакатонах, а участники — следить за обновлениями и делиться событиями.
                    Платформа разрабатывается с учётом удобства для разных типов пользователей: новичков, опытных разработчиков, экспертов и компаний-организаторов.
                </Typography>
            </Box>
            <span className='h-[2px] bg-[#308C78]'></span>
            <Box className='flex flex-col gap-[20px]'>
                <Typography
                    fontWeight='bold'
                    variant='h6'>
                    🔥Возможности
                </Typography>
                <Typography className='flex pl-[25px]'>
                    🔍 Просмотр актуальных и предстоящих хакатонов по интересующим направлениям<br />
                    📝 Быстрая регистрация на участие через портал<br />
                    📅 Удобный календарь и фильтрация по тематикам<br />
                    🧑‍💻 Доступ к информации о формате участия, требованиях и призах<br />
                    🤝 Возможность найти команду и узнать больше о других участниках<br />
                    🧠 Материалы и советы по подготовке к хакатону<br />
                    🌱 Поддержка и продвижение проектов после завершения мероприятий<br />
                </Typography>
            </Box>
        </Box>
    )
}

export default InfoPage
