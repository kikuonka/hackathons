import { Box, Typography } from "@mui/material";
import {z} from "zod";
import { motion } from "framer-motion";

import data from "../data.ts";
import HackathonsList from "../components/HackathonsList.tsx";
import Button from "../components/Button.tsx";

function MainPage() {

	const categories = [
		{ label: "Геймдев", icon: '/PS Controller.svg'},
		{ label: "Финтех", icon: '/Total Sales.svg' },
		{ label: "ИИ", icon: '/Artificial Intelligence.svg' },
		{ label: "Разработка", icon: '/Code.svg' },
		{ label: "Большие данные", icon: '/Line Chart.svg' }
	];

	const pageShema = z.object({
		slug: z.string(),
		title: z.string(),
		timePlace: z.string()
	})

	const validatedPages = data.map((page) => pageShema.parse(page))

	return (
		<Box className='flex flex-col'>
			<Typography
				className='pb-[20px]'
				fontWeight='bold'
				variant='h5'>
				🔥 Ближайшее мероприятие
			</Typography>

			<HackathonsList
				slug={validatedPages[0].slug}
				title={validatedPages[0].title}
				timePlace={validatedPages[0].timePlace} />

			<Typography
				className='pt-[20px] pb-[20px]'
				fontWeight='bold'
				variant='h5'>
				Темы хакатонов
			</Typography>
			<Box className='flex justify-between pb-[20px]'>
				{categories.map((item, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
						whileTap={{ scale: 0.95 }}>
						<Box
							key={i}
							className=' flex flex-col items-center bg-[#308C78] border border-[#000000] h-[120px] w-[200px]'>
							<Typography
								className='bg-transparent text-[#FFFFFF] pt-[20px]'
								component='span'
								variant='body1'>
								{item.label}
							</Typography>
							<img
								className='bg-transparent w-[60px]'
								src={item.icon} />
						</Box>
					</motion.div>
				))}
			</Box>
			<Box className='flex justify-between'>
				<Box className='flex flex-col justify-start'>
					<Typography
						variant='h6'
						fontWeight='normal'>
						Сейчас уже участвует свыше 145 команд 🫵
					</Typography>
					<Typography
						variant='h6'
						fontWeight='normal'
						className='pt-[10px] pb-[10px]'>
						Скорее принимай участие и выигрывай призы, лучшие команды смогут <br /> получить оффер от наших партнёров
					</Typography>
					<Typography
						variant='h6'
						fontWeight='normal'>
						Ознакомься со списком предстоящих хакатонов <br /> и принимай участие!
					</Typography>
					<Box className='flex justify-center'>
						<Button
							pathname={'/hackathons'}
							name={'К мероприятиям!'}/>
					</Box>
				</Box>
				<img
					className='w-[313px]'
					src={'/image 9.svg'} />
			</Box>
		</Box>
	);
}

export default MainPage
