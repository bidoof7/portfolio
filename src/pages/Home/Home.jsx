import { useEffect, useState } from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Bio from '~/components/Bio';
import Contact from '~/components/Contact';
import Sidebar from '~/components/Sidebar';
import Widget from '~/components/Widget';
import Tech from '~/components/Tech';

// import Article from '~/components/main/article'
const Home = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Bạn có thể thay đổi giá trị 768 tùy theo nhu cầu
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        AOS.init({
            duration: 1000, // Thời gian hiệu ứng
            delay: 100, // Độ trễ giữa các phần tử
            once: false, // Chỉ chạy hiệu ứng một lần
            easing: 'ease-out', // Sử dụng easing đơn giản hơn
        });

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const myJourney = {
        heading: 'On my journey in life',
        content:
            'I was graduated at FPT school major Bussiness Developer in 2020. To now I had been working at KIDO Corp for 2 years with role Full-Stack Developer',
    };

    return (
        <Grid templateColumns="repeat(4, 1fr)" gap={4} position="relative">
            {/* SIDEBAR */}
            <GridItem
                data-aos="fade-down"
                data-aos-anchor-placement="top-center"
                colSpan={4}
                rowSpan={1}
            >
                <Widget>
                    <Sidebar />
                </Widget>
            </GridItem>
            {/* TECHS */}
            <GridItem data-aos={isMobile ? 'fade-up' : 'fade-right'} colSpan={{ base: 4, md: 1 }} rowSpan={1}>
                <Widget heading="Tech 💻">
                    <Tech />
                </Widget>
            </GridItem>
            {/* BIO */}
            <GridItem data-aos={isMobile ? 'fade-up' : 'fade-left'} colSpan={{ base: 4, md: 3 }} rowSpan={1}>
                <Widget heading="Bio 🧍‍♂️">
                    <Bio />
                </Widget>
            </GridItem>
            {/* Journey */}
            <GridItem data-aos={isMobile ? 'fade-up' : 'fade-right'} colSpan={{ base: 4, md: 2 }} rowSpan={1}>
                <Widget className="journey" heading={myJourney.heading}>
                    <Text>{myJourney.content}</Text>
                </Widget>
            </GridItem>
            <GridItem data-aos="fade-up" colSpan={{ base: 4, md: 1 }} rowSpan={1}>
                <Widget heading="I ❤️">
                    <Text>Games, car, travel, technologies, hangout</Text>
                </Widget>
            </GridItem>
            <GridItem data-aos={isMobile ? 'fade-up' : 'fade-left'} colSpan={{ base: 4, md: 1 }} rowSpan={1}>
                <Widget heading="Contact me 🔭">
                    <Contact />
                </Widget>
            </GridItem>
        </Grid>
    );
};

export default Home;
