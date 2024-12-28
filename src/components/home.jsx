// eslint-disable-next-line react/prop-types
const Home = ({ language }) => {
    return (
        <section className="home">
            <h2>{language === 'en' ? 'Welcome to My Portfolio' : 'Bienvenue sur mon Portfolio'}</h2>
            <p>
                {language === 'en'
                    ? 'Hi, I am a professional web developer with the ability to develop high-performance and attractive websites. I enjoy solving problems through web coding and am always eager to learn new techniques.'
                    : 'Bonjour, je suis un développeur web professionnel avec la capacité de développer des sites web performants et attrayants. J\'aime résoudre des problèmes grâce à la programmation web et je suis toujours prêt à apprendre de nouvelles techniques.'}
            </p>
            <p>
                {language === 'en'
                    ? 'Feel free to review my work and contact me for any future project collaboration. I would be happy to discuss your ideas and how I can contribute to their execution.'
                    : 'N\'hésitez pas à consulter mes réalisations et à me contacter pour toute collaboration sur un projet futur. Je serai ravi de discuter de vos idées et de la manière dont je peux contribuer à leur réalisation.'}
            </p>
        </section>
    );
};

export default Home;
