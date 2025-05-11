import React from 'react'
import '../Style/Shopping.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Toy1 from '../Uploads/peta1.webp'
import Toy2 from '../Uploads/peta2.avif'
import Toy3 from '../Uploads/peta3.webp'
import Toy4 from '../Uploads/peta4.jpg'
import Toy5 from '../Uploads/peta5.webp'
import Toy6 from '../Uploads/peta6.webp'


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
                                <li><i class="fa fa-caret-square-o-right"></i> Accessories </li>
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

                                       <a href='https://www.amazon.in/Cature-Harness-Double-Adjustable-Reflective/dp/B0CS6F23KK/ref=sr_1_1_sspa?crid=15MA3O42CCNY3&dib=eyJ2IjoiMSJ9.n1x-9WKvDJSo68VHNr96557xqYhkzYVaEDrfIGOSVbgYV30iwQvsyBRj-726EIWDuGKgs3HExY4xXHKkpVRM8nxu7yhw3tmc8GUDzaJGXGuEH-Ol6m5CI2HAjNXhZIssmw0NMEAt4RIM4FJ0kByy6dZyQ0HGW7sCKgKpquWNYrXXZ7SzKF5gnxMVGOPC08WjqIZacs2-ma_io6qdHVN-EWmJp5tEdsgTFa9zH393exMQHlRhKxCZ4DTqjvzkxRPsX-lM5w-P0RPRG-x0eJvwXcbNUW3A_2eJZ0uay-Mhnws.xhOeXtZCPANA-puQ_C0IbeuSXdGAm10X6uB21DpZYqY&dib_tag=se&keywords=pet+accessories+for+dogs+belts&qid=1719632742&sprefix=pet+accessories+for+dogs+belt%2Caps%2C221&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'>Cature Dog Harness Step-in Soft Double Mesh Padded, Adjustable and Reflective Dog Harness for Small Medium and Large Dogs and Cats</a>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                            <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy2} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'></Card.Title>
                                        
                                        <Button variant="" className='shop-btn'>Buy Now</Button>

                                       <a href='https://www.amazon.in/Puppies-Jingle-Festival-Decoration-Accessories/dp/B08S7HKX9D/ref=sr_1_8?crid=15MA3O42CCNY3&dib=eyJ2IjoiMSJ9.n1x-9WKvDJSo68VHNr96557xqYhkzYVaEDrfIGOSVbgYV30iwQvsyBRj-726EIWDuGKgs3HExY4xXHKkpVRM8nxu7yhw3tmc8GUDzaJGXGuEH-Ol6m5CI2HAjNXhZIssmw0NMEAt4RIM4FJ0kByy6dZyQ0HGW7sCKgKpquWNYrXXZ7SzKF5gnxMVGOPC08WjqIZacs2-ma_io6qdHVN-EWmJp5tEdsgTFa9zH393exMQHlRhKxCZ4DTqjvzkxRPsX-lM5w-P0RPRG-x0eJvwXcbNUW3A_2eJZ0uay-Mhnws.xhOeXtZCPANA-puQ_C0IbeuSXdGAm10X6uB21DpZYqY&dib_tag=se&keywords=pet+accessories+for+dogs+belts&qid=1719632742&sprefix=pet+accessories+for+dogs+belt%2Caps%2C221&sr=8-8'>COZY PUPPIES Metal Jingle Bells Loose Beads Festival Party Decoration, Pet Cat Puppy Dog Bells For Collar, Diy Crafts Accessories</a>
                                    </Card.Body>
                                </Card>
                            
                            </Col>
                            <Col>
                            <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy3} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'></Card.Title>
                                        
                                        <Button variant="" className='shop-btn'>Buy Now</Button>

                                      <a href='https://www.amazon.in/Berlins-Bohemia-Patterns-Adjustable-Pet/dp/B0D56R9L29/ref=sr_1_9?crid=15MA3O42CCNY3&dib=eyJ2IjoiMSJ9.n1x-9WKvDJSo68VHNr96557xqYhkzYVaEDrfIGOSVbgYV30iwQvsyBRj-726EIWDuGKgs3HExY4xXHKkpVRM8nxu7yhw3tmc8GUDzaJGXGuEH-Ol6m5CI2HAjNXhZIssmw0NMEAt4RIM4FJ0kByy6dZyQ0HGW7sCKgKpquWNYrXXZ7SzKF5gnxMVGOPC08WjqIZacs2-ma_io6qdHVN-EWmJp5tEdsgTFa9zH393exMQHlRhKxCZ4DTqjvzkxRPsX-lM5w-P0RPRG-x0eJvwXcbNUW3A_2eJZ0uay-Mhnws.xhOeXtZCPANA-puQ_C0IbeuSXdGAm10X6uB21DpZYqY&dib_tag=se&keywords=pet+accessories+for+dogs+belts&qid=1719632742&sprefix=pet+accessories+for+dogs+belt%2Caps%2C221&sr=8-9'>Berlin's Nylon Bohemia Style Dog Collar with Patterns Adjustable 40-60Cm Soft Comfy Pet Collars Dog Belt for Small Medium Large 30-40Kg Dogs</a>

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
                                        <a href='https://www.amazon.in/Puppies-Jingle-Festival-Decoration-Accessories/dp/B08S7HKX9D/ref=sr_1_8?crid=15MA3O42CCNY3&dib=eyJ2IjoiMSJ9.n1x-9WKvDJSo68VHNr96557xqYhkzYVaEDrfIGOSVbgYV30iwQvsyBRj-726EIWDuGKgs3HExY4xXHKkpVRM8nxu7yhw3tmc8GUDzaJGXGuEH-Ol6m5CI2HAjNXhZIssmw0NMEAt4RIM4FJ0kByy6dZyQ0HGW7sCKgKpquWNYrXXZ7SzKF5gnxMVGOPC08WjqIZacs2-ma_io6qdHVN-EWmJp5tEdsgTFa9zH393exMQHlRhKxCZ4DTqjvzkxRPsX-lM5w-P0RPRG-x0eJvwXcbNUW3A_2eJZ0uay-Mhnws.xhOeXtZCPANA-puQ_C0IbeuSXdGAm10X6uB21DpZYqY&dib_tag=se&keywords=pet+accessories+for+dogs+belts&qid=1719632742&sprefix=pet+accessories+for+dogs+belt%2Caps%2C221&sr=8-8'>COZY PUPPIES Metal Jingle Bells Loose Beads Festival Party Decoration, Pet Cat Puppy Dog Bells For Collar, Diy Crafts Accessories</a>
                                        

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                            <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy5} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'></Card.Title>
                                        
                                        <Button variant="" className='shop-btn'>Buy Now</Button>

               <a href='https://www.amazon.in/Kraftidy-Customized-Puppies-Personalized-Black/dp/B0BJ7K25H1/ref=sr_1_11?crid=15MA3O42CCNY3&dib=eyJ2IjoiMSJ9.n1x-9WKvDJSo68VHNr96557xqYhkzYVaEDrfIGOSVbgYV30iwQvsyBRj-726EIWDuGKgs3HExY4xXHKkpVRM8nxu7yhw3tmc8GUDzaJGXGuEH-Ol6m5CI2HAjNXhZIssmw0NMEAt4RIM4FJ0kByy6dZyQ0HGW7sCKgKpquWNYrXXZ7SzKF5gnxMVGOPC08WjqIZacs2-ma_io6qdHVN-EWmJp5tEdsgTFa9zH393exMQHlRhKxCZ4DTqjvzkxRPsX-lM5w-P0RPRG-x0eJvwXcbNUW3A_2eJZ0uay-Mhnws.xhOeXtZCPANA-puQ_C0IbeuSXdGAm10X6uB21DpZYqY&dib_tag=se&keywords=pet+accessories+for+dogs+belts&qid=1719632742&sprefix=pet+accessories+for+dogs+belt%2Caps%2C221&sr=8-11'>Kraftidy Dog Collar and Chain Leash with Name tag id Customized for Large Medium Dogs</a>

                                    </Card.Body>
                                </Card>
                            
                            </Col>
                            <Col>
                            <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy6} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'></Card.Title>
                                        
                                        <Button variant="" className='shop-btn'>Buy Now</Button>
