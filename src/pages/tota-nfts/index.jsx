import React, { useState } from 'react';
import { Header, Footer, ProgressiveLoader, CountDownTimer, IndexSlider, ScrollButton } from '../../components';
import { Container, Col, Row, Accordion, Modal } from 'react-bootstrap';
import {
    costume1,
    costume2,
    costume3,
    costume4,
    case_make,
    nft_banner,
    sep_belt,
    sep_bg_1,
    sep_bg_2,
    sep_bg_3,
    sep_bg_4,
    sep_bg_5,
    sep_team_char1,
    sep_team_char2,
    sep_team_char3,
    sep_team_char4,
    sep_the_first,
    sep_the_first_logo,
    yellow_passport,
    arrows_down_gold,
    check_tick,
    popup_bg,
    nft_banner_placeholder
} from '../../assets/images';
import { Link } from 'react-router-dom';
import { charData, settings } from './Data';

function TotaNfts() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Header />
            <main>
                <section className="tota_nft_banner">
                    <div className="img-wrapper">
                        <ProgressiveLoader
                            url={nft_banner}
                            placeholder={nft_banner_placeholder}
                        />
                        <div className="counter">
                            <font>EPISODE 1</font>
                            <h4>
                                SEP MOVIE COSTUME NFTs
                            </h4>
                            <h5>MINT IN</h5>
                            <CountDownTimer
                                countdown='05/28/2022'
                            />
                        </div>
                    </div>
                </section>

                <section className="sep_the_first">
                    <div className="column column_1">
                        <div className="inner_wrapper">
                            <div className="heading_box">
                                <div className="heading">
                                    <h1>sep, the first 'first'</h1>
                                    <div className="tags_box">
                                        <span className="title">superpowers</span>
                                        <p className="tags">
                                            <span className="tag">Super strength</span>
                                            <span className="tag">Super speed</span>
                                        </p>
                                    </div>
                                    <div className="tags_box">
                                        <span className="title">classification</span>
                                        <p className="tags">
                                            <span className="tag">Natural</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="img_box">
                                    <img src={sep_the_first_logo} alt="" className='img-_fluid' />
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                            </p>
                            <Link to='/' className="link">
                                CURIOUS ABOUT THE OTHER FIRSTS'? CLICK HERE
                                <img src={arrows_down_gold} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="column column_2">
                        <img src={sep_the_first} alt="" className='img_fluid' />
                    </div>
                </section>

                <section className="common_section">
                    <div className="bg-wrapper">
                        <img src={sep_bg_1} alt="" className='img_fluid' />
                    </div>
                    <div className="content_wrapper">
                        <div className="column column_1">
                            <div className="inner_wrapper">
                                <h1>SEP MOVIE COSTUME NFTS</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
                                </p>
                                <Link to="/" className="link">
                                    CURIOUS ABOUT THE MOVIE? CLICK HERE
                                    <img src={arrows_down_gold} alt="" />
                                </Link>
                                <h1>FAIR DISTRIBUTION</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                </p>
                                <div className="connect_wallet">
                                    <h3>
                                        CONNECT YOUR METAMASK WALLET
                                        <img src={arrows_down_gold} alt="" />
                                    </h3>
                                    <button className='btn white_btn' onClick={handleShow}>Connect</button>
                                </div>

                            </div>
                        </div>
                        <div className="column column_2">
                            <div className="costumes_box">
                                <img src={costume1} alt="" />
                                <img src={costume2} alt="" />
                                <img src={costume3} alt="" />
                                <img src={costume4} alt="" />
                            </div>
                        </div>
                    </div>


                </section>

                <hr className='underline' />

                <section className="partners_of_first">
                    <div className="text_wrapper">
                        <h1 className='ps-0 ps-md-5 mb-md-4'>THE PATTERNS OF THE FIRSTS'</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                            aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                            ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
                            dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzri.
                        </p>
                    </div>

                    <div className="character_sec">
                        <IndexSlider
                            content={charData}
                            settings={settings}
                        />
                    </div>

                    <div className="wallet_wrapper">
                        <div className="connect_wallet">
                            <h3>
                                CONNECT YOUR METAMASK WALLET
                                <img src={arrows_down_gold} alt="" />
                            </h3>
                            <button className='btn white_btn' onClick={handleShow}>Connect</button>
                        </div>
                    </div>
                </section>

                <section className="common_section become_citizen">
                    <div className="bg-wrapper">
                        <img src={sep_bg_2} alt="" className='img_fluid' />
                    </div>
                    <div className="content_wrapper">
                        <div className="column column_1">
                            <div className="inner_wrapper">
                                <h1>become a citizen</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.
                                </p>
                                <Link to="/" className="link">
                                    CURIOUS ABOUT THE MOVIE? CLICK HERE
                                    <img src={arrows_down_gold} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="column column_2">
                            <div className="img_wrapper">
                                <img src={yellow_passport} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="common_section make_a_case">
                    <hr className="underline" />
                    <hr className="underline second" />
                    <div className="content_wrapper">
                        <div className="column column_2">
                            <div className="img_wrapper">
                                <img src={case_make} alt="" />
                            </div>
                        </div>
                        <div className="column column_1">
                            <div className="inner_wrapper">
                                <h1>make a c.a.s.e</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.
                                </p>
                                <Link to="/" className="link">
                                    CURIOUS ABOUT THE MOVIE? CLICK HERE
                                    <img src={arrows_down_gold} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="bg-wrapper">
                        <img src={sep_bg_3} alt="" className='img_fluid' />
                    </div>
                </section>

                <section className="belt">
                    <div className="img_wrapper">
                        <img src={sep_belt} alt="" className='img_fluid' />
                    </div>

                    <div className="text_wrapper">
                        <h1>stand a chance</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.
                        </p>
                    </div>

                    <hr className="underline mb-0" />
                </section>

                <section className="more_power">
                    <div className="content_wrapper">
                        <h1>more power to you</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.
                        </p>

                        <ul>
                            <li>
                                <span className="percentage">0%</span>
                                <div className="content">
                                    Sep will remain the only one inducted in the Planet Tota Metaverse <br />
                                    <Link to="/" className='link'>
                                        CLICK & SEE
                                        <img src={arrows_down_gold} alt="" />
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <span className="percentage">10%</span>
                                <div className="content">
                                    Planet Tota Immigration will clear 1 more of the "firsts' to be inducted into the Metaverse
                                </div>
                            </li>
                            <li>
                                <span className="percentage">20%</span>
                                <div className="content">
                                    Planet Tota Immigration will clear another 2 of the 'firsts' to induct into the Metaverse
                                </div>
                            </li>
                            <li>
                                <span className="percentage">40%</span>
                                <div className="content">
                                    Planet Tota Immigration will clear another 2 of the firsts' to induct into the Metaverse
                                </div>
                            </li>
                            <li>
                                <span className="percentage">60%</span>
                                <div className="content">
                                    Planet Tota Immigration will clear another 3 of the 'firsts' to induct into the Metaverse
                                </div>
                            </li>
                            <li>
                                <span className="percentage">80%</span>
                                <div className="content">
                                    Planet Tota Immigration will clear another 3 of the firsts' to induct into the Metaverse. Planet Tota Customs will allow a cool MPV and helmet in, and take bribes to allow a gun in
                                </div>
                            </li>
                            <li>
                                <span className="percentage">90%</span>
                                <div className="content">
                                    Nefarious activities will start in the Metaverse. Evil Mad Eyes and TNT's secret underground lairs pictures will be leaked
                                </div>
                            </li>
                            <li>
                                <span className="percentage">100%</span>
                                <div className="content">
                                    Planet Tota Immigration will accept the application of the firsts'. Planet Tota Customs will allow more items and takes bribes to allow some more dangerous goods
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bg_wrapper">
                        <img src={sep_bg_4} alt="" />
                    </div>

                    <hr className="underline" />
                </section>

                <section className='episode_team'>
                    <Container>
                        <Row>
                            <Col className="heading_box">
                                <div className="inner_wrapper">
                                    <h1>THE 'EPISODE 1'TEAM</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                                        nisl ut aliqui
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row className='team_wrapper'>
                            <Col md={6}>
                                <div className="team_member">
                                    <div className="img_box">
                                        <img src={sep_team_char1} alt="" className="img_fluid" />
                                    </div>
                                    <div className="character_detail">
                                        <h1 className="character_title">shoe-head</h1>
                                        <div className="tags_box">
                                            <span className="title">superpowers</span>
                                            <p className='tags'>
                                                <span className="tag">Super strength</span>
                                            </p>
                                        </div>
                                        <div className="tags_box">
                                            <span className="title">classification</span>
                                            <p className='tags'>
                                                <span className="tag">Natural</span>
                                            </p>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="team_member">
                                    <div className="img_box">
                                        <img src={sep_team_char2} alt="" className="img_fluid" />
                                    </div>
                                    <div className="character_detail">
                                        <h1 className="character_title">mommy</h1>
                                        <div className="tags_box">
                                            <span className="title">superpowers</span>
                                            <p className="tags">
                                                <span className="tag">Super strength</span>
                                            </p>
                                        </div>
                                        <div className="tags_box">
                                            <span className="title">classification</span>
                                            <p className="tags">
                                                <span className="tag">Natural</span>
                                            </p>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="team_member">
                                    <div className="img_box">
                                        <img src={sep_team_char3} alt="" className="img_fluid" />
                                    </div>
                                    <div className="character_detail">
                                        <h1 className="character_title">mushtachio</h1>
                                        <div className="tags_box">
                                            <span className="title">superpowers</span>
                                            <p className="tags">
                                                <span className="tag">Super strength</span>
                                            </p>
                                        </div>
                                        <div className="tags_box">
                                            <span className="title">classification</span>
                                            <p className="tags">
                                                <span className="tag">Natural</span>
                                            </p>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="team_member">
                                    <div className="img_box">
                                        <img src={sep_team_char4} alt="" className="img_fluid" />
                                    </div>
                                    <div className="character_detail">
                                        <h1 className="character_title">soda-glasses</h1>
                                        <div className="tags_box">
                                            <span className="title">superpowers</span>
                                            <p className="tags">
                                                <span className="tag">Super strength</span>
                                            </p>
                                        </div>
                                        <div className="tags_box">
                                            <span className="title">classification</span>
                                            <p className="tags">
                                                <span className="tag">Natural</span>
                                            </p>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="faqs_and_documentation">
                    <div className="img_wrapper">
                        <img src={sep_bg_5} alt="" />
                    </div>
                    <Container>
                        <hr className="underline mt-0" />
                        <div className="faq_wrapper">
                            <h1>FAQs</h1>

                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What is an NFT?</Accordion.Header>
                                    <Accordion.Body>
                                        Seriously? Type NFT in Google and get the answer.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>What is Metamask?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>How to mint with Metamask on a mobile phone?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Where does my NFT go after I purchase?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                        <hr className="underline second" />

                        <div className="documentation_wrapper">
                            <h1>DOCUMENTATION AND PROOF</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliqui
                            </p>
                            <p className='p2'>VERIFIED SMART CONTRACT ADDRESS: sXDA/diamo/nonummy/nibh/Euismod?tincidunt</p>
                            <button className="btn white_btn">provenance</button>
                        </div>

                        <hr className="underline third" />

                        <div className="documentation_wrapper">
                            <h1 className='mb-2'>NOT JUST AN NFT, <br /> ' A PIECE OF PLANET TOTA</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh, euismod tincidunt ut laoreet dolore magna
                                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliqui
                            </p>
                        </div>
                    </Container>
                </section>

                <Modal show={show} onHide={handleClose} className='mint_popup' aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Body>
                        <img src={popup_bg} alt="" className='img_fluid bg_img' />
                        <span onClick={handleClose} className='close_btn'>
                            &times;
                        </span>
                        <div className="inner_wrapper">
                            <div className="heading">
                                <img src={check_tick} alt="" />
                                <h2>minting successfull</h2>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper Ut wisi enim ad minim veniam,
                                quis nostrud exerci tation ullamcorper
                            </p>
                        </div>
                    </Modal.Body>
                </Modal>

            </main>
            <Footer />
            <ScrollButton />
        </>
    );
}

export default TotaNfts;