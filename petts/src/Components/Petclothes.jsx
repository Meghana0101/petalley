import React from 'react'
import '../Style/Shopping.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Toy1 from '../Uploads/petc1.jpg'
import Toy2 from '../Uploads/petc2.jpg'
import Toy3 from '../Uploads/petc3.webp'
import Toy4 from '../Uploads/petc4.jpg'
import Toy5 from '../Uploads/petc5.jpg'
import Toy6 from '../Uploads/petc6.jpg'


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
                                <li><i class="fa fa-caret-square-o-right"></i><a href='/Shopping'> Toys </a></li>
                                <li><i class="fa fa-caret-square-o-right"></i><a href='/Petacce'> Accessories </a></li>
                                <li><i class="fa fa-caret-square-o-right"></i> Clothes</li>
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
<a href='https://www.amazon.in/CHBORLESS-Classic-Knitwear-Sweater-Clothing/dp/B07G2D2V1J/ref=sr_1_8?adgrpid=1322714097609033&dib=eyJ2IjoiMSJ9.frpDC570V7FVmZu14QCm1OItKxLdiaJaGCJ4FSr0YotI3wmw7Yr8cD8UyRtzuV2anpRZgHGlllh7Tl3vA6EPAR93utuQ7FJz_k1VTpADnXPiIcq_ZaPiu_-qsBc6a0bF7_ENITubXst9rC-hUgM8CoOEHhezADmJDYI_y9UW8NmeyKHIDS8Kmiw0sAltjxAXBm33Z1AATPjFX9divhdwwIdaXtEYMjnulKehzysrJ3URIR8MWe5z6Ca8XY0CPMtKGLOdfmGNmTtKRWSaVGmpeGSc8iAeyUFjr4WedkhDDkI.VosnjExI9nxbwGeDOT5nIhUql_2iaU4fIyZNtF1n32E&dib_tag=se&hvadid=82669889958276&hvbmt=be&hvdev=c&hvlocphy=116074&hvnetw=o&hvqmt=e&hvtargid=kwd-82670514548582%3Aloc-90&hydadcr=14110_1947660&keywords=pet+clothes&msclkid=3cbab5d447aa11d8966dd3abc6fc2c0b&qid=1719632216&sr=8-8'>CHBORLESS Pet Dog Classic Knitwear Sweater Warm Winter Puppy Pet Coat Soft Sweater Clothing for Small Dogs </a>
                                      

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                            <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy2} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'></Card.Title>
                                        
                                        <Button variant="" className='shop-btn'>Buy Now</Button>
                                        <a href='https://www.amazon.in/Bouncy-Toonz-Tshirts-Medium-Labrador/dp/B0D16XCXRG/ref=sr_1_1_sspa?adgrpid=1322714097609033&dib=eyJ2IjoiMSJ9.frpDC570V7FVmZu14QCm1OItKxLdiaJaGCJ4FSr0YotI3wmw7Yr8cD8UyRtzuV2anpRZgHGlllh7Tl3vA6EPAR93utuQ7FJz_k1VTpADnXPiIcq_ZaPiu_-qsBc6a0bF7_ENITubXst9rC-hUgM8CoOEHhezADmJDYI_y9UW8NmeyKHIDS8Kmiw0sAltjxAXBm33Z1AATPjFX9divhdwwIdaXtEYMjnulKehzysrJ3URIR8MWe5z6Ca8XY0CPMtKGLOdfmGNmTtKRWSaVGmpeGSc8iAeyUFjr4WedkhDDkI.VosnjExI9nxbwGeDOT5nIhUql_2iaU4fIyZNtF1n32E&dib_tag=se&hvadid=82669889958276&hvbmt=be&hvdev=c&hvlocphy=116074&hvnetw=o&hvqmt=e&hvtargid=kwd-82670514548582%3Aloc-90&hydadcr=14110_1947660&keywords=pet+clothes&msclkid=3cbab5d447aa11d8966dd3abc6fc2c0b&qid=1719632216&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'>Bouncy Toonz Dog Tshirts Large and Medium Sized Dogs Labrador - Customised Dog Tshirts (Dog-pawname-Lavender)</a>

                                       

                                    </Card.Body>
                                </Card>
                            
                            </Col>
                            <Col>
                            <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy3} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>$ 13</Card.Title>
                                        
                                        <Button variant="" className='shop-btn'>Buy Now</Button>

                                        <a href='https://www.amazon.in/Golden-Tails-Printed-Tshirts-Costumes/dp/B0BSSY2FNF/ref=sr_1_4_sspa?adgrpid=1322714097609033&dib=eyJ2IjoiMSJ9.frpDC570V7FVmZu14QCm1OItKxLdiaJaGCJ4FSr0YotI3wmw7Yr8cD8UyRtzuV2anpRZgHGlllh7Tl3vA6EPAR93utuQ7FJz_k1VTpADnXPiIcq_ZaPiu_-qsBc6a0bF7_ENITubXst9rC-hUgM8CoOEHhezADmJDYI_y9UW8NmeyKHIDS8Kmiw0sAltjxAXBm33Z1AATPjFX9divhdwwIdaXtEYMjnulKehzysrJ3URIR8MWe5z6Ca8XY0CPMtKGLOdfmGNmTtKRWSaVGmpeGSc8iAeyUFjr4WedkhDDkI.VosnjExI9nxbwGeDOT5nIhUql_2iaU4fIyZNtF1n32E&dib_tag=se&hvadid=82669889958276&hvbmt=be&hvdev=c&hvlocphy=116074&hvnetw=o&hvqmt=e&hvtargid=kwd-82670514548582%3Aloc-90&hydadcr=14110_1947660&keywords=pet+clothes&msclkid=3cbab5d447aa11d8966dd3abc6fc2c0b&qid=1719632216&sr=8-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'>Golden Tails Printed Tshirts for Dogs and Cats Dog Shirts Pets Costumes - Black and Royal Blue</a>

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

                                        <a href='https://www.amazon.in/Golden-Tails-T-Shirts-Printed-Sleeveless/dp/B0C7KPH781/ref=sr_1_2_sspa?adgrpid=1322714097609033&dib=eyJ2IjoiMSJ9.frpDC570V7FVmZu14QCm1OItKxLdiaJaGCJ4FSr0YotI3wmw7Yr8cD8UyRtzuV2anpRZgHGlllh7Tl3vA6EPAR93utuQ7FJz_k1VTpADnXPiIcq_ZaPiu_-qsBc6a0bF7_ENITubXst9rC-hUgM8CoOEHhezADmJDYI_y9UW8NmeyKHIDS8Kmiw0sAltjxAXBm33Z1AATPjFX9divhdwwIdaXtEYMjnulKehzysrJ3URIR8MWe5z6Ca8XY0CPMtKGLOdfmGNmTtKRWSaVGmpeGSc8iAeyUFjr4WedkhDDkI.VosnjExI9nxbwGeDOT5nIhUql_2iaU4fIyZNtF1n32E&dib_tag=se&hvadid=82669889958276&hvbmt=be&hvdev=c&hvlocphy=116074&hvnetw=o&hvqmt=e&hvtargid=kwd-82670514548582%3Aloc-90&hydadcr=14110_1947660&keywords=pet+clothes&msclkid=3cbab5d447aa11d8966dd3abc6fc2c0b&qid=1719632216&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'>Golden Tails Dog T-Shirts Printed Round Neck Sleeveless Sando Vest Tank Tees Tshirts for Dog -Set of 2</a>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                            <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy5} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'>$ 13</Card.Title>
                                        
                                        <Button variant="" className='shop-btn'>Buy Now</Button>
                                        <a href='https://www.amazon.in/Golden-Tails-T-Shirts-Printed-Sleeveless/dp/B0C7KPH781/ref=sr_1_2_sspa?adgrpid=1322714097609033&dib=eyJ2IjoiMSJ9.frpDC570V7FVmZu14QCm1OItKxLdiaJaGCJ4FSr0YotI3wmw7Yr8cD8UyRtzuV2anpRZgHGlllh7Tl3vA6EPAR93utuQ7FJz_k1VTpADnXPiIcq_ZaPiu_-qsBc6a0bF7_ENITubXst9rC-hUgM8CoOEHhezADmJDYI_y9UW8NmeyKHIDS8Kmiw0sAltjxAXBm33Z1AATPjFX9divhdwwIdaXtEYMjnulKehzysrJ3URIR8MWe5z6Ca8XY0CPMtKGLOdfmGNmTtKRWSaVGmpeGSc8iAeyUFjr4WedkhDDkI.VosnjExI9nxbwGeDOT5nIhUql_2iaU4fIyZNtF1n32E&dib_tag=se&hvadid=82669889958276&hvbmt=be&hvdev=c&hvlocphy=116074&hvnetw=o&hvqmt=e&hvtargid=kwd-82670514548582%3Aloc-90&hydadcr=14110_1947660&keywords=pet+clothes&msclkid=3cbab5d447aa11d8966dd3abc6fc2c0b&qid=1719632216&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'>Golden Tails Dog T-Shirts Printed Round Neck Sleeveless Sando Vest Tank Tees Tshirts for Dog -Set of 2</a>
                                        

                                    </Card.Body>
                                </Card>
                            
                            </Col>
                            <Col>
                            <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy6} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'></Card.Title>
                                        
                                        <Button variant="" className='shop-btn'>Buy Now</Button>

                                        <a href='https://www.amazon.in/Golden-Tails-T-Shirts-Printed-Sleeveless/dp/B0C7KPH781/ref=sr_1_2_sspa?adgrpid=1322714097609033&dib=eyJ2IjoiMSJ9.frpDC570V7FVmZu14QCm1OItKxLdiaJaGCJ4FSr0YotI3wmw7Yr8cD8UyRtzuV2anpRZgHGlllh7Tl3vA6EPAR93utuQ7FJz_k1VTpADnXPiIcq_ZaPiu_-qsBc6a0bF7_ENITubXst9rC-hUgM8CoOEHhezADmJDYI_y9UW8NmeyKHIDS8Kmiw0sAltjxAXBm33Z1AATPjFX9divhdwwIdaXtEYMjnulKehzysrJ3URIR8MWe5z6Ca8XY0CPMtKGLOdfmGNmTtKRWSaVGmpeGSc8iAeyUFjr4WedkhDDkI.VosnjExI9nxbwGeDOT5nIhUql_2iaU4fIyZNtF1n32E&dib_tag=se&hvadid=82669889958276&hvbmt=be&hvdev=c&hvlocphy=116074&hvnetw=o&hvqmt=e&hvtargid=kwd-82670514548582%3Aloc-90&hydadcr=14110_1947660&keywords=pet+clothes&msclkid=3cbab5d447aa11d8966dd3abc6fc2c0b&qid=1719632216&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'>Golden Tails Dog T-Shirts Printed Round Neck Sleeveless Sando Vest Tank Tees Tshirts for Dog -Set of 2</a>

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
