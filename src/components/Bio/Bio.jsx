import { Box, Text } from '@chakra-ui/react';

function Bio() {
    const textHightlight = {
        fontSize: "18px", fontWeight: "bold"
    }

    return (
        <Box>
            <Text>
                <Text as="span" mr={4} sx={textHightlight}>2003</Text>
                Born in Ho Chi Minh City, Viet Nam
            </Text>
            <Text>
                <Text as="span" mr={4} sx={textHightlight}>
                    2021
                </Text>
                Completed Business Information Technology in FPT College
            </Text>
            <Text>
                <Text as="span" mr={4} sx={textHightlight}>
                    2024 to present
                </Text>
                Working at KIDO group as full-stack developer
            </Text>
        </Box>
    );
}

export default Bio;
