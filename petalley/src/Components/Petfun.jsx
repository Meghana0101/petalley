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
                                        <Card.Title className='card-price'>HMC Dog</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i> <a href='https://www.bringfido.com/attraction/16977'>HMC Dog Park is the first exclusive dog park in Hyderabad, India.</a>
                                        </Card.Text>

                                        {/* <Button variant="" className='shop-btn'>Buy Now</Button> */}

                                      

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy2} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>GMC Park </Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i> <a href='https://www.tripadvisor.in/Attraction_Review-g297586-d20053961-Reviews-Dog_s_Park-Hyderabad_Hyderabad_District_Telangana.html'>GMC Pet friendly park in Hyderabad 
                                        opens at 5am on Mon </a>
                                        </Card.Text>
                                        {/* <Button variant="" className='shop-btn'>Buy Now</Button> */}

                                       

                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col>
                                <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy3} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>Dogs Park</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i> <a href='https://lbb.in/hyderabad/dogs-park-necklace-road-hyderabad/'>A Park For Barks: Have You Checked Out This Dog Park In Necklace Road?</a>
                                        </Card.Text>

                                        {/* <Button variant="" className='shop-btn'>Buy Now</Button> */}

                                       

                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>




                        <Row>
                            <Col>
                            <div></div>
                                <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy4} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>GHMC park</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i><a href= 'https://www.hyderabadzone.com/attractions/ghmc-dog-park-at-gachibowli-in-hyderabad.html'> GHMC Gachibowli dog park timings are 6:00 AM to 11:00 AM and 4:00 PM to 9:00 PM.</a>
                                        </Card.Text>

                                        {/* <Button variant="" className='shop-btn'>Buy Now</Button> */}

                     

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy5} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>Bone Park</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i> <a href='https://lbb.in/hyderabad/kondapur-dog-park/'>This Bone-Shaped Park In Kondapur Is Where Your Pup Can Have Endless Wags & Sniffs</a>
                                        </Card.Text>

                                        {/* <Button variant="" className='shop-btn'>Buy Now</Button> */}

                                        

                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col>
                                <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy6} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>Petto Park</Card.Title>

                                        <Card.Text>
                                        <i class="ri-map-pin-2-line"></i> <a href='https://www.hyderabadzone.com/attractions/ghmc-dog-park-at-gachibowli-in-hyderabad.html#google_vignette'>The park has a variety of amenities for dogs to enjoy, including tunnels, jumps, pools, fountains, and runs. </a>
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
