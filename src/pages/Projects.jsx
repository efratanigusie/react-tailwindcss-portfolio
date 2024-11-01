import ProjectsGrid from '../components/projects/ProjectsGrid.jsx';
import { ProjectsProvider } from '../context/ProjectsContext.jsx';

const Projects = () => {
	return (
		<ProjectsProvider>
			<div className="container mx-auto">
				<ProjectsGrid />
			</div>
		</ProjectsProvider>
	);
};

export default Projects;
