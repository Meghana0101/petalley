import React from 'react'
import '../Style/Petcafe.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Toy1 from '../Uploads/petcf0.png'
import Toy2 from '../Uploads/petcf5.webp'
import Toy3 from '../Uploads/petcf01.webp'
import Toy4 from '../Uploads/petcf02.webp'
import Toy5 from '../Uploads/petcf03.jpg'
import Toy6 from '../Uploads/petcf4.jpg'


function Shopping() {
    return (
        <div>
            <Container>
                <Row>
                    <Col className='sider'>
                        <div >
                            <h3 className='shop'>Pet Fun</h3>
                            <ul>
                                <h5>Categories</h5>
                                <li><i class="fa fa-caret-square-o-right"></i><a href='/Petfun'> Pet Parks </a></li>
                                <li><i class="fa fa-caret-square-o-right"></i> Pet Cafe</li>
                                {/* <li><i class="fa fa-caret-square-o-right"></i> Accessories</li>
                                <li><i class="fa fa-caret-square-o-right"></i> Clothes</li> */}
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
                                        <Card.Title className='card-price'>Pet Cafe</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i> P V N Rao Marg, Beside <br/> Jalavihar Water Park
                                            <br/> Opens at 6:30 am Mon
                                        </Card.Text>

                                        {/* <Button variant="" className='shop-btn'>Buy Now</Button> */}

                                        <p className='shop-tag'><i>"Dogs Parks to bring your dogs,Socialize with other pets and dogs"</i></p>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy2} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>Pet Cafe</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i> P V N Rao Marg, Beside <br/> Jalavihar Water Park
                                            <br/> Opens at 6:30 am Mon
                                        </Card.Text>
                                        {/* <Button variant="" className='shop-btn'>Buy Now</Button> */}

                                        <p className='shop-tag'><i>"Dogs Parks to bring your dogs,Socialize with other pets and dogs"</i></p>

                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col>
                                <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy3} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>Pet Cafe</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i> P V N Rao Marg, Beside <br/> Jalavihar Water Park
                                            <br/> Opens at 6:30 am Mon
                                        </Card.Text>

                                        {/* <Button variant="" className='shop-btn'>Buy Now</Button> */}

                                        <p className='shop-tag'><i>"Dogs Parks to bring your dogs,Socialize with other pets and dogs"</i></p>

                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>




                        <Row>
                            <Col>
                                <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy4} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>Pet Cafe</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i> P V N Rao Marg, Beside <br/> Jalavihar Water Park
                                            <br/> Opens at 6:30 am Mon
                                        </Card.Text>

                                        {/* <Button variant="" className='shop-btn'>Buy Now</Button> */}

                                        <p className='shop-tag'><i>"Dogs Parks to bring your dogs,Socialize with other pets and dogs"</i></p>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy5} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>Pet Cafe</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i> P V N Rao Marg, Beside <br/> Jalavihar Water Park
                                            <br/> Opens at 6:30 am Mon
                                        </Card.Text>

                                        {/* <Button variant="" className='shop-btn'>Buy Now</Button> */}

                                        <p className='shop-tag'><i>"Dogs Parks to bring your dogs,Socialize with other pets and dogs"</i></p>

                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col>
                                <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy6} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>Pet Cafe</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i> P V N Rao Marg, Beside <br/> Jalavihar Water Park
                                            <br/> Opens at 6:30 am Mon
                                        </Card.Text>

                                        {/* <Button variant="" className='shop-btn'>Buy Now</Button> */}

                                        <p className='shop-tag'><i>"Dogs Parks to bring your dogs,Socialize with other pets and dogs"</i></p>

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
