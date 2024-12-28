// eslint-disable-next-line react/prop-types
const LanguageSelector = ({ setLanguage }) => {
    return (
        <div className="language-selector">
            <button onClick={() => setLanguage('en')}>English</button>
            <button onClick={() => setLanguage('fr')}>Français</button>
        </div>
    );
};

export default LanguageSelector;
