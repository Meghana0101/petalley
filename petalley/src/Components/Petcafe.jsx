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
                                        <Card.Title className='card-price'>Woofs to Waffels</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i> <a href ='https://www.whatshot.in/hyderabad/from-woofs-to-waffles-hyderabads-finest-pet-friendly-cafes-c-43652'>From Woofs to Waffles: Hyderabad's Finest Pet-friendly Cafes</a>
                                        </Card.Text>

                                        {/* <Button variant="" className='shop-btn'>Buy Now</Button> */}

                                        

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy2} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>Iron Hill</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i><a href='https://www.siasat.com/6-hand-picked-pet-friendly-cafes-in-hyderabad-2434834/'>From Ironhill to Heart Cup, Hyderabad has a plethora of options if you are looking out for a pet-friendly</a>
                                        
                                        </Card.Text>
                                        {/* <Button variant="" className='shop-btn'>Buy Now</Button> */}

                                       

                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col>
                                <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy3} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>Petto cafe</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i><a href='https://lbb.in/hyderabad/pet-friendly-cafes-hyderabad/'>Your Pets Will Have The Best day Out At These Pet-Friendly Cafes In Hyderabad opens at 10 am mon</a>
                                        </Card.Text>

                                        {/* <Button variant="" className='shop-btn'>Buy Now</Button> */}

                                       

                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>




                        <Row>
                            <Col>
                                <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy4} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>Paw Fea</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i> <a href='https://www.siasat.com/6-hand-picked-pet-friendly-cafes-in-hyderabad-2434834/'>Who wouldn’t like to have food with a view of a waterfall? </a>
                                        </Card.Text>

                                        {/* <Button variant="" className='shop-btn'>Buy Now</Button> */}

                                       

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy5} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>Humming Bird</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i> <a href='https://www.siasat.com/6-hand-picked-pet-friendly-cafes-in-hyderabad-2434834/'>his cafe is very known for its variety of coffee, continental and Italian.</a>
                                        </Card.Text>

                                        {/* <Button variant="" className='shop-btn'>Buy Now</Button> */}

                                       

                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col>
                                <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy6} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>E’woke</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i><a href='https://www.siasat.com/6-hand-picked-pet-friendly-cafes-in-hyderabad-2434834/'>This cafe is 100% vegan and is one of the best places to hangout for the pet parents.</a>
                                        </Card.Text>

                                        {/* <Button variant="" className='shop-btn'>Buy Now</Button> */}

                                       

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
