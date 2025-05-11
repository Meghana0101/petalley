import React from 'react'
import '../Style/Home.css'
import Footer from './Footer'

 
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Img1 from '../Uploads/caro0.jpg'
import Img2 from '../Uploads/Img0.jpg'
import Img3 from '../Uploads/img1.jpg'
import Img4 from '../Uploads/img2.jpg'

import Card1 from '../Uploads/caro1.jpg'
import Card2 from '../Uploads/caro2.avif'
import Card3 from '../Uploads/doctor.jpg'


import Pet1 from '../Uploads/pet1.jpg'
import Pet2 from '../Uploads/pet2.avif'
import Pet3 from '../Uploads/pet3.jpg'
import Pet4 from '../Uploads/pet4.jpg'
import Pet5 from '../Uploads/pet5.webp'
import Pet6 from '../Uploads/pet6.jpg'
import Pet7 from '../Uploads/pet7.jpg'
import Pet8 from '../Uploads/pet8.webp'


import Toy1 from '../Uploads/toy1.jpg'
import Toy2 from '../Uploads/toy2.jpg'
import Toy3 from '../Uploads/toy3.webp'
import Toy4 from '../Uploads/toy4.webp'
import Toy5 from '../Uploads/toy5.webp'
import Toy6 from '../Uploads/toy6.webp'








function Home() {
  return (
    
    <div>

         <div className='carasol'>
         <Carousel>
      {/* <Carousel.Item interval={1000}>

        <img className='imp-caro' src={Img1} />
      
      </Carousel.Item> */}
      <Carousel.Item interval={500}>

        <img className='imp-caro' src={Img2}/>
       
      </Carousel.Item>
      <Carousel.Item>

        <img className='imp-caro' src={Img3}/>
       
      </Carousel.Item>

      <Carousel.Item interval={1500}>
      
        <img className='imp-caro' src={Img4}/>
      
      </Carousel.Item>
    </Carousel>
         </div>
    

    {/* Cards...  */}
    <div>
        <h2> Our Specialities </h2>

    </div>


    <Container>
      <Row>
        <Col>
        <Card style={{ width: '18rem'}} className='shop-card'>
      <Card.Img variant="top" src={Card1} />
      <Card.Body>
        <Card.Title>Pet Sitters</Card.Title>
        <Card.Text>
        Meet our dedicated petsitters, committed to providing exceptional care tailored to your pet's needs. From dog walking to grooming, our skilled professionals ensure your furry friends receive reliable and loving attention."
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }} className='shop-card'>
      <Card.Img variant="top" src={Card2} />
      <Card.Body>
        <Card.Title>Pet Parks</Card.Title>
        <Card.Text>
        "Discover our pet parks designed with your furry friends in mind. Whether they enjoy running, playing, or simply exploring, our parks provide a safe and enjoyable environment for all pets to thrive....."
        </Card.Text>
        
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }} className='shop-card'>
      <Card.Img variant="top" src={Card3} style={{ height: '170px'}} />
      <Card.Body>
        <Card.Title>Services</Card.Title>
        <Card.Text>
        "Explore our pet services tailored to meet your needs. From dog walking to grooming, petsitters to shopping ,pharmacy to clinics , our skilled professionals are committed to providing reliable and loving care for your pets......"
        </Card.Text>
        
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>  


    <div>
        <h2>   More to Know        </h2>
    </div>

    <Container>
      <Row>
        <Col><img className='pet-p' src={Pet8} /></Col>
        <Col><img className='pet-p' src={Pet2} /></Col>
        <Col><img className='pet-p' src={Pet5} /></Col>
        <Col><img className='pet-p' src={Pet4} /></Col>

      </Row>
    </Container>

    <Container>
      <Row>
        <Col><img className='pet-p' src={Pet5} /></Col>
        <Col><img className='pet-p' src={Pet6} /></Col>
        <Col><img className='pet-p' src={Pet7} /></Col>
        <Col><img className='pet-p' src={Pet8} /></Col>

      </Row>
    </Container>

<div>
  <h2>  Pet Toys </h2>
</div>

    <div >
    <Container>
      <Row className='toy'>
        <Col><img className='toy-img' src={Toy1} style={{width:'300px'}} /></Col>
        <Col><img className='toy-img' src={Toy2} style={{width:'300px'}} /></Col>
        <Col><img className='toy-img' src={Toy3} style={{width:'300px'}} /></Col>
      </Row>
    </Container>

    <Container>
      <Row className='toys'>
        <Col><img className='toy-img' src={Toy4} style={{width:'300px'}} /></Col>
        <Col><img className='toy-img' src={Toy5} style={{width:'300px'}} /></Col>
        <Col><img className='toy-img' src={Toy6} style={{width:'300px'}} /></Col>
      </Row>
    </Container>




    </div>

        <Footer/>
    </div>
  )
}

export default Home
