
import React from 'react';
import { tab_bluesmoke_l, tab_bluesmoke_r } from '../../assets/images';
import { Container, Row, Col } from 'react-bootstrap';

const ActiveTabData = (props) => {
    return (
        <>
            {props.data.filter(data => data.eventKey === props.flag).map(item => {
                return (
                    <section className='mt-5 tab_disc_data' key={Math.random()}>
                        <Container>
                            <Row>
                                <Col>
                                    <h4 className='sub_hd txt_white text-uppercase font_Quicksand'>{item.disc.hd}</h4>
                                    <p className='para txt_white font_Quicksand'>
                                        {item.disc.para}
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                        <div className="smoke_wrapper">
                            <img src={tab_bluesmoke_l} alt="" className="img_fluid" />
                            <img src={tab_bluesmoke_r} alt="" className="img_fluid" />
                        </div>
                    </section>
                );
            })}
        </>
    );
}

export default ActiveTabData;