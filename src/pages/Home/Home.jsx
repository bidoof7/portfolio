import { useEffect, useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Bio from '~/components/Bio';
import Contact from '~/components/Contact';
import Me from '~/components/Me';
import Work from '~/components/Work';
import Hobby from '~/components/Hobby';
// import Article from '~/components/main/article'
//
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

      return (
            <Grid position="relative" gap="8">
                  {/* SIDEBAR */}
                  <GridItem data-aos="fade-up" data-aos-anchor-placement="top-center">
                        <Me />
                  </GridItem>
                  <GridItem data-aos={isMobile ? 'fade-up' : 'fade-up'}>
                        <Work />
                  </GridItem>
                  {/* BIO */}
                  <GridItem data-aos={isMobile ? 'fade-up' : 'fade-up'}>
                        <Bio />
                  </GridItem>
                  <GridItem data-aos={isMobile ? 'fade-up' : 'fade-up'}>
                        <Hobby />
                  </GridItem>
                  <GridItem data-aos={isMobile ? 'fade-up' : 'fade-up'}>
                        <Contact />
                  </GridItem>
            </Grid>
      );
};

export default Home;
