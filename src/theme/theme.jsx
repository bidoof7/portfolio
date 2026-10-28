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
            heading: "'Space Grotesk', sans-serif",
            body: "'Inter', sans-serif",
      },
      components: {
            Heading: {
                  baseStyle: {
                        marginBottom: '6px',
                  },
            },
      },
});

export default theme;
