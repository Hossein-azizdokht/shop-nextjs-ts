
import React, { useState, useEffect } from 'react'
import { motion} from "framer-motion";
import { Row } from "react-bootstrap";
import Data from '../_mock/categories'
import SingleCategoryItem from './singleCategoryItem';

//TYPES
interface categoryDetails {
    id: number;
    name: string;
    cover: string;
    url: string;
};

//---------------------------------------------

const CategoryItems = () => {

    //States
    const [categoryData, setCategoryData] = useState<categoryDetails[]>([]);
    //-------------------------------------

    //Motions
    // const { scrollYProgress } = useScroll();
    // const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
    // const cardVariants: Variants = {
    //     offscreen: {
    //         y: 100,
    //         opacity: 0
    //     },
    //     onscreen: {
    //         opacity: 1,
    //         y: 50,
    //         transition: {
    //             type: "spring",
    //             bounce: 0.4,
    //             duration: 0.8,
    //             delay: 0.5
    //         }
    //     }
    // };
    //-------------------------------------

    useEffect(() => {
        setCategoryData(Data)
        console.log(categoryData);
    }, [categoryData]);


    return (
        <section>
            <motion.div
                className="card-container"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
            >
                <Row>
                    {categoryData?.map(item => (
                        <SingleCategoryItem key={item.id} data={item} />
                    ))}
                </Row>
            </motion.div>
        </section>
    )
}

export default CategoryItems;