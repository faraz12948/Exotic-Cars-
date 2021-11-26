import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../assests/images/banner1.jpg'
import banner2 from '../../../assests/images/banner2.jpg'
import banner3 from '../../../assests/images/banner3.jpg'

const Banner = () => {
    return (
        <div>
            
             
            <Carousel fade className="banner">
                
                <Carousel.Item>
                  <img
                    style={{opacity:'0.9'}}
                    className="d-block w-100"
                    src={banner3}
                    alt="Second slide"
                  />

                 <Carousel.Caption style={{fontFamily:'Cursive', fontWeight:'bold', top: '50%',
                 transform: 'translateY(-50%)'}}>
                   
                   <h1 >BestPerformance Cars</h1>
                    <p>Cresting in to the hundred-grand range of a brand</p>
                   
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                  />

                 <Carousel.Caption style={{fontFamily:'Cursive', fontWeight:'bold',top: '50%',
                 transform: 'translateY(-50%)'}}>
                    <h1 >BestPerformance Cars</h1>
                    <p>Cresting in to the hundred-grand range of a brand</p>
                  </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                  <img
                  
                    className="d-block w-100"
                    src={banner1}
                    alt="Third slide"
                  />

                <Carousel.Caption style={{fontFamily:'Cursive', fontWeight:'bold',top: '50%',
                 transform: 'translateY(-50%)'}}>
                    <h1>Nature beifits you</h1>
                    <p>Experience everything nature has to offer</p>
                  </Carousel.Caption>
                </Carousel.Item> */}
</              Carousel>
              
            
        </div>
    );
};

export default Banner;