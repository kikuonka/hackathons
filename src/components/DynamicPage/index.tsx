import { useParams } from "react-router-dom";
import data from "../../data";
import { motion } from "framer-motion";
import { z } from "zod";

const pageSchema = z.object({
	title: z.string(),
	content: z.string()
});

const validatedPages = data.map((page) => pageSchema.parse(page));

const fadeVariant = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -20 }
};

function DynamicPage() {
	const { titlePage } = useParams();
	const pageData = validatedPages.find((p) => p.title === titlePage);

	if (!pageData) return <div>Страница не найдена</div>;

	return (
		<motion.div variants={fadeVariant} initial="initial" animate="animate" exit="exit">
			<h3 className="text-xl font-bold mb-2">{pageData.title}</h3>
			<p>{pageData.content}</p>
		</motion.div>
	);
}

export default DynamicPage;
