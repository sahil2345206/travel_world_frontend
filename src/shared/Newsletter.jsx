

import React from 'react'
import './newsletter.css'
import {Container, Row, Col} from 'reactstrap'
import maleTourist from './../assets/images/male-tourist.png'


const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Subscribe to get useful traveiling information</h2>

                        <div className="newsletter__input">
                            <input type="email" placeholder="Enter your email" />
                            <button className='btn newsletter__btn'>Subscribe</button>
                        </div>

                        <p>
                            Explore a diverse range of destinations across the globe. From the bustling streets of Tokyo and the romantic canals of Venice to the pristine beaches of the Maldives and the majestic safaris of Africa, we cover it all. We design custom itineraries that suit your travel style, whether you're looking for cultural immersion, adventure, relaxation, or a mix of everything.
                        </p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
} 

export default Newsletter
