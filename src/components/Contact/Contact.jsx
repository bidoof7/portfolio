import { Flex, Box, Button, Link, Text, Heading } from '@chakra-ui/react';
import { GitHubIcon, InstagramIcon } from '~/components/Icons';
import { motion } from 'motion/react';
function Contact() {
      return (
            <Box>
                  <Heading
                        fontSize={{ base: 'md', md: 'lg', lg: 'lg' }}
                        display="inline-flex"
                        flexDirection="column"
                        alignItems="flex-start"
                  >
                        Contact me
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
                  <Flex flexDirection="column">
                        <Link href="https://github.com/bidoof7" isExternal>
                              <Button variant="ghost" color="#f74728" fontSize={{ base: 'sm', md: 'sm', lg: 'sm' }}>
                                    <Text as="span" mr={3}>
                                          <GitHubIcon />
                                    </Text>
                                    @bidoof7
                              </Button>
                        </Link>
                        <Link href="https://www.instagram.com/yud.mih" isExternal>
                              <Button variant="ghost" color="#f74728" fontSize={{ base: 'sm', md: 'sm', lg: 'sm' }}>
                                    <Text as="span" mr={3}>
                                          <InstagramIcon />
                                    </Text>
                                    @yud.mih
                              </Button>
                        </Link>
                  </Flex>
            </Box>
      );
}

export default Contact;
