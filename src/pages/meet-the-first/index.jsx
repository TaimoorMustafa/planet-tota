import React, { useEffect, useState } from 'react';
import { Header, Footer, ActiveTabData, LazyLoadImg, ScrollButton } from '../../components';
import {
    the_first_banner,
} from '../../assets/images';
import { BasicSlider } from '../../components';
import { Container, Col, Row, Tab, Nav } from 'react-bootstrap';
import {
    firstData,
    firstSettings,
    classification,
    classSettings,
    cropData,
    corpSettings,
    bodiesData,
    bodiesSettings,
    tabItems
} from './Data';
import { FirstTab, ClassificationTab, CorpsTab, BodiesTab } from '../../components/meet-the-first-tabs';


function MeetTheFirst() {

    const [datakey, setdatakey] = useState('the-first');

    useEffect(() => {
        document.title = "Meet The First | PlanerTota"
    });



    return (
        <>
            <Header />
            <main>
                <section className='banner meet_banner'>
                    <div className="img_wrapper">
                        <img src={the_first_banner} className='img_fluid' alt='' />
                    </div>
                </section>
                <section className='sec_space'>
                    <Container>
                        <Row>
                            <Col>
                                <h4 className='sub_hd txt_white text-uppercase font_Quicksand'>EXPLORE THE PLANET</h4>
                                <p className='para txt_white font_Quicksand'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur!
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <ActiveTabData
                    flag={datakey}
                    data={tabItems}
                />
                <section className='character_main_wrapper sec_space'>
                    <Tab.Container id="char-catagory-tabs" defaultActiveKey="the-first">
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <Nav>
                                        {
                                            tabItems.map((item, i) => {
                                                return (
                                                    <Nav.Item key={i}
                                                        onClick={() => setdatakey(item.eventKey)}
                                                    >
                                                        <Nav.Link eventKey={item.eventKey}>
                                                            <div className="common_icon_st">
                                                                <LazyLoadImg
                                                                    url={item.img}
                                                                    alt="bannerImg"
                                                                />
                                                            </div>
                                                            <h5>
                                                                {item.hd}
                                                            </h5>
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                );
                                            })
                                        }
                                    </Nav>
                                </Col>
                            </Row>
                        </Container>
                        <Container fluid>
                            <Row>
                                <Col lg={12}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="the-first">
                                            <section className='character_sec the_first_tab_sec mt-5'>
                                                <BasicSlider
                                                    content={firstData}
                                                    settings={firstSettings}
                                                />
                                                <div className="">
                                                    {
                                                        firstData.map((item, i) => {
                                                            let Item = item.profile;
                                                            return (
                                                                <FirstTab
                                                                    key={i}
                                                                    Item={Item}
                                                                    id={item.id}
                                                                />
                                                            );
                                                        })
                                                    }
                                                </div>
                                            </section>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="classification">
                                            <section className='character_sec classification_tab_sec mt-5'>
                                                <BasicSlider
                                                    content={classification}
                                                    settings={classSettings}
                                                />
                                                <div className="">
                                                    {
                                                        classification.map((item, i) => {
                                                            return (
                                                                <ClassificationTab
                                                                    key={i}
                                                                    Item={item.discription}
                                                                    id={item.id}
                                                                />
                                                            );
                                                        })
                                                    }
                                                </div>
                                            </section>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="corps">
                                            <section className='character_sec corp_tab_sec mt-5'>
                                                <BasicSlider
                                                    content={cropData}
                                                    settings={corpSettings}
                                                />
                                                <div className="">
                                                    {
                                                        cropData.map((item, i) => {
                                                            return (
                                                                <CorpsTab
                                                                    key={i}
                                                                    Item={item.discription}
                                                                    id={item.id}
                                                                />
                                                            );
                                                        })
                                                    }
                                                </div>
                                            </section>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="bodies">
                                            <section className='character_sec bodies_tab_sec mt-5'>
                                                <BasicSlider
                                                    content={bodiesData}
                                                    settings={bodiesSettings}
                                                />
                                                <div className="">
                                                    {
                                                        bodiesData.map((item, i) => {
                                                            return (
                                                                <BodiesTab
                                                                    key={i}
                                                                    Item={item.discription}
                                                                    id={item.id}
                                                                />
                                                            );
                                                        })
                                                    }
                                                </div>
                                            </section>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Container>
                    </Tab.Container>
                </section>
            </main>
            <Footer />
            <ScrollButton />
        </>
    );
}

export default MeetTheFirst;
