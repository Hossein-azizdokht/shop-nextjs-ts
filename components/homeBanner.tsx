import Link from 'next/link'
import React from 'react'

const HomeBanner = () => {
    return (
        <div className='container h-0 overflow-visible position-relative banner fullWidth'>
            <Link href="/" className='banner-cnt' style={{background:'url(https://marketplace.canva.com/EAENvSSjKSw/1/0/1600w/canva-white-and-green-resort-and-spa-business-linkedin-banner--fhZbs91O1s.jpg)' }}>
                
                <h3>This is a simple caption for ads</h3>
                <p className='m-0'>
                    This is a simple caption for ads
                </p>
            </Link>
        </div>
    )
}

export default HomeBanner