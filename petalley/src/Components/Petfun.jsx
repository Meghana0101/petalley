import React from 'react'
import '../Style/Petfun.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Toy1 from '../Uploads/fun1.jpg'
import Toy2 from '../Uploads/fun2.webp'
import Toy3 from '../Uploads/fun3.webp'
import Toy4 from '../Uploads/fun4.jpg'
import Toy5 from '../Uploads/fun5.jpg'
import Toy6 from '../Uploads/fun6.webp'




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
                                <li><i class="fa fa-caret-square-o-right"></i> Pet Parks</li>
                                <li><i class="fa fa-caret-square-o-right" ></i> <a href="/Petcafe"> Pet Cafe</a></li>
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
                                        <Card.Title className='card-price'>Pet Park</Card.Title>

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
                                        <Card.Title className='card-price'>Pet park</Card.Title>

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
                                        <Card.Title className='card-price'>Dogs Park</Card.Title>

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
                                        <Card.Title className='card-price'>Dogs park</Card.Title>

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
                                        <Card.Title className='card-price'>pet park</Card.Title>

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
                                        <Card.Title className='card-price'>pet Park</Card.Title>

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
