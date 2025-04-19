import { motion } from "framer-motion";
import { Button } from "@mui/material";

const containerVariant = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -20 },
	hover: { scale: 1.02 },
	tap: { scale: 0.98 }
};

function MainPage() {
	return (
		<motion.div
			variants={containerVariant}
			initial="initial"
			animate="animate"
			exit="exit"
			whileHover="hover"
			whileTap="tap"
			transition={{ duration: 0.5 }}
			style={{
				padding: "40px",
				maxWidth: "600px",
				margin: "0 auto",
				background: "#f9f9f9",
				borderRadius: "12px",
				boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
				textAlign: "center"
			}}
		>
			<h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>
				Добро пожаловать на HackEvents
			</h1>
			<p style={{ marginBottom: '24px' }}>
				Следи за ближайшими хакатонами, находи команды и делись своими проектами!
			</p>

			<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
				<Button variant="contained" color="primary" href="/titlePage" component="a">
					Перейти к Title Page
				</Button>
			</motion.div>
		</motion.div>
	);
}

export default MainPage;
