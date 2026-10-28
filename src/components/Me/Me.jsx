import React from 'react';
import { Flex, Avatar, Box, Text, Heading } from '@chakra-ui/react';

function Me() {
      return (
            <Flex justifyContent="space-between">
                  <Box>
                        <Heading fontSize={{ base: '2xl', md: '4xl', lg: '4xl' }}>Dang Le Minh Duy</Heading>
                        <Text fontSize={{ base: 'xl', md: 'xl', lg: 'xl' }}>Software Developer</Text>
                  </Box>
                  <Avatar
                        src="https://res.cloudinary.com/dv46hy594/image/upload/v1730778905/myAvatar_acv60l.png"
                        width={{ base: '80px', md: '100px', lg: '100px' }}
                        height={{ base: '80px', md: '100px', lg: '100px' }}
                        border="solid 2px rgb(107 114 128)"
                        objectFit="cover"
                        boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, 
                            rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                  />
            </Flex>
      );
}

export default Me;
