import PropTypes from 'prop-types';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCard = ({ project, language }) => (
    <div className="project-card">
        <Slider>
            {project.images.map((img, index) => (
                <img key={index} src={img} alt={`${project.name[language]} screenshot ${index + 1}`} className="project-card-img" />
            ))}
        </Slider>
        <h3>{project.name[language]}</h3>
        <div className="tags">
            {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
            ))}
        </div>
        <p className="description">{project.description[language]}</p>
        <div className="links">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Site</a>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
    </div>
);

ProjectCard.propTypes = {
    project: PropTypes.shape({
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        name: PropTypes.object.isRequired,
        liveLink: PropTypes.string.isRequired,
        repoLink: PropTypes.string.isRequired,
        description: PropTypes.object.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    language: PropTypes.string.isRequired,
};

export default ProjectCard;
