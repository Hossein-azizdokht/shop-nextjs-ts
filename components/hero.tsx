import { useEffect } from "react";

import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion, Variants } from "framer-motion";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import required modules


//-- get average color of image
// function getAverageRGB(imgEl: any) {
//     var blockSize = 5, // only visit every 5 pixels
//         defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
//         canvas = document.createElement('canvas'),
//         context = canvas.getContext && canvas.getContext('2d'),
//         data, width, height,
//         i = -4,
//         length,
//         rgb = { r: 0, g: 0, b: 0 },
//         count = 0;

//     if (!context) {
//         return defaultRGB;
//     }

//     height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
//     width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

//     context.drawImage(imgEl, 0, 0);

//     try {
//         data = context.getImageData(0, 0, width, height);
//     } catch (e) {
//         /* security error, img on diff domain */alert('x');
//         return defaultRGB;
//     }

//     length = data.data.length;

//     while ((i += blockSize * 4) < length) {
//         ++count;
//         rgb.r += data.data[i];
//         rgb.g += data.data[i + 1];
//         rgb.b += data.data[i + 2];
//     }

//     // ~~ used to floor values
//     rgb.r = ~~(rgb.r / count);
//     rgb.g = ~~(rgb.g / count);
//     rgb.b = ~~(rgb.b / count);

//     return rgb;

// }


export function Hero() {

    useEffect(() => {

        //-- get average color of image
        // var rgb = getAverageRGB(document.getElementById('i'));
        // document.body.style.backgroundColor = 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';

    }, [])




    return (
        <Container>
            <Row className="mt-5">
                <Col lg={4}>
                    <div className="slide-item small mb-2">
                        {/* <img id="i" src='./img/logo.svg' width='150px' /> */}
                        <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/99c6ae890024843a6887bc5e1208ac628fc2258c_1675252848.jpg?x-oss-process=image/quality,q_95" />
                    </div>
                    <div className="slide-item small mb-2">
                        <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/61940b9759dd3fd7fc26f58c30e7fcc3975e83dd_1675589955.jpg?x-oss-process=image/quality,q_95" />
                    </div>
                </Col>
                <Col lg={8}>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        modules={[Autoplay, Pagination, Navigation]}
                    >
                        <SwiperSlide>
                            <div className="slide-item big">
                                <div className="text">
                                    <div>
                                        <h2 className="light fadeInToRight">NEW 2023</h2>
                                        <h1 className="bold fadeInToRight">COLLECTION</h1>
                                    </div>
                                    <h6 className="fadeInToRight">Lorem, ipsum is a simple paragraph that designers ...</h6>
                                </div>
                                <img src="img/slide/1.jpg" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-item big">
                                <div className="text">
                                    <div>
                                        <h2 className="light fadeInToRight">FOR WOMEN</h2>
                                        <h1 className="bold fadeInToRight">Fashion Style</h1>
                                    </div>
                                    <h6 className="fadeInToRight">Lorem, ipsum is a simple paragraph that designers ...</h6>
                                </div>
                                <img src="img/slide/2.jpg" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Col>
            </Row>
        </Container>
    )
}