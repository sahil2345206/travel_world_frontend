

import React from 'react'
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {

    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,
        
        responsive: [
            {
                breakpoint:992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                },
            },
            {
                breakpoint:576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }

  return (
  <Slider {...settings}>
    <div className='testimonial py-4 px-3'>
        <p>
        "I used Travel World for a business trip to Singapore, and they did not disappoint. The process was smooth, and they found me a great hotel close to my conference venue. I also appreciated the local dining recommendations. There was a small mix-up with my airport transfer, but it was resolved quickly. Overall, a great experience."
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>John Doe</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>
        "Booking with Travel World was the best decision for our anniversary trip to Paris. The hotel they recommended was charming and centrally located, and the exclusive deals they offered saved us a lot of money. The entire trip was seamless and enjoyable. Thank you, Travel World!"
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Lia Franklin</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>
        "Travel World made our honeymoon to Bali absolutely perfect. The itinerary was tailored to our preferences, and the accommodations were luxurious and romantic. Every detail was taken care of, allowing us to fully relax and enjoy our time together. We can't wait to book our next adventure with them!"
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>John Doe</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>
        "I've traveled with many tour companies, but Travel World stands out for their exceptional service and attention to detail. From the moment I booked my trip to Japan, I felt supported and well-informed. The guided tours were insightful, and the local recommendations were spot on. Highly recommended!"
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Lia Franklin</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
  </Slider>
);
};

export default Testimonials
