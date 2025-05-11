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
                                        <Card.Title className='card-price'></Card.Title>

                                        <Button variant="" className='shop-btn'>Buy Now</Button>
                                        <a href='https://www.amazon.in/Meat-Up-Adult-Food-Free/dp/B075WWBTYQ/ref=sr_1_5?adgrpid=1324913119126459&dib=eyJ2IjoiMSJ9.Wsz02aeg-vL-Vcy_tjTyEx7ACL4G1VvxBtFDXj-IWZFmWsQW-1jH-5IYpc69lMLwT2P-gtAizMhqCbi2yO8FxDh1sk1H-TJeVIMlaIRzgX23glTeW5Bz2qXsVJHNHFi5BqU-XN1vWdKmwh_Vw5b7q1ur5Z2nVTKFC5ErZlw_CdAfJfwaY8M_ymJO2XNyII7G9vxU-aSFHYBBUL_9sfK28UF3AvEYZsFHBxyV5X8PJrznDed34MqaSTaNaSd2ZoAgp06iilEXpU_NUcdTIFT3c6l-Se7YxUvQWp8NNXnCox8.Rl3MJE0blMzDzUMHNJ_Opu4t3ml1bLSp7FM3i-tt-KI&dib_tag=se&hvadid=82807328660275&hvbmt=be&hvdev=c&hvlocphy=116074&hvnetw=o&hvqmt=e&hvtargid=kwd-82807953585905%3Aloc-90&hydadcr=8532_2162315&keywords=pet+food+amazon&msclkid=2e0c52f0e2a8197d88ec348f9f5628ce&qid=1719631359&sr=8-5'>Meat Up Adult Dry Dog Food, 3 kg (Buy 1 Get 1 Free), Total 6 Kg Pack</a>

                                        {/* <p className='shop-tags'>*Only Few Are Left</p> */}

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                            <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy2} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'></Card.Title>
                                        
                                        <Button variant="" className='shop-btn'>Buy Now</Button>
                                        <a href='https://www.amazon.in/Purepet-Adult-Food-Chicken-Vegetable/dp/B075PHPK27/ref=sr_1_3_sspa?adgrpid=1324913119126459&dib=eyJ2IjoiMSJ9.Wsz02aeg-vL-Vcy_tjTyEx7ACL4G1VvxBtFDXj-IWZFmWsQW-1'>Purepet Adult Dry Dog Food Chicken & Vegetable Flavour , 20kg Pack</a>

                                        {/* <p className='shop-tags'>*Only Few Are Left</p> */}

                                    </Card.Body>
                                </Card>
                            
                            </Col>
                            <Col>
                            <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy3} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'></Card.Title>
                                        
                                        <Button variant="" className='shop-btn'>Buy Now</Button>
                                        <a href='https://www.amazon.in/Drools-Focus-Puppy-Super-Premium/dp/B00LE8UNWM/ref=sr_1_2_sspa?adgrpid=1324913119126459&dib=eyJ2IjoiMSJ9.Wsz02aeg-vL-Vcy_tjTyEx7ACL4G1VvxBtFDXj-IWZFmWsQW-1jH-5IYpc69lMLwT2P-gtAizMhqCbi2yO8FxDh1sk1H-TJeVIMlaIRzgX23glTeW5Bz2qXsVJHNHFi5BqU-XN1vWdKmwh_Vw5b7q1ur5Z2nVTKFC5ErZlw_CdAfJfwaY8M_ymJO2XNyII7G9vxU-aSFHYBBUL_9sfK28UF3AvEYZsFHBxyV5X8PJrznDed34MqaSTaNaSd2ZoAgp06iilEXpU_NUcdTIFT3c6l-Se7YxUvQWp8NNXnCox8.Rl3MJE0blMzDzUMHNJ_Opu4t3ml1bLSp7FM3i-tt-KI&dib_tag=se&hvadid=82807328660275&hvbmt=be&hvdev=c&hvlocphy=116074&hvnetw=o&hvqmt=e&hvtargid=kwd-82807953585905%3Aloc-90&hydadcr=8532_2162315&keywords=pet%2Bfood%2Bamazon&msclkid=2e0c52f0e2a8197d88ec348f9f5628ce&qid=1719631359&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1'>Drools Focus Premium Puppy Dry Dog Food, Chicken Flavor 1.2 kg Pack</a>

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
                                        <Card.Title className='card-price'></Card.Title>

                                        <Button variant="" className='shop-btn'>Buy Now</Button>
                                        <a href='https://www.amazon.in/Dispenser-Stainless-Automatic-Dispensing-Mechanism/dp/B0CZKY77YP/ref=sr_1_7?adgrpid=1324913119126459&dib=eyJ2IjoiMSJ9.Wsz02aeg-vL-Vcy_tjTyEx7ACL4G1VvxBtFDXj-IWZFmWsQW-1jH-5IYpc69lMLwT2P-gtAizMhqCbi2yO8FxDh1sk1H-TJeVIMlaIRzgX23glTeW5Bz2qXsVJHNHFi5BqU-XN1vWdKmwh_Vw5b7q1ur5Z2nVTKFC5ErZlw_CdAfJfwaY8M_ymJO2XNyII7G9vxU-aSFHYBBUL_9sfK28UF3AvEYZsFHBxyV5X8PJrznDed34MqaSTaNaSd2ZoAgp06iilEXpU_NUcdTIFT3c6l-Se7YxUvQWp8NNXnCox8.Rl3MJE0blMzDzUMHNJ_Opu4t3ml1bLSp7FM3i-tt-KI&dib_tag=se&hvadid=82807328660275&hvbmt=be&hvdev=c&hvlocphy=116074&hvnetw=o&hvqmt=e&hvtargid=kwd-82807953585905%3Aloc-90&hydadcr=8532_2162315&keywords=pet%2Bfood%2Bamazon&msclkid=2e0c52f0e2a8197d88ec348f9f5628ce&qid=1719631359&sr=8-7&th=1'>Amazon Basics 2 in1 Pet Feeder Food and Water Dispenser | Stainless Steel Bowl | </a>

                                       

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                            <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy5} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'></Card.Title>
                                        
                                        <Button variant="" className='shop-btn'>Buy Now</Button>
                                        <a href='https://www.amazon.in/Drools-Chicken-Puppy-Food-Free/dp/B07HBFY5VJ/ref=sr_1_6?adgrpid=1324913119126459&dib=eyJ2IjoiMSJ9.Wsz02aeg-vL-Vcy_tjTyEx7ACL4G1VvxBtFDXj-IWZFmWsQW-1jH-5IYpc69lMLwT2P-gtAizMhqCbi2yO8FxDh1sk1H-TJeVIMlaIRzgX23glTeW5Bz2qXsVJHNHFi5BqU-XN1vWdKmwh_Vw5b7q1ur5Z2nVTKFC5ErZlw_CdAfJfwaY8M_ymJO2XNyII7G9vxU-aSFHYBBUL_9sfK28UF3AvEYZsFHBxyV5X8PJrznDed34MqaSTaNaSd2ZoAgp06iilEXpU_NUcdTIFT3c6l-Se7YxUvQWp8NNXnCox8.Rl3MJE0blMzDzUMHNJ_Opu4t3ml1bLSp7FM3i-tt-KI&dib_tag=se&hvadid=82807328660275&hvbmt=be&hvdev=c&hvlocphy=116074&hvnetw=o&hvqmt=e&hvtargid=kwd-82807953585905%3Aloc-90&hydadcr=8532_2162315&keywords=pet%2Bfood%2Bamazon&msclkid=2e0c52f0e2a8197d88ec348f9f5628ce&qid=1719631359&sr=8-6&th=1'>Drools Puppy Dry Dog Food Chicken and Egg, 3kg with Free 1.2kg, Total 4.2 kg Pack</a>

                                       
                                    </Card.Body>
                                </Card>
                            
                            </Col>
                            <Col>
                            <Card style={{ width: '15rem' }} className='shop-card'>
                                    <Card.Img variant="top" src={Toy6} id='shop-img' />
                                    <Card.Body>
                                        <Card.Title className='card-price'></Card.Title>
                                        
                                        <Button variant="" className='shop-btn'>Buy Now</Button>
                                        <a href='https://www.amazon.in/PURINA-SUPERCOAT-Adult-Years-Chicken/dp/B0C8J51PL6/ref=sxin_15_pa_sp_search_thematic_sspa?adgrpid=1324913119126459&content-id=amzn1.sym.85e046b2-1010-4183-b7b7-f25119863240%3Aamzn1.sym.85e046b2-1010-4183-b7b7-f25119863240&cv_ct_cx=pet+food+amazon&dib=eyJ2IjoiMSJ9.pTEtUmcSPVzETlwMcNp8pqpGDAV3V5o3FgzujSrkwjeoTs8OI3PeFYUvRnfM1ewvyHwemR2ilhdfc5fFWysUdw.k4UptFiUYTz0l1-_XmZXcM_h1FM55UQyKASNQiR8SxA&dib_tag=se&hvadid=82807328660275&hvbmt=be&hvdev=c&hvlocphy=116074&hvnetw=o&hvqmt=e&hvtargid=kwd-82807953585905%3Aloc-90&hydadcr=8532_2162315&keywords=pet+food+amazon&msclkid=2e0c52f0e2a8197d88ec348f9f5628ce&pd_rd_i=B0C8J51PL6&pd_rd_r=9fb5d346-5d11-4cd3-8ef3-949fe5b094ea&pd_rd_w=3kkmW&pd_rd_wg=YXqeU&pf_rd_p=85e046b2-1010-4183-b7b7-f25119863240&pf_rd_r=YRY83EM9VKZVWKJBPGHJ&qid=1719631359&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=1-4-ced4eeeb-b190-41d6-902a-1ecb3fb8b7c4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1'>URINA SUPERCOAT Adult Dry Dog Food, 1+ Years, with Chicken</a>

                                        

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
