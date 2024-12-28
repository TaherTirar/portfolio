// eslint-disable-next-line react/prop-types
const LanguageToggle = ({ language, setLanguage }) => {
    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'fr' : 'en');
    };

    return (
        <button onClick={toggleLanguage} className="language-toggle">
            {language === 'en' ? 'Français' : 'English'}
        </button>
    );
};

export default LanguageToggle;
