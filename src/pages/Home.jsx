import React from 'react'
import '../styles/home.css'

import {Container, Row, Col} from 'reactstrap';
import heroImg from '../../src/assets/images/hero-img01.jpg';
import heroImg02 from '../../src/assets/images/hero-img02.jpg';
import heroVideo from '../../src/assets/images/hero-video.mp4';
import worldImg from '../../src/assets/images/world.png';
import experienceImg from '../../src/assets/images/experience.png';

import Subtitle from '../../src/shared/Subtitle';
 
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return ( 
  <>
  {/*WWWWWWWWWWWW HERO SECTION START WWWWWWWWWWWWWWWWWWW*/  }
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='hero__content'>
              <div className='hero__subtitle d-flex align-items-center'>
              <Subtitle subtitle={'Know Before You Go'}/>
              <img src={worldImg} alt=''/>
              </div>
              <h1>
                Travelling opens the door to creating {' '}
                <span className='highlight'>memories</span>
              </h1>
              <p>
              Welcome to Travel World, where your journey begins! At Travel World, we believe that travel is more than just a destination; it's an experience that shapes you, enriches your life, and creates memories that last a lifetime. Our mission is to turn your travel dreams into reality by offering comprehensive tour booking services tailored to your unique interests and preferences.. 
              </p>
            </div>
          </Col>

          <Col lg='2'>
            <div className='hero__img-box'>
              <img src={heroImg} alt=''/>
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box mt-4'>
              <video src={heroVideo} alt='' controls/>
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box mt-5'>  
              <img src={heroImg02} alt=''/>
            </div>
          </Col>

          <SearchBar/>
        </Row>
      </Container>
    </section>
    {/*WWWWWWWWWWWW HERO SECTION END WWWWWWWWWWWWWWWWWWW*/  }
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className='services__subtitle'>What we serve</h5>
            <h2 className='services__title'>We offer our best services</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>

    {/*WWWWWWWWWWWW FEATURED TOUR SECTION START WWWWWWWWWWWWWWWWW */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={"Explore"}/>
            <h2 className='featured__tour-title'>Featured tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
    {/*WWWWWWWWWWWW FEATURED TOUR SECTION END WWWWWWWWWWWWWWWWW */}

    {/*WWWWWWWWWWWW EXPERIENCE SECTION START WWWWWWWWWWWWWWWWW */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
          <div className="experience__content">
              <Subtitle subtitle={'Experience'} />
              <h2>https://travel-world-backend.vercel.appence <br /> we will serve you</h2>
              <p>
              Travel World is a premier travel website dedicated to providing seamless and personalized travel experiences. With a passion for exploration and a commitment to excellence, we specialize in crafting bespoke tours that cater to all types of travelers, from solo adventurers and couples to families and groups.
                <br />
                Embark on your next adventure with Travel World. Visit our website to explore our destinations, browse our curated tours, and book your next trip. Whether you're planning a quick getaway or a month-long expedition, Travel World is your trusted partner in travel.
</p>
             <p><h1> Travel World – Where Your Journey Begins.</h1>
              </p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successfull Trip</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Years experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/*WWWWWWWWWWWW EXPERIENCE SECTION END WWWWWWWWWWWWWWWWW */}

    {/*WWWWWWWWWWWW GALLERY SECTION START WWWWWWWWWWWWWWWWWWW*/  }
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'}/>
            <h2 className='gallery__title'>Visit our customers tour gallery</h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery/>
          </Col>
        </Row>
      </Container>
    </section>
    {/*WWWWWWWWWWWW GALLERY SECTION END   WWWWWWWWWWWWWWWWWWW*/  }

      {/*WWWWWWWWWWWW TESTIMONIAL SECTION START WWWWWWWWWWWWWWWWWWW*/  }
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'}/>
              <h2 className='testimonial__title'>What our fans say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section>
      {/*WWWWWWWWWWWW TESTIMONIAL SECTION END WWWWWWWWWWWWWWWWWWW*/  }
      <Newsletter/>
  </>
  );
};

export default Home
