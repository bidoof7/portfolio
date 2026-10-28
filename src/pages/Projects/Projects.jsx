import { Grid, GridItem } from '@chakra-ui/react';

import Widget from '~/components/Widget';
import Project from '~/components/Project';

function Projects() {
    const myProjects = [
        {
            src: '',
            name: '',
            github: '',
        },
        {
            src: '',
            name: '',
            github: '',
        },
        {
            src: '',
            name: '',
            github: '',
        },
        {
            src: '',
            name: '',
            github: '',
        },
    ];
    // Khi nao co nhieu github link khac thi xoa index de toi uu performance
    return (
        <Grid templateColumns="repeat(4, 1fr)" gap={4} position="relative">
            {/* PROJECT */}
            {myProjects.map((proj, index) => {
                return (
                    <GridItem key={index} colSpan={{ base: 4, md: 1 }}>
                        <Widget>
                            <Project src={proj.src} name={proj.name} github={proj.github} />
                        </Widget>
                    </GridItem>
                );
            })}
        </Grid>
    );
}

export default Projects;
