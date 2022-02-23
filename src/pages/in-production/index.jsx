import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal, Carousel, Button } from 'react-bootstrap';
import {
    Header,
    Footer,
    ScrollButton,
    BasicSlider,
    ReadMore
} from '../../components';
import {
    cyclope_eye,
    play_icon,
    arrow_right,
    bg_blue,
    bg_blue2,
    bg_red,
    dote_poster1,
    dote_poster2,
    hantu_poster1,
    hantu_poster2,
    kid_poster1,
    kid_poster2,
    productaion_banner,
    sep_poster1,
    sep_poster2,
    sep_poster3,
    sep_poster4,
    video_thumbnail1,
    video_thumbnail2,
    video_thumbnail3,
} from '../../assets/images';
import {
    slides,
    settings,
    productionData,
} from './Data';
import { useNavigate } from 'react-router-dom';
import { VideoPlayer } from '../../components';
import video from '../../assets/video/placeholder.mov';

function InProduction() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [source, setsource] = useState(false);

    useEffect(() => {
        document.title = "In Production | PlanerTota";
    });

    const handleClose = (value) => setShow(value);

    const loadModal = (item) => {
        setShow(true);
        setsource(item);
    }

    return (
        <>
            <Header />
            <main className='bg_dark in_production_main'>
                <section className='banner in_production_banner'>
                    <div className="img_wrapper">
                        <img src={productaion_banner} alt='' className='img_fluid' />
                    </div>
                </section>

                <section className="sec_space decsription-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="para txt_white font_Quicksand">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur!</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sep_section">
                    <img src={bg_blue2} alt="" className='blue_smoke' />
                    <div className="custom_row">
                        <div className="column column_images">
                            <Carousel fade>
                                {
                                    [sep_poster1, sep_poster2, sep_poster3, sep_poster4].map(item => {
                                        return (
                                            <Carousel.Item key={Math.random()}>
                                                <img
                                                    src={item}
                                                    alt='' className='img_fluid' />
                                            </Carousel.Item>
                                        );
                                    })
                                }
                            </Carousel>
                        </div>
                        <div className="column column_content">
                            <div className="inner-wrapper">
                                <h4 className='sub_hd txt_white text-uppercase font_Quicksand'>Sep, in production <img src={cyclope_eye} alt='' /></h4>
                                <p className='para txt_white font_Quicksand'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur!
                                </p>

                                <h5 className='text-uppercase font_Quicksand'>watch the teasers</h5>

                                <div className="videos_wrapper">
                                    {
                                        [video_thumbnail1, video_thumbnail2, video_thumbnail3].map(item => {
                                            return (
                                                <Button
                                                    className='video_button'
                                                    key={Math.random()}
                                                    onClick={() => loadModal(video)}
                                                >
                                                    <img src={item} className='poster_img img_fluid' alt='' />
                                                    <img src={play_icon} className='play_icon_img' alt='' />
                                                </Button>
                                            );
                                        })
                                    }
                                </div>

                                <Button
                                    className='get_to_know'
                                    onClick={() => navigate('/')}
                                >
                                    GET TO KNOW SEP AND THE OTHER "FIRSTS". CLICK HERE
                                    <img src={arrow_right} alt="" />
                                </Button>

                            </div>
                        </div>
                    </div>
                </section>

                <section className='production_intro sec_space'>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <h4 className='sub_hd txt_white text-uppercase font_Quicksand'>more to follow</h4>
                                <p className='para txt_white font_Quicksand'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur!
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="comming_soon">
                    <div className="custom_row">
                        <div className="column first">
                            <Carousel fade data-pause="false">
                                {
                                    [kid_poster1, kid_poster2].map(item => {
                                        return (
                                            <Carousel.Item key={Math.random()}>
                                                <img
                                                    src={item}
                                                    alt='' className='img_fluid' />
                                            </Carousel.Item>
                                        );
                                    })
                                }
                            </Carousel>
                        </div>
                        <div className="column second">
                            <Carousel fade>
                                {
                                    [hantu_poster1, hantu_poster2].map(item => {
                                        return (
                                            <Carousel.Item key={Math.random()}>
                                                <img
                                                    src={item}
                                                    alt='' className='img_fluid' />
                                            </Carousel.Item>
                                        );
                                    })
                                }
                            </Carousel>
                        </div>
                        <div className="column third">
                            <Carousel fade>
                                {
                                    [dote_poster1, dote_poster2].map(item => {
                                        return (
                                            <Carousel.Item key={Math.random()}>
                                                <img
                                                    src={item}
                                                    alt='' className='img_fluid' />
                                            </Carousel.Item>
                                        );
                                    })
                                }
                            </Carousel>
                        </div>
                    </div>
                </section>

                <section className='production_intro'>
                    <img src={bg_blue} alt="" className='img_fluid blue_smoke' />
                    <img src={bg_red} alt="" className='img_fluid red_smoke' />
                    <Container className='heading_intro'>
                        <Row>
                            <Col lg={12}>
                                <h4 className='sub_hd txt_white text-uppercase font_Quicksand'><img src={cyclope_eye} alt='' />act 1, roadmapped</h4>
                                <p className='para txt_white font_Quicksand'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur!
                                </p>
                            </Col>
                        </Row>
                    </Container>

                    <div className='character_container'>
                        <div className="basic_slider_wrapper">
                            <BasicSlider
                                content={slides}
                                settings={settings}
                            />

                            {productionData.map(item => {
                                return (
                                    <CharacterSec
                                        key={Math.random()}
                                        character={item}
                                        myClass={item.myClass}
                                    />
                                );
                            })}

                        </div>
                    </div>
                </section>


            </main>
            <Footer />
            <ScrollButton />
            <MyModal
                show={show}
                handleClose={handleClose}
                modalclass='myModal'
                url={source}
            />
        </>
    );
}

