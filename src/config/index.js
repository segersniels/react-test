import development from './development';

const getConfig = () => {
    console.log(`Loading configuration for: ${window.location.hostname}`);
    switch (window.location.hostname) {
        case 'localhost':
            return development;
        default:
            return development;
    }
};

export default getConfig();
