import { Box, Typography } from "@mui/material";

import HackathonsList from "./components/HackathonsList.tsx";

const categories = [
	{ label: "Геймдев", icon: '/PS Controller.svg'},
	{ label: "Финтех", icon: '/Total Sales.svg' },
	{ label: "ИИ", icon: '/Artificial Intelligence.svg' },
	{ label: "Разработка", icon: '/Code.svg' },
	{ label: "Большие данные", icon: '/Line Chart.svg' }
];

function MainPage() {
	return (
		<Box className='flex flex-col'>
			<Typography
				className='pb-[20px]'
				fontWeight='bold'
				variant='h5'>
				🔥 Ближайшее мероприятие
			</Typography>

			<HackathonsList />

			<Typography
				className='pt-[40px] pb-[20px]'
				fontWeight='bold'
				variant='h5'>
				Темы хакатонов
			</Typography>
			<Box className='flex justify-between'>
				{categories.map((item, i) => (
					<Box
						key={i}
						className=' flex flex-col items-center bg-[#308C78] border border-[#000000] h-[150px] w-[200px]'>
						<Typography
							className='bg-transparent text-[#FFFFFF] pt-[30px]'
							variant='body1'>
							{item.label}
						</Typography>
						<img
							className='bg-transparent'
							src={item.icon} />
					</Box>
				))}
			</Box>


				<Typography mb={2}>Сейчас уже участвует свыше 145 команд 🏆</Typography>
				<Typography mb={2}>
					Скорее принимай участие и выигрывай призы, лучшие команды смогут получить оффер от наших партнёров
				</Typography>
				<Typography mb={2}>Ознакомься со списком предстоящих хакатонов и принимай участие!</Typography>

				{/*<Button variant="contained" color="success">К мероприятиям!</Button>*/}
		</Box>
	);
}

export default MainPage
