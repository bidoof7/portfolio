import { Grid, GridItem, Box, Text, Heading } from '@chakra-ui/react';
import { motion } from 'motion/react';

function Bio() {
      return (
            <Box>
                  <Heading
                        fontSize={{ base: 'md', md: 'lg', lg: 'lg' }}
                        display="inline-flex"
                        flexDirection="column"
                        alignItems="flex-start"
                  >
                        Bio
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
                  <Grid templateColumns="repeat(6, 1fr)" gap="2">
                        <GridItem>
                              <Text fontSize={{ base: 'sm', md: 'sm', lg: 'sm' }} fontWeight="bold">
                                    2021
                              </Text>
                        </GridItem>
                        <GridItem colSpan={5}>
                              <Text fontSize={{ base: 'sm', md: 'sm', lg: 'sm' }}>
                                    Completed the Associate Degree in Information Technology – Software Application At FPT
                              </Text>
                        </GridItem>
                        <GridItem>
                              <Text fontSize={{ base: 'sm', md: 'sm', lg: 'sm' }} fontWeight="bold">
                                    2024
                              </Text>
                        </GridItem>
                        <GridItem colSpan={5}>
                              <Text fontSize={{ base: 'sm', md: 'sm', lg: 'sm' }}>Worked at KIDO group as Software Developer</Text>
                        </GridItem>
                  </Grid>
            </Box>
      );
}

export default Bio;
