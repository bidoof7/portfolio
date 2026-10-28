import { extendTheme } from '@chakra-ui/react';

// Extend the theme
const theme = extendTheme({
    semanticTokens: {
        colors: {
            'chakra-body-text': {
                _light: '#202023',
                _dark: '#F8F8FF',
            },
            'chakra-body-bg': {
                _light: '#F8F8FF',
                _dark: '#2d2d30',
            },
        },
    },
    fonts: {
        heading: "'OpenSans', sans-serif",
        textName: "'OpenSans', sans-serif",
    },
    components: {
        Text: {
            baseStyle: {
                fontWeight: '300',
            },
            sizes: {
                sm: {
                    fontSize: 'md',
                },
                md: {
                    fontSize: 'lg',
                },
                lg: {
                    fontSize: 'xl',
                },
                xl: {
                    fontSize: '2xl',
                },
            },
            defaultProps: {
                size: 'md',
            },
        },
        Heading: {
            baseStyle: {
                fontWeight: '500',
            },
            sizes: {
                sm: {
                    fontSize: 'md',
                },
                md: {
                    fontSize: 'lg',
                },
                lg: {
                    fontSize: 'xl',
                },
                xl: {
                    fontSize: '2xl',
                },
            },
            defaultProps: {
                size: 'lg',
            },
        },
    },
});

export default theme;
