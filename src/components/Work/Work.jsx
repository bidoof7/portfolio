import { Box, Text, Heading } from '@chakra-ui/react';
import { motion } from 'motion/react';

function Work() {
      return (
            <Box>
                  <Heading
                        fontSize={{ base: 'md', md: 'lg', lg: 'lg' }}
                        display="inline-flex"
                        flexDirection="column"
                        alignItems="flex-start"
                  >
                        Work
                        <motion.span
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{
                                    duration: 0.5,
                                    ease: 'easeOut',
                                    delay: 0.15,
                              }}
                              style={{
                                    display: 'block',
                                    width: '100%',
                                    height: '4px',
                                    backgroundColor: '#777',
                                    transformOrigin: 'left',
                              }}
                        />
                  </Heading>
                  <Text fontSize={{ base: 'sm', md: 'sm', lg: 'sm' }}>
                        I’m a Software Developer with strong planning and design skills, focused on delivering technology solutions to solve
                        real-world problems. I enjoy researching and exploring technologies that align with my interests.
                  </Text>
            </Box>
      );
}

export default Work;
