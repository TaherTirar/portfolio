import ProjectCard from './ProjectCard';

// eslint-disable-next-line react/prop-types
const Projects = ({ language }) => {
    const projects = [
        {
            name: {
                en: 'To Do List App',
                fr: 'Application Liste de Tâches',
            },
            description: {
                en: (
                    <>
                        A simple To-Do List app where users can add, <i>edit</i>, and <i>delete</i> tasks with priorities and deadlines. It features <i>notifications</i>, a dark/light mode toggle, and a clean, modern design.
                    </>
                ),
                fr: (
                    <>
                        Une application simple de liste de tâches où les utilisateurs peuvent ajouter, <i>modifier</i> et <i>supprimer</i> des tâches avec des priorités et des échéances. Elle inclut des <i>notifications</i>, un bouton de bascule entre mode sombre/clair, et un design moderne et épuré.
                    </>
                ),
            },
            images: ['/images/image3.png', '/images/image2.png', '/images/image1.png'],
            liveLink: 'https://tahertirar.github.io/ToDo/',
            repoLink: 'https://github.com/TaherTirar/ToDo',
            tags: ['React', 'Dark/Light Mode', 'Hooks', 'notifications', 'Dynamic Task List'],
        },
        {
            name: {
                en: 'Weather App',
                fr: 'Application Météo',
            },
            description: {
                en: (
                    <>
                        This weather app lets users search for a city′s current weather and 5-day forecast using a <b>weather API</b>. It displays <i>temperature</i>, <i>wind speed</i>, and allows users to <i>save or remove favorite cities</i>.
                    </>
                ),
                fr: (
                    <>
                        Cette application météo permet aux utilisateurs de rechercher la météo actuelle et les prévisions sur 5 jours d′une ville à l′aide d′une <b>API météo</b>. Elle affiche <i>la température</i>, <i>la vitesse du vent</i> et permet aux utilisateurs <i>d′ajouter ou de supprimer des villes favorites</i>.
                    </>
                ),
            },
            images: ['/images/imageWeather.png', '/images/imageWeather2.png'],
            liveLink: 'https://merry-daffodil-ccf03b.netlify.app/',
            repoLink: 'https://github.com/TaherTirar/weather-app',
            tags: ['React', 'OpenWeather API', 'CSS'],
        },
        {
            name: {
                en: 'Youtube Search',
                fr: 'Recherche YouTube',
            },
            description: {
                en: (
                    <>
                        A simple YouTube video search application that uses the <b>YouTube API</b> to <i>fetch videos based on user searches</i>, displaying video previews with titles in a clean, easy-to-use interface.
                    </>
                ),
                fr: (
                    <>
                        Une application simple de recherche de vidéos YouTube qui utilise l′<b>API YouTube</b> pour <i>récupérer les vidéos en fonction des recherches des utilisateurs</i>, affichant des aperçus de vidéos avec des titres dans une interface propre et facile à utiliser.
                    </>
                ),
            },
            images: ['/images/imageYT1.png', '/images/imageYT2.png'],
            liveLink: 'https://api-youtube-data.vercel.app/',
            repoLink: 'https://github.com/TaherTirar/API-YouTube-Data',
            tags: ['React', 'CSS', 'Hooks', 'YouTube API'],
        },
        {
            name: {
                en: 'Tic-Tac-Toe Game',
                fr: 'Jeu Tic-Tac-Toe',
            },
            description: {
                en: 'Tic-Tac-Toe game with a timer and score tracking, each turn has a 10-second limit, ending the game if time runs out, "Next Game" resets the board, and "Restart Game" resets both board and scores.',
                fr: 'Jeu Tic-Tac-Toe avec un chronomètre et un suivi des scores, chaque tour ayant une limite de 10 secondes, mettant fin à la partie si le temps est écoulé. "Nouvelle Partie" réinitialise le plateau et "Redémarrer la Partie" réinitialise à la fois le plateau et les scores.',
            },
            images: ['/images/imageXO1.png', '/images/imageXO2.png'],
            liveLink: 'https://tahertirar.github.io/x-vs-o/',
            repoLink: 'https://github.com/TaherTirar/x-vs-o',
            tags: ['React', 'CSS', 'Hooks', 'Score Tracking', 'Game Over Logic'],
        },
    ];

    return (
        <section className="projects">
            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} language={language} />
                ))}
            </div>
        </section>
    );
};

export default Projects;