// eslint-disable-next-line react/prop-types
const Footer = ({ language }) => {
    return (
        <footer className="footer">
            <h2>{language === 'en' ? 'Contact Me' : 'Contactez-moi'}</h2>
            <p>Email: <a href="mailto:tirarmohamedtaher@gmail.com">tirarmohamedtaher@gmail.com</a></p>
            <p>
                LinkedIn: <a href="https://www.linkedin.com/in/your-profile/" target="_blank" rel="noopener noreferrer">
                    {language === 'en' ? 'Your LinkedIn Profile' : 'Votre profil LinkedIn'}
                </a>
            </p>
            <p>
                GitHub: <a href="https://github.com/TaherTirar" target="_blank" rel="noopener noreferrer">
                    TaherTirar
                </a>
            </p>
            <p>{language === 'en' ? 'Phone' : 'Telephone'}: <a href="tel:+212 6754-53709">+212 6754-53709</a></p>
        </footer>
    );
};

export default Footer;