<a href='https://www.amazon.in/Adjustable-Tactical-Training-Release-17-20-5/dp/B09R4JK4YD/ref=sxin_23_pa_sp_search_thematic_sspa?content-id=amzn1.sym.85e046b2-1010-4183-b7b7-f25119863240%3Aamzn1.sym.85e046b2-1010-4183-b7b7-f25119863240&crid=15MA3O42CCNY3&cv_ct_cx=pet%2Baccessories%2Bfor%2Bdogs%2Bbelts&dib=eyJ2IjoiMSJ9.rjuLsmxwvtnRzW-vOLoDq8cWy92na-a_v7_n78v7QJbMkggAqUCLtVXwk1SaSIjk3YoXXZxm53FIpmpLQ7W4cw.AaB3Osfvp04VHZyrPagmR5-rdkIo7wr8y84svlwzt4M&dib_tag=se&keywords=pet%2Baccessories%2Bfor%2Bdogs%2Bbelts&pd_rd_i=B09R4JK4YD&pd_rd_r=d31d4a65-800a-49ea-affb-d7405ede7ab6&pd_rd_w=MrwXU&pd_rd_wg=Z8x1r&pf_rd_p=85e046b2-1010-4183-b7b7-f25119863240&pf_rd_r=W3X4PMMPJSXHM6RK27A4&qid=1719632742&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=pet%2Baccessories%2Bfor%2Bdogs%2Bbelt%2Caps%2C221&sr=1-1-ced4eeeb-b190-41d6-902a-1ecb3fb8b7c4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1'>Dog Collar Adjustable Nylon Tactical Dog Collar with Strap Handle Dog Training Collar Quick Release Metal Buckle for Small Medium Large Dogs</a>
                                        

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
