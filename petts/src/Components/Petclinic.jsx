import React from 'react'
import '../Style/Services.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Toy1 from '../Uploads/petd1.webp'
import Toy2 from '../Uploads/petd2.png'
import Toy3 from '../Uploads/petd3.jpg'
import Toy4 from '../Uploads/petd44.png'
import Toy5 from '../Uploads/petd5.webp'
import Toy6 from '../Uploads/petd6.avif'


function Shopping() {
    return (
        <div>
            <Container>
                <Row>
                    <Col className='sider'>
                        <div >
                            <h3 className='shop'>Services</h3>
                            <ul>
                                <h5>Categories</h5>
                                <li><i class="fa fa-caret-square-o-right"></i><a href='/Petsittersform'> Find a Pet Sitter</a></li>
                                <li><i class="fa fa-caret-square-o-right"></i> Clinic</li>
                                <li><i class="fa fa-caret-square-o-right"></i><a href='/Petpharma'> Pharmacy</a></li>
                                <li><i class="fa fa-caret-square-o-right"></i><a href='/Services'> Grooming </a></li>
                                <li><i class="fa fa-caret-square-o-right"></i><a href='/Beasitter'> Be a Sitter </a></li>
                            </ul>

                            <br />

                            {/* <ul>
                                <h5>Reselling</h5>
                                <li> <i class="fa fa-caret-square-o-right"></i> Toys</li>
                                <li> <i class="fa fa-caret-square-o-right"></i> Clothes</li>
                            </ul> */}


                        </div>
                    </Col>
                    <Col xs={10}>
                        <Row>
                            <Col>
                                <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="" src={Toy1} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>Paw Space</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i> <a href='https://pawspace.in/'>Welcome To PawSpace Doorstep Pet Care Services.
                                        Now in Hyderabad 
                                        at your service....</a>
                                            
                                        </Card.Text>

                                        {/* <Button variant="" className='shop-btn'>Buy Now</Button> */}

                                        {/* <p className='shop-tag'><i>"Dogs Parks to bring your dogs,Socialize with other pets and dogs"</i></p> */}

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy2} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>Animal Care</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i> <a href='https://animalcareclinic.co.in/'>Quality without compromise. Treatment and care without constraints on limits. </a>

                                        </Card.Text>
                                        {/* <Button variant="" className='shop-btn'>Buy Now</Button> */}

                                        {/* <p className='shop-tag'><i>"Dogs Parks to bring your dogs,Socialize with other pets and dogs"</i></p> */}

                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col>
                                <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy3} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>Doggo 360</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i>  <a href='https://www.doctor360.in/'>Experience hassle-free healthcare with our  platform designed to make your health journey simpler.</a>

                                        </Card.Text>

                                        {/* <Button variant="" className='shop-btn'>Buy Now</Button> */}

                                        {/* <p className='shop-tag'><i>"Dogs Parks to bring your dogs,Socialize with other pets and dogs"</i></p> */}

                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>




                        <Row>
                            <Col>
                                <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy4} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'> Pet Clinic</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i> <a href='https://www.sevenoakspet.in/'>Multi-Speciality
Pet Hospital! Global Veterinary Excellence Now In Hyderabad!</a>
                                        </Card.Text>

                                        {/* <Button variant="" className='shop-btn'>Buy Now</Button> */}

                                        {/* <p className='shop-tag'><i>"Dogs Parks to bring your dogs,Socialize with other pets and dogs"</i></p> */}

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy5} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>Vetic</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i>  <a href='https://vetic.in/'>Pet Healthcare with Compassion & Innovation Looking for the best veterinary hospital near you? </a>

                                        </Card.Text>

                                        {/* <Button variant="" className='shop-btn'>Buy Now</Button> */}

                                        {/* <p className='shop-tag'><i>"Dogs Parks to bring your dogs,Socialize with other pets and dogs"</i></p> */}

                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col>
                                <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy6} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>PetFam</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i>  <a href='https://www.sevenoakspet.in/'>Global Veterinary Center of Excellence
                                        We are a haven where your pet's well-being comes first. </a>

                                        </Card.Text>

                                        {/* <Button variant="" className='shop-btn'>Buy Now</Button> */}

                                        {/* <p className='shop-tag'><i>"Dogs Parks to bring your dogs,Socialize with other pets and dogs"</i></p> */}

                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>



                    </Col>



                </Row>
            </Container>
        </div>
    )
}

export default Shopping
