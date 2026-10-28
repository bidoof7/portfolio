import { useEffect, useState } from 'react';
import { Box, Button, Container } from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

function DefaultLayout({ children }) {
    const [showOnTop, setShowOnTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setShowOnTop(true);
            } else {
                setShowOnTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const BackToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <Box as="main">
            <Header />
            <Container maxW="80%" mx="auto" pt="70px">
                {children}
            </Container>
            {showOnTop && (
                <Button variant="outline" onClick={BackToTop} position="fixed" bottom="5px" right="5px">
                    <ArrowUpIcon />
                </Button>
            )}
            <Footer />
        </Box>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired, // children có thể là bất kỳ kiểu dữ liệu nào hợp lệ cho React
};
export default DefaultLayout;
