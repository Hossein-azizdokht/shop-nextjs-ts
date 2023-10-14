
import Link from 'next/link'
import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <section className='py-[80px]'>
            <Container>
                <Row>
                    <Col md={4} className='pr-16'>
                        <h2 className='font-bold text-orange-600 text-[18px]'>Smile Shop</h2>
                        <p className='mt-2 text-gray-500'>I am trying to create some voice note system - that visualizes the wave - I am looking for a more filtered data look.

                            I want to create voice notes styled like this - I've tried 3 different visualizations - and maybe the closest is the wavesurfer.</p>
                    </Col>
                    <Col md={3} >
                    <h2 className='font-bold text-gray-700 text-[16px]'>Links</h2>
                    <ul className='mt-2 text-gray-500'>
                        <li><Link href="Amazon.com">Amazon</Link></li>
                        <li><Link href="DigiArt.com">DigiArt</Link></li>
                        <li><Link href="Sports.com">Sports wear</Link></li>
                        <li><Link href="Nike.com">Nike</Link></li>
                        <li><Link href="Adidass.com">Adidass</Link></li>
                    </ul>
                    </Col>
                    <Col md={3}>asdasd</Col>
                    <Col md={2}>asdasd</Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer