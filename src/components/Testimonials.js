import React, { useState } from 'react'
import { Carousel,Container } from 'react-bootstrap'
import Img1 from '../Images/img1.jpg';

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Container>
            <h1>What People Say</h1><br />
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item  style={{'height':"300px"}}>
                    <img className="d-block w-100"
                        src={Img1}
                        alt="First slide"//  width="10px" heigh="10px"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{'height':"300px"}}>
                    <img
                        className="d-block w-100"
                        src={Img1}
                        alt="Second slide"// width="10px" heigh="10px"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{'height':"300px"}}>
                    <img
                        className="d-block w-100"
                        src={Img1}
                        alt="Third slide" // width="10px" heigh="10px"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}