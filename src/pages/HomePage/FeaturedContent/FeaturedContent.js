import React from 'react';
import { Container } from 'react-bootstrap';

const FeaturedContent = () => {
    return (
        <div className='container' style={{marginTop:'100px'}}>
            <div>
            <h3 className="my-5"><b>Featured</b><span style={{color:'goldenrod' , fontWeight:'bold'}}> Content</span></h3>
            </div>
            <Container>
          <div className="card mb-3 p-3">
            <div className="row g-0">
              <div className="col-md-6 ">
              
                <iframe 
                className="rounded w-100" 
                height="350px"
                src="https://www.youtube.com/embed/RdGVz104b3E" title="YouTube video player" 
                 allow="accelerometer;autoplay; clipboard-write;encrypted-media;gyroscope; picture-in-picture" 
                  allowFullScreen></iframe>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <p className="card-title fw-bold ">
                  Bugatti Chiron: World Premiere
                  </p>
                  <p className="card-text text-muted">
                  At the 2016 Geneva International Motor Show Bugatti unveiled the Chiron, the most powerful, fastest, most luxurious and most exclusive production super sports car in the world. The Chiron is the latest generation of the ultimate super sports car and is a completely new development. The sports car manufacturer from Molsheim, with its long tradition, has taken the unique features of a modern Bugatti to a  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
            
        </div>
    );
};

export default FeaturedContent;