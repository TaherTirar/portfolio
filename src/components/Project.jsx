import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = [
        {
            name: 'To Do List App',
            description: 'A simple To-Do List app where users can add, edit, and delete tasks with priorities and deadlines. It features notifications, a dark/light mode toggle, and a clean, modern design.',
            images: ['/images/image3.png', '/images/image2.png', '/images/image1.png'],
            liveLink: 'https://Avatar501.github.io/ToDo',
            repoLink: 'https://github.com/Avatar501/ToDo',
        },
    ];

    return (
        <section className="projects">
            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
