import ProjectGallery from '../components/projects/ProjectGallery.jsx';
import ProjectHeader from '../components/projects/ProjectHeader.jsx';
import ProjectInfo from '../components/projects/ProjectInfo.jsx';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.jsx';
import { SingleProjectProvider } from '../context/SingleProjectContext.jsx';
import { motion } from 'framer-motion';

const ProjectSingle = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<SingleProjectProvider>
				<ProjectHeader />
				<ProjectGallery />
				<ProjectInfo />
				<ProjectRelatedProjects />
			</SingleProjectProvider>
		</motion.div>
	);
};

export default ProjectSingle;
