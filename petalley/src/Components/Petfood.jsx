import React from 'react'
import '../Style/Shopping.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Toy1 from '../Uploads/petf0.jpg'
import Toy2 from '../Uploads/petf1.webp'
import Toy3 from '../Uploads/petf2.webp'
import Toy4 from '../Uploads/petf3.webp'
import Toy5 from '../Uploads/petf4.webp'
import Toy6 from '../Uploads/petf5.webp'


function Shopping() {
    return (
        <div>
            <Container>
                <Row>
                    <Col className='sider'>
                        <div >
                            <h3 className='shop'>Shopping</h3>
                            <ul>
                                <h5>Categories</h5>
                                <li><i class="fa fa-caret-square-o-right"></i> Pet Food</li>
                                <li><i class="fa fa-caret-square-o-right"></i><a href='/Shopping'> Toys </a></li>
                                <li><i class="fa fa-caret-square-o-right"></i><a href='/Petacce'> Accessories </a></li>
                                <li><i class="fa fa-caret-square-o-right"></i><a href='/Petclothes'> Clothes</a></li>
                            </ul>

                            <br />

                            <ul>
                                <h5>Reselling</h5>
                                <li> <i class="fa fa-caret-square-o-right"></i><a href='/Petsellingform'> Toys </a></li>
                                <li> <i class="fa fa-caret-square-o-right"></i><a href='/Petsellingform'> Clothes </a></li>
                            </ul>


                        </div>
                    </Col>
                    <Col xs={10}>
                        <Row>
                            <Col>
                                <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="" src={Toy1}  id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>Price</Card.Title>

                                        <Button variant="" className='shop-btn'>Buy Now</Button>

                                        {/* <p className='shop-tags'>*Only Few Are Left</p> */}

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                            <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy2} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>$ 13</Card.Title>
                                        
                                        <Button variant="" className='shop-btn'>Buy Now</Button>

                                        {/* <p className='shop-tags'>*Only Few Are Left</p> */}

                                    </Card.Body>
                                </Card>
                            
                            </Col>
                            <Col>
                            <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy3} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>$ 13</Card.Title>
                                        
                                        <Button variant="" className='shop-btn'>Buy Now</Button>

                                        {/* <p className='shop-tags'>*Only Few Are Left</p> */}

                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>




                        <Row>
                            <Col>
                                <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy4} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>$ 13</Card.Title>

                                        <Button variant="" className='shop-btn'>Buy Now</Button>

                                        <p className='shop-tags'>*Only Few Are Left</p>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                            <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy5} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>$ 13</Card.Title>
                                        
                                        <Button variant="" className='shop-btn'>Buy Now</Button>

                                        <p className='shop-tags'>*Only Few Are Left</p>

                                    </Card.Body>
                                </Card>
                            
                            </Col>
                            <Col>
                            <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy6} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>$ 13</Card.Title>
                                        
                                        <Button variant="" className='shop-btn'>Buy Now</Button>

                                        <p className='shop-tags'>*Only Few Are Left</p>

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
