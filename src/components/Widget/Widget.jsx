import { Card, CardBody, CardHeader, Heading, useColorMode } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function Widget({ heading, children }) {
    const { colorMode }= useColorMode();

    return (
        <Card
            className="flex justify-center items-center min-h-[100%] max-w-[100%]"
            backgroundColor={colorMode === "dark" ? "#FBD38D" : "white"}
            color={colorMode === "dark" ? "#2d2d30" : "#2d2d30"}
            border="none"
            padding="15px"
            borderRadius="50px"
            boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
            variant="outline"
            transition="transform 0.3s ease"
            _hover={{
                transform: 'scale(1.013)',
                transformOrigin: 'center',
            }}
        >
            {heading && (
                <CardHeader padding="0px">
                    <Heading>{heading}</Heading>
                </CardHeader>
            )}
            <CardBody maxW="100%">{children}</CardBody>
        </Card>
    );
}

Widget.propTypes = {
    heading: PropTypes.string,
    children: PropTypes.node,
};

export default Widget;
