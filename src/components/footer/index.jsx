import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fooNavItems, socialItems } from './Data';

function Footer(props) {
    return (
        <footer className={props.fooClass && props.fooClass}>
            <Container fluid>
                <Row>
                    <Col>
                        <div className="flex_wrapper">
                            <ul className='foo_links'>
                                <Li li={fooNavItems} />
                            </ul>
                            <ul className='socials'>
                                <SocialLi li={socialItems} />
                                <li>
                                    <p>Write to us at hello@planettoa.com</p>
                                </li>
                            </ul>
                            <div className="copyright">
                                <p>&copy; Tota Pte. Ltd. All rights reserved.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

function Li(props) {
    const { li} = props;
    return (
        <>
            {li.map((item, i) => {
                return <li key={i}><Link to={item.url}>{item.txt}</Link></li>;
            })}
            </>
    );
}

function SocialLi(props) {
    const { li } = props;
    return (
        <>
            {li.map((item, i) => {
                return <li key={i}><Link to={item.url}><FontAwesomeIcon icon={item.icon} /></Link></li>;
            })}
        </>
    );
}

export default Footer;