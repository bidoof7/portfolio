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
                        Hobbies
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
                  <Text fontSize={{ base: 'sm', md: 'sm', lg: 'sm' }}>Music, Art, Workout, Computer</Text>
            </Box>
      );
}

export default Work;
