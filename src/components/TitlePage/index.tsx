import { motion } from "framer-motion";
import data from "../../data";
import { z } from "zod";
import { Card as MuiCard, CardContent } from "@mui/material";

const MotionCard = motion(MuiCard);

const fadeVariant = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -20 }
};

const pageSchema = z.object({
	title: z.string(),
	content: z.string()
});

const validatedPages = data.map((page) => pageSchema.parse(page));

function TitlePage() {
	return (
		<motion.div variants={fadeVariant} initial="initial" animate="animate" exit="exit">
			<h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Статическая Title Page</h2>
			{validatedPages.map((p, i) => (
				<MotionCard
					key={i}
					whileHover={{ scale: 1.05 }}
					style={{ marginBottom: '16px', padding: '16px' }}
				>
					<CardContent>
						<a href={`/${p.title}`} style={{ color: '#1976d2', textDecoration: 'underline' }}>
							{p.title}
						</a>
					</CardContent>
				</MotionCard>
			))}
		</motion.div>
	);
}

export default TitlePage;
