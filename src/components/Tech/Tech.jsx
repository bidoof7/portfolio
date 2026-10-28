import { Flex, ListItem, Tag, TagLeftIcon, Text, Tooltip, UnorderedList } from '@chakra-ui/react';

import {
    CSharpIcon,
    DockerIcon,
    FigmaIcon,
    JavaIcon,
    JSIcon,
    LinuxIcon,
    MySQLIcon,
    NextJSIcon,
    NodeIcon,
    ReactIcon,
    SQLServerIcon,
} from '~/components/Icons';

function Tech() {
    const programmingLanguages = [
        { label: 'Javascript', icon: JSIcon },
        { label: 'Java', icon: JavaIcon },
        { label: 'C#', icon: CSharpIcon },
    ];
    const frameWork = [
        { label: 'NodeJS', icon: NodeIcon },
        { label: 'ReactJS', icon: ReactIcon },
        { label: 'NextJS', icon: NextJSIcon },
    ];
    const data = [
        { label: 'SQL Server', icon: SQLServerIcon },
        { label: 'MySQL', icon: MySQLIcon },
    ];
    const tools = [
        { label: 'Docker', icon: DockerIcon },
        { label: 'Figma', icon: FigmaIcon },
    ];
    const os = [{ label: 'Ubuntu', icon: LinuxIcon }];
    return (
        <Flex className="skill-wrapper">
            <UnorderedList styleType="''" display="flex" justifyContent="start" flexDirection="column" ml={0}>
                <ListItem display="flex">
                    <Text as="span" mb="3px">
                        Languages:
                    </Text>
                    {programmingLanguages.map((lang) => (
                        <Tooltip key={lang.label} label={lang.label} aria-label="A tooltip" placement="top">
                            <Tag size="sm" m="4px" variant="subtle" colorScheme="black">
                                <TagLeftIcon as={lang.icon} />
                            </Tag>
                        </Tooltip>
                    ))}
                </ListItem>
                <ListItem display="flex">
                    <Text as="span" mb="3px">
                        Framework:
                    </Text>
                    {frameWork.map((f) => (
                        <Tooltip key={f.label} label={f.label} aria-label="A tooltip" placement="top">
                            <Tag size="sm" m="4px" variant="subtle" colorScheme="black">
                                <TagLeftIcon as={f.icon} />
                            </Tag>
                        </Tooltip>
                    ))}
                </ListItem>
                <ListItem display="flex">
                    <Text as="span" mb="3px">
                        Data:
                    </Text>
                    {data.map((d) => (
                        <Tooltip key={d.label} label={d.label} aria-label="A tooltip" placement="top">
                            <Tag size="sm" m="4px" variant="subtle" colorScheme="black">
                                <TagLeftIcon as={d.icon} />
                            </Tag>
                        </Tooltip>
                    ))}
                </ListItem>
                <ListItem display="flex">
                    <Text as="span" mb="3px">
                        Tools:
                    </Text>
                    {tools.map((t) => (
                        <Tooltip key={t.label} label={t.label} aria-label="A tooltip" placement="top">
                            <Tag size="sm" m="4px" variant="subtle" colorScheme="black">
                                <TagLeftIcon as={t.icon} />
                            </Tag>
                        </Tooltip>
                    ))}
                </ListItem>
                <ListItem display="flex">
                    <Text as="span" mb="3px">
                        OS:
                    </Text>
                    {os.map((os) => (
                        <Tooltip key={os.label} label={os.label} aria-label="A tooltip" placement="top">
                            <Tag size="sm" m="4px" variant="subtle" colorScheme="black">
                                <TagLeftIcon as={os.icon} />
                            </Tag>
                        </Tooltip>
                    ))}
                </ListItem>
            </UnorderedList>
        </Flex>
    );
}

export default Tech;
