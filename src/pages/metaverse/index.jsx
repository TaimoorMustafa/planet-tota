import React, { useEffect, useState } from 'react';
import { Header, Footer, LazyLoadImg, ActiveTabData, BasicSlider, ScrollButton } from '../../components';
import {
    metaverse_banner,
} from '../../assets/images';
import {
    charDataTab1,
    settingsTab1,
    locationsData,
    locationsSettings,
    tabItems,
    vehicalsData,
    vehicalsSettings,
} from './Data';
import { Container, Col, Row, Tab, Nav } from 'react-bootstrap';
import { TheFirsts, Vehicals, Locations } from '../../components/metaverse-tabs';

function Metaverse() {
    const [datakey, setdatakey] = useState('the-first');
    useEffect(() => {
        document.title = "Planet Tota Metaverse | PlanerTota"
    });
    return (
        <>
            <Header />
            <main>
                <section className='banner meet_banner'>
                    <div className="img_wrapper">
                        <img src={metaverse_banner} className='img_fluid' alt='' />
                    </div>
                </section>
                <section className='sec_space'>
                    <Container>
                        <Row>
                            <Col>
                                <h4 className='sub_hd txt_white text-uppercase font_Quicksand'>unlock the excitement, literally</h4>
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
                                            tabItems.map(item => {
                                                return (
                                                    <Nav.Item key={Math.random()}
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
                                <Col lg={12} className='px-0'>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="the-first">
                                            <section className='character_sec mt-5'>
                                                <BasicSlider
                                                    content={charDataTab1}
                                                    settings={settingsTab1}
                                                />
                                                <div className="">
                                                    {
                                                        charDataTab1.map(item => {
                                                            return (
                                                                <TheFirsts
                                                                    key={Math.random()}
                                                                    Item={item.profile}
                                                                    id={item.id}
                                                                    lock={item.lock}
                                                                    casefile={item.casefile}
                                                                />
                                                            );
                                                        })
                                                    }
                                                </div>
                                            </section>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="vehicles">
                                            <section className='character_sec mt-5'>
                                                <BasicSlider
                                                    content={vehicalsData}
                                                    settings={locationsSettings}
                                                />
                                                <div className="">
                                                    {
                                                        vehicalsData.map(item => {
                                                            let Item = item.profile;
                                                            return (
                                                                <Vehicals
                                                                    key={Math.random()}
                                                                    Item={Item}
                                                                    id={item.id}
                                                                    lock={item.lockData}
                                                                />
                                                            );
                                                        })
                                                    }
                                                </div>
                                            </section>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="locations">
                                            <section className='character_sec mt-5'>
                                                <BasicSlider
                                                    content={locationsData}
                                                    settings={locationsSettings}
                                                />
                                                <div className="">
                                                    {
                                                        locationsData.map(item => {
                                                            let Item = item.profile;
                                                            return (
                                                                <Locations
                                                                    key={Math.random()}
                                                                    Item={Item}
                                                                    id={item.id}
                                                                    lock={item.lockData}
                                                                />
                                                            );
                                                        })
                                                    }
                                                </div>
                                            </section>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="guns">
                                            <Container>
                                                <p className='para mt-5 txt_white font_Quicksand'>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur!
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur!
                                                </p>
                                            </Container>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="badges">
                                            <Container>
                                                <p className='para mt-5 txt_white font_Quicksand'>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur!
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur!
                                                </p>
                                            </Container>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="gadgets">
                                            <Container>
                                                <p className='para mt-5 txt_white font_Quicksand'>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur!
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur!
                                                </p>
                                            </Container>
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

export default Metaverse;
