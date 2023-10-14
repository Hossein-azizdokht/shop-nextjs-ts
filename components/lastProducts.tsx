
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import { Row, Col, Container } from "react-bootstrap";
// import Data from '../../_mock/categories'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import ProductCard from './productCard_item';
import "swiper/css";

type propsType = {
    sectionTitle: string
}

//---------------------------------------------

const LastProducts = ({ sectionTitle }: propsType) => {

    //States
    const [lastProductsData, setLastProductsData] = useState([])//store data state
    const [isLoading, setIsLoading] = useState(true)//loading
    //-------------------------------------

    //Get data

    async function getData() {//get store data from server
        const response = await fetch(`https://fakestoreapi.com/products?limit=9`);
        const data = await response.json();
        console.log(data);
        setLastProductsData(data);
        setIsLoading(false)

    }
    //-------------------------------------

    useEffect(() => {
        getData()
    }, []);


    return (
        <section className='lastProducts section hasBg withBackgroundImage position-relative' style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/golden-background-with-palm-tree_53876-108441.jpg?w=2000)' }}>
            <Container>
                <h4 className='section-title mt-5'>
                    <span>{sectionTitle}</span>
                </h4>
                <motion.div
                    className="card-container"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <Row>
                        <Col lg={12}>
                            <Swiper
                                spaceBetween={15}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    1000: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                    1200: {
                                        slidesPerView: 5,
                                        spaceBetween: 15,
                                    },
                                }}
                                navigation={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper pb-5 pt-5"
                                style={{ marginTop: '-45px' }}
                            >
                                {lastProductsData?.map((item: any, index) => (
                                    <SwiperSlide key={item.id}>
                                        <ProductCard key={index} {...item} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Col>
                    </Row>
                </motion.div>
            </Container>
            <div className='wave-decoration top'>
                <svg width="2000" height="128" x="2000" y="128" viewBox="0 0 2000 128">
                    <path opacity="0.2" fill="#fff" d="M1999.5 22.2c-346-.6-524.6-4.7-878.8 4.4-286.6 7.4-442.3 54-608.1 51.2C307.3 74.3 202.5 5-.5 28.1v100.4l2000-.5V22.2z"></path>
                    <path opacity="0.2" fill="#fff" d="M-.3 46.1C251 15.3 440.9 84.7 499.6 98.4c54.7 12.8 122.5 12 186.7-5.3 154.2-41.6 315.5-70.9 475.2-67.5s324.6 22.4 484.3 19.7c133-2.3 302.8 1.7 352.8 3.7v80H-.5l.2-82.9z"></path>
                    <path opacity="0.4" fill="#fff" d="M2000 41.2c-139.8-12.7-219.9-10.8-360.2-11.2-285.5-.8-487.5 18-736.2 51.1-256.6 34.3-356.9 35.3-704.4-27.5C140.3 43 59.5 45.6-.5 52.3V130h2000l.5-88.8z"></path>
                    <path fill="#fff" d="M1634.6 50.1c-193.8 11.9-366.9 24.9-569 50-110.2 13.7-221.2 21.5-332.3 19.6-187-3.3-344.5-29.7-560.9-69.8C50.2 27.3-.4 45.9-.4 45.9V130h1998V46c-.1 0-166.6-7.9-363 4.1z"></path></svg>
            </div>

        </section>
    )
}

export default LastProducts;