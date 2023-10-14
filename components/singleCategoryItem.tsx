

import { motion,Variants } from "framer-motion";
import Link from "next/link";

interface Props {
    data: {
        id: number,
        name: string,
        cover: string,
        url: string
    }
}
//---------------------------------------------

const SingleCategoryItem = ({ data }: Props) => {


    const cardVariants: Variants = {
        offscreen: {
            y: 100,
            opacity: 0,
            scale:0
        },
        onscreen: {
            opacity: 1,
            scale:1,
            y: 0,
            transition: {
                duration: 0.5,
            }
        }
    };

    return (

        <motion.div className="col-md-2 col-6" variants={cardVariants}>
            <Link href='/store'>
                <div className='category-item' title={data.name}>
                    <img src={`${data.cover}`} alt={data.name} style={{ backgroundClip: 'content-box' }} />
                    <div>{data.name}</div>
                </div>
            </Link>
        </motion.div>

    )
}

export default SingleCategoryItem;