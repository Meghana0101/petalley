import React from 'react'
import '../Style/Shopping.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Toy1 from '../Uploads/toy1.jpg'
import Toy2 from '../Uploads/toy7.jpg'
import Toy3 from '../Uploads/toy3.webp'
import Toy4 from '../Uploads/toy4.webp'
import Toy5 from '../Uploads/toy5.webp'
import Toy6 from '../Uploads/toy6.webp'


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
                                <li><i class="fa fa-caret-square-o-right"></i><a href='/Petfood'> Pet Food</a></li>
                                <li><i class="fa fa-caret-square-o-right"></i> Toys</li>
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
                                        <Card.Title className='card-price'></Card.Title>

                                        <Button variant="" className='shop-btn'>Buy Now</Button>
<a href='https://www.amazon.com/Kong-Wubba-Dog-Color-Assorted/dp/B015WWT3PI/ref=sr_1_5?adgrpid=1338108061637559&dib=eyJ2IjoiMSJ9.k0v3LGjD2GOAcaHkBx7FZjSjoLRUdZ7q1r8bG8tR7csVB6qmbCYYn2IAgWctD9C7UDKq3VJvhjpuW-7nhj47BWE9h6HCeH5dV9--JRTtrR3RzjiOQwBHEM3JIBAuzq8-wW9QQmaPP1k2kvX3o9wojOkezab2OpvnrQcSMS02LfAmbuHySzkqhXTVPBCa4eDWK8ZF9wP9xv1aOCvtwAWGMO4x9KaBmhgnTkXYPDCmmYGcBlClPdEJ69_PNKCYAM3CN6p_yuL5jK9XkSIwwY5Y3hhLUybR5V6kHOZTX6bkQao.sbvS7C51gqKCcbWUf74abVgPv2mkLGIRg7eUG3c7NL8&dib_tag=se&hvadid=83632018884782&hvbmt=bb&hvdev=c&hvlocphy=116074&hvnetw=o&hvqmt=b&hvtargid=kwd-83632813673792&hydadcr=7282_13252426&keywords=%E2%80%9Ckong%E2%80%9D+dog+toys&msclkid=0a6e174c185f1d4681da71339a36841b&qid=1719632493&sr=8-5'>Kong Wubba Dog Size: Large Pack: of 2, Assorted</a>
                                   

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                            <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy2} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'></Card.Title>
                                        
                                        <Button variant="" className='shop-btn'>Buy Now</Button>

                                       <a href='https://www.amazon.com/KONG-Classic-Durable-Natural-Rubber/dp/B000AYN7LU/ref=sr_1_1?adgrpid=1338108061637559&dib=eyJ2IjoiMSJ9.k0v3LGjD2GOAcaHkBx7FZjSjoLRUdZ7q1r8bG8tR7csVB6qmbCYYn2IAgWctD9C7UDKq3VJvhjpuW-7nhj47BWE9h6HCeH5dV9--JRTtrR3RzjiOQwBHEM3JIBAuzq8-wW9QQmaPP1k2kvX3o9wojOkezab2OpvnrQcSMS02LfAmbuHySzkqhXTVPBCa4eDWK8ZF9wP9xv1aOCvtwAWGMO4x9KaBmhgnTkXYPDCmmYGcBlClPdEJ69_PNKCYAM3CN6p_yuL5jK9XkSIwwY5Y3hhLUybR5V6kHOZTX6bkQao.sbvS7C51gqKCcbWUf74abVgPv2mkLGIRg7eUG3c7NL8&dib_tag=se&hvadid=83632018884782&hvbmt=bb&hvdev=c&hvlocphy=116074&hvnetw=o&hvqmt=b&hvtargid=kwd-83632813673792&hydadcr=7282_13252426&keywords=%E2%80%9Ckong%E2%80%9D+dog+toys&msclkid=0a6e174c185f1d4681da71339a36841b&qid=1719632583&sr=8-1'>KONG Classic Stuffable Dog Toy - Fetch & Chew Toy for Dogs </a>

                                    </Card.Body>
                                </Card>
                            
                            </Col>
                            <Col>
                            <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy3} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'></Card.Title>
                                        
                                        <Button variant="" className='shop-btn'>Buy Now</Button>

                                        <a href='https://www.amazon.com/KONG-Classic-Durable-Natural-Rubber/dp/B000AYN7LU/ref=sr_1_1?adgrpid=1338108061637559&dib=eyJ2IjoiMSJ9.k0v3LGjD2GOAcaHkBx7FZjSjoLRUdZ7q1r8bG8tR7csVB6qmbCYYn2IAgWctD9C7UDKq3VJvhjpuW-7nhj47BWE9h6HCeH5dV9--JRTtrR3RzjiOQwBHEM3JIBAuzq8-wW9QQmaPP1k2kvX3o9wojOkezab2OpvnrQcSMS02LfAmbuHySzkqhXTVPBCa4eDWK8ZF9wP9xv1aOCvtwAWGMO4x9KaBmhgnTkXYPDCmmYGcBlClPdEJ69_PNKCYAM3CN6p_yuL5jK9XkSIwwY5Y3hhLUybR5V6kHOZTX6bkQao.sbvS7C51gqKCcbWUf74abVgPv2mkLGIRg7eUG3c7NL8&dib_tag=se&hvadid=83632018884782&hvbmt=bb&hvdev=c&hvlocphy=116074&hvnetw=o&hvqmt=b&hvtargid=kwd-83632813673792&hydadcr=7282_13252426&keywords=%E2%80%9Ckong%E2%80%9D+dog+toys&msclkid=0a6e174c185f1d4681da71339a36841b&qid=1719632583&sr=8-1'>KONG Classic Stuffable Dog Toy - Fetch & Chew Toy for Dogs </a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>




                        <Row>
                            <Col>
                                <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy4} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'></Card.Title>

                                        <Button variant="" className='shop-btn'>Buy Now</Button>

                                        <a href='https://www.amazon.com/KONG-Classic-Durable-Natural-Rubber/dp/B000AYN7LU/ref=sr_1_1?adgrpid=1338108061637559&dib=eyJ2IjoiMSJ9.k0v3LGjD2GOAcaHkBx7FZjSjoLRUdZ7q1r8bG8tR7csVB6qmbCYYn2IAgWctD9C7UDKq3VJvhjpuW-7nhj47BWE9h6HCeH5dV9--JRTtrR3RzjiOQwBHEM3JIBAuzq8-wW9QQmaPP1k2kvX3o9wojOkezab2OpvnrQcSMS02LfAmbuHySzkqhXTVPBCa4eDWK8ZF9wP9xv1aOCvtwAWGMO4x9KaBmhgnTkXYPDCmmYGcBlClPdEJ69_PNKCYAM3CN6p_yuL5jK9XkSIwwY5Y3hhLUybR5V6kHOZTX6bkQao.sbvS7C51gqKCcbWUf74abVgPv2mkLGIRg7eUG3c7NL8&dib_tag=se&hvadid=83632018884782&hvbmt=bb&hvdev=c&hvlocphy=116074&hvnetw=o&hvqmt=b&hvtargid=kwd-83632813673792&hydadcr=7282_13252426&keywords=%E2%80%9Ckong%E2%80%9D+dog+toys&msclkid=0a6e174c185f1d4681da71339a36841b&qid=1719632583&sr=8-1'>KONG Classic Stuffable Dog Toy - Fetch & Chew Toy for Dogs </a>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                            <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy5} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'></Card.Title>
                                        
                                        <Button variant="" className='shop-btn'>Buy Now</Button>

                                        <a href='https://www.amazon.com/KONG-Classic-Durable-Natural-Rubber/dp/B000AYN7LU/ref=sr_1_1?adgrpid=1338108061637559&dib=eyJ2IjoiMSJ9.k0v3LGjD2GOAcaHkBx7FZjSjoLRUdZ7q1r8bG8tR7csVB6qmbCYYn2IAgWctD9C7UDKq3VJvhjpuW-7nhj47BWE9h6HCeH5dV9--JRTtrR3RzjiOQwBHEM3JIBAuzq8-wW9QQmaPP1k2kvX3o9wojOkezab2OpvnrQcSMS02LfAmbuHySzkqhXTVPBCa4eDWK8ZF9wP9xv1aOCvtwAWGMO4x9KaBmhgnTkXYPDCmmYGcBlClPdEJ69_PNKCYAM3CN6p_yuL5jK9XkSIwwY5Y3hhLUybR5V6kHOZTX6bkQao.sbvS7C51gqKCcbWUf74abVgPv2mkLGIRg7eUG3c7NL8&dib_tag=se&hvadid=83632018884782&hvbmt=bb&hvdev=c&hvlocphy=116074&hvnetw=o&hvqmt=b&hvtargid=kwd-83632813673792&hydadcr=7282_13252426&keywords=%E2%80%9Ckong%E2%80%9D+dog+toys&msclkid=0a6e174c185f1d4681da71339a36841b&qid=1719632583&sr=8-1'>KONG Classic Stuffable Dog Toy - Fetch & Chew Toy for Dogs </a>

                                    </Card.Body>
                                </Card>
                            
                            </Col>
                            <Col>
                            <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy6} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'></Card.Title>
                                        
                                        <Button variant="" className='shop-btn'>Buy Now</Button>

                                        <a href='https://www.amazon.com/Kong-Wubba-Dog-Color-Assorted/dp/B015WWT3PI/ref=sr_1_5?adgrpid=1338108061637559&dib=eyJ2IjoiMSJ9.k0v3LGjD2GOAcaHkBx7FZjSjoLRUdZ7q1r8bG8tR7csVB6qmbCYYn2IAgWctD9C7UDKq3VJvhjpuW-7nhj47BWE9h6HCeH5dV9--JRTtrR3RzjiOQwBHEM3JIBAuzq8-wW9QQmaPP1k2kvX3o9wojOkezab2OpvnrQcSMS02LfAmbuHySzkqhXTVPBCa4eDWK8ZF9wP9xv1aOCvtwAWGMO4x9KaBmhgnTkXYPDCmmYGcBlClPdEJ69_PNKCYAM3CN6p_yuL5jK9XkSIwwY5Y3hhLUybR5V6kHOZTX6bkQao.sbvS7C51gqKCcbWUf74abVgPv2mkLGIRg7eUG3c7NL8&dib_tag=se&hvadid=83632018884782&hvbmt=bb&hvdev=c&hvlocphy=116074&hvnetw=o&hvqmt=b&hvtargid=kwd-83632813673792&hydadcr=7282_13252426&keywords=%E2%80%9Ckong%E2%80%9D+dog+toys&msclkid=0a6e174c185f1d4681da71339a36841b&qid=1719632493&sr=8-5'>Kong Wubba Dog Size: Large Pack: of 2, Assorted</a>

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