export default InProduction;


const CharacterSec = (props) => {
    const { character, myClass } = props;
    const navigate = useNavigate();
    return (
        <div className={myClass}>
            <div className="char_img_box">
                <img src={character.poster} alt="" className='img_fluid' />
            </div>
            <div className="char_content">
                <div className="inner inner1" id={character.locate1}>
                    <div className="timeline left">
                        <div className="inner_box">
                            <span className="triangle">&#x25B6;</span>
                            <span dangerouslySetInnerHTML={{ __html: character.timeline1 }}></span>
                        </div>
                        <div className='daimond daimond_top'>
                            <div></div>
                        </div>
                        <div className='daimond daimond_bottom'>
                            <div></div>
                        </div>
                    </div>
                    <div className="char_title_logo" >
                        <img src={character.titleImg1} alt="" />
                    </div>
                    <ReadMore
                        query='670'
                        otherclass='description small-para'
                    >
                        {character.para1}
                    </ReadMore>
                    <Button
                        className='get_to_know'
                        onClick={() => navigate(character.btn1Link)}
                    >
                        GET TO KNOW CHO MUC AND THE OTHER "FIRSTS". CLICK HERE
                        <img src={arrow_right} alt="" />
                    </Button>
                </div>
                {character.sec2 ?
                    <div className="inner inner2" id={character.locate2}>
                        <div className="timeline left">
                            <div className="inner_box">
                                <span className="triangle">&#x25B6;</span>
                                {/* <span>episodic series <br /> live-action <br /> 2026</span> */}
                                <span dangerouslySetInnerHTML={{ __html: character.timeline2 }}></span>
                            </div>
                            <div className='daimond daimond_top'>
                                <div></div>
                            </div>
                            <div className='daimond daimond_bottom'>
                                <div></div>
                            </div>
                        </div>
                        <div className="char_title_logo">
                            <img src={character.titleImg2} alt="" />
                        </div>
                        <ReadMore
                            query='670'
                            otherclass='description small-para pt-0'
                        >
                            {character.para2}
                        </ReadMore>

                        <Button
                            className='get_to_know'
                            onClick={() => navigate(character.btn1Link)}>
                            GET TO KNOW MILO AND THE OTHER "FIRSTS". CLICK HERE
                            <img src={arrow_right} alt="" />
                        </Button>
                    </div>
                    :
                    ''
                }
                {
                    character.lastItem ?
                        <div className="inner inner3">
                            <div className="timeline left">
                                <div className="inner_box">
                                    <span className="triangle">&#x25B6;</span>
                                    <h4 className='sub_hd txt_white text-uppercase font_Quicksand'>act 2 will unfold</h4>
                                </div>
                            </div>
                        </div>
                        :
                        ''
                }
            </div>
        </div>
    );
}

function MyModal(props) {
    const { handleClose, show, modalclass, url } = props;

    return (
        <Modal centered show={show} onHide={handleClose} className={modalclass}>
            <span onClick={() => handleClose(false)} className='closeModal'>
                &times;
            </span>
            <div className="content">
                <VideoPlayer source={url} />
            </div>
        </Modal>
    );
}