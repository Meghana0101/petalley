import React from 'react'
import '../Style/Services.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Toy1 from '../Uploads/dt1.jpg'
import Toy2 from '../Uploads/Dt2.webp'
import Toy3 from '../Uploads/Dt3.jpg'
import Toy4 from '../Uploads/Dt4.jpg'
import Toy5 from '../Uploads/Dt5.jpg'
import Toy6 from '../Uploads/dctr1.webp'


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
                                <li><i class="fa fa-caret-square-o-right"></i><a href='/Petsittersform'> Pet Sitters</a></li>
                                <li><i class="fa fa-caret-square-o-right"></i><a href='/Petclinic'> Clinic</a></li>
                                <li><i class="fa fa-caret-square-o-right"></i><a href='/Petpharma'> Pharmacy</a></li>
                                <li><i class="fa fa-caret-square-o-right"></i> Grooming</li>
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
                                        <Card.Title className='card-price'>Grooming</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i>  28/4,4th Phase Rd, near Rto Office, LIG , Housing board colony, kukatpally, Hyderabad,Telangana 500072
                                            
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
                                        <Card.Title className='card-price'>Grooming</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i>  28/4,4th Phase Rd, near Rto Office, LIG , Housing board colony, kukatpally, Hyderabad,Telangana 500072

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
                                        <Card.Title className='card-price'>Grooming</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i>  28/4,4th Phase Rd, near Rto Office, LIG , Housing board colony, kukatpally, Hyderabad,Telangana 500072

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
                                        <Card.Title className='card-price'>Grooming</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i>  28/4,4th Phase Rd, near Rto Office, LIG , Housing board colony, kukatpally, Hyderabad,Telangana 500072

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
                                        <Card.Title className='card-price'>Grooming</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i>  28/4,4th Phase Rd, near Rto Office, LIG , Housing board colony, kukatpally, Hyderabad,Telangana 500072

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
                                        <Card.Title className='card-price'>Grooming</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i>  28/4,4th Phase Rd, near Rto Office, LIG , Housing board colony, kukatpally, Hyderabad,Telangana 500072

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
