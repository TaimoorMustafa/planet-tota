import React, { useState } from 'react';
// import React, { useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import { Header, Footer, ScrollButton } from '../../components';
import { tabsData } from './Data.js';
import { Link } from 'react-router-dom';

function AboutUs() {

    return (
        <>
            <Header />
            <main className='top_pad'>
                <section className="about_us">
                    <div className="custom_row row_1">
                        <div className="column_textual">
                            <div className="textual-box">
                                <div className="center_text">
                                    <p>
                                        THE CLICHE <br /><br />
                                        Written by <br />
                                        <span className='writer_name'>Faisal Khan</span> <br /><br />
                                        Based on experiences at Tota
                                    </p>
                                </div>
                                <div className="bottom_text">
                                    <div className="col_left">
                                        <p>

                                            Tota Pte. Ltd. , <br />
                                            Lorem ipsum dolor sit amet, <br />
                                            ipsum dolor sit amet, Singapore
                                        </p>
                                    </div>
                                    <div className="col_left">
                                        <p>
                                            Planet Tota Vietnam <br />
                                            Lorem ipsum dolor sit amet, <br />
                                            ipsum dolor sit amet, Singapore <br />
                                        </p>
                                    </div>
                                    <div className="col_left email_col">
                                        <p>hello@planettota.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column_date">

                        </div>
                    </div>
                </section>

                <section className='about_us'>
                    <Mytab
                        tabsData={tabsData}
                    />
                </section>

                <section className="about_us contact_form_wrapper">
                    <div className="custom_row row_1">
                        <div className="column_textual">
                            <div className="textual-box">
                                <p className='to_be_continued'>To be continued...</p>

                                <div className="two_column_row">
                                    <div className="text">
                                        <div className="inner_wrapper">
                                            <h2>take the story forward</h2>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia odio corporis suscipit itaque eveniet iure eius blanditiis sit alias, cupiditate ipsum asperiores. Omnis praesentium laborum modi nulla corrupti earum quos? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia odio eveniet</p>

                                            <p>
                                                Drop in a note or write to us at: <br />
                                                hello@planettota.com
                                            </p>
                                        </div>

                                    </div>
                                    <div className="form_box">
                                        <AboutForm />
                                    </div>
                                </div>
                                <Footer fooClass="varient2" />
                            </div>
                        </div>
                        <div className="column_date">

                        </div>
                    </div>
                </section>
            </main>
            <ScrollButton />
        </>
    );
}

export default AboutUs;

function AboutForm() {

    const [formData, setformData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        if (e.target.name === 'full-name') {
            setformData(prev => ({ ...prev, fullName: e.target.value }));
        }
        if (e.target.name === 'phone') {
            setformData(prev => ({ ...prev, phone: e.target.value }));
        }
        if (e.target.name === 'email') {
            setformData(prev => ({ ...prev, email: e.target.value }));
        }
        if (e.target.name === 'message') {
            setformData(prev => ({ ...prev, message: e.target.value }));
        }
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log('>>', formData);
        setformData({ fullName: '', phone: '', email: '', message: '' });
    }
    return (
        <form className='global_form' autoComplete='off' onSubmit={handleSubmit}>
            <div className="global_input_wrapper">
                <input
                    type="text"
                    required
                    name='full-name'
                    value={formData.fullName}
                    onChange={handleChange}
                    className='bg_black'
                    placeholder='Name*' />
            </div>
            <div className="global_input_wrapper">
                <input
                    type="email"
                    required
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='bg_black'
                    placeholder='Email*' />
            </div>
            <div className="global_input_wrapper">
                <input
                    type="text"
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className='bg_black'
                    placeholder='Phone Number' />
            </div>
            <div className="global_input_wrapper">
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className='bg_black'
                    rows='7'
                    placeholder='Message'></textarea>
            </div>
            <div className="global_input_wrapper text-end">
                <button
                    type='submit'
                    className='bg_black text-uppercase'
                >Submit</button>
            </div>
        </form>
    );
}


function Mytab(props) {

    return (
        <Accordion defaultActiveKey="0" className="about_accordion">
            {
                props.tabsData.map((item, i) => {
                    return (
                        <Accordion.Item eventKey={i} key={i}>
                            <Accordion.Header>{item.tabhd}</Accordion.Header>
                            <Accordion.Body>
                                <div className="custom_row">
                                    <div className="column_textual">
                                        <div className="textual-box">
                                            {item.img &&
                                                <img src={item.img} alt='script-img' />
                                            }
                                            {item.para &&
                                                <p>{item.para}</p>
                                            }
                                        </div>
                                    </div>
                                    <div className="column_date">
                                        {item.date &&
                                            <p>{item.date}</p>
                                        }
                                    </div>
                                </div>
                                {item.hd &&
                                    <div className="heading">
                                        <h1>{item.hd}</h1>
                                    </div>
                                }
                                {item.bottomsec &&
                                    item.bottomsec.map((item, i) => {
                                        return (
                                            <div className="custom_row press_view mb-3" key={i}>
                                                <div className="column_textual">
                                                    <div className="inner-wrapper">
                                                        <div className="first">

                                                        </div>
                                                        <div className="second">
                                                            <h4>{item.hd}</h4>
                                                            <p>
                                                                {item.para}
                                                                <Link to="/">Read More</Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="column_date">
                                                    <p>{item.date}</p>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </Accordion.Body>
                        </Accordion.Item>
                    );
                })
            }
        </Accordion>
    );
}