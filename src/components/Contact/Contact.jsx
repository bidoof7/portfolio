import { Box, Button, Link, Text } from '@chakra-ui/react';
import { GitHubIcon, InstagramIcon } from '~/components/Icons';

function Contact() {
    return (
        <Box>
            <Link href="https://github.com/happy-bmo" isExternal>
                <Button variant="ghost" color="#f74728" fontSize="18px">
                    <Text as="span" mr={3}>
                        <GitHubIcon />
                    </Text>
                    @happy-bmo
                </Button>
            </Link>
            <Link href="https://www.instagram.com/yud.mih" isExternal>
                <Button variant="ghost" color="#f74728" fontSize="18px">
                    <Text as="span" mr={3}>
                        <InstagramIcon />
                    </Text>
                    @yud.mih
                </Button>
            </Link>
        </Box>
    );
}

export default Contact;
