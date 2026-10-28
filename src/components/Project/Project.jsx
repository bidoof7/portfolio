import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Image, Link, Skeleton, Spinner, Text } from '@chakra-ui/react';

import { GitHubIcon } from '~/components/Icons';

const Project = ({ src, name, github }) => {
    return (
        <Box>
            {github ? (
                <Link href={github}>
                    <Image
                        backgroundColor="rgba(255, 255, 255, 0.1)"
                        border="none"
                        backdropFilter="blur(20px)"
                        borderRadius="15px"
                        padding="0"
                        boxShadow="0 4px 30px rgba(0, 0, 0, 0.2)"
                        minWidth="75%"
                        transition="transform 0.3s ease"
                        _hover={{
                            transform: 'scale(1.04)',
                            transformOrigin: 'center',
                        }}
                        src={src}
                        alt={name + ' img'}
                        w="100%"
                        maxW="100%"
                        h="180px"
                        objectFit="cover"
                    />
                    <Text my="10px">{name}</Text>
                    <Box className="flex justify-center">
                        <GitHubIcon w="2em" h="2em" />
                    </Box>
                </Link>
            ) : (
                <Flex direction="column" alignItems="center" justifyContent="center">
                    <Skeleton borderRadius="16px" w="180px" h="180px" speed={1.5}/>
                    <Spinner mt="30px" speed="0.8s"/>
                </Flex>
            )}
        </Box>
    );
};

Project.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
    github: PropTypes.string,
};

export default Project;
