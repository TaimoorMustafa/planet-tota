import React, { useState, useEffect } from 'react'
import { Header, Footer, LazyLoadImg, ScrollButton, ProgressiveLoader, ReadMore } from '../../components';
import {
    exp_banner,
} from '../../assets/images';
import { sectionData } from './Data';
import { Row, Container, Col } from 'react-bootstrap';

function ExploreSynergies() {

    useEffect(() => {
        document.title = "Explore Synergies | PlanerTota";
    });
    return (
        <>
            <Header />
            <main>
                <section className='banner meet_banner'>
                    <div className="img_wrapper">
                        <ProgressiveLoader
                            url={exp_banner}
                            placeholder={exp_banner}
                        />
                    </div>
                </section>
                <section className='sec_space'>
                    <Container>
                        <Row>
                            <Col>
                                <h4 className='sub_hd txt_white text-uppercase font_Quicksand'>TOGETHER, FURTHER</h4>
                                <p className='para txt_white font_Quicksand'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur!
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <>
                    {
                        sectionData.map((item, i) => {
                            return (
                                <ExpSections
                                    key={i}
                                    character1={item.character1}
                                    character2={item.character2}
                                    titleImg={item.titleImg}
                                    para={item.para}
                                    btntxt={item.btntxt}
                                    successMsg={item.successMsg}
                                    bottomPara={item.bottomPara}
                                />
                            );
                        })
                    }
                </>

            </main>
            <Footer />
            <ScrollButton />
        </>
    );
}

export default ExploreSynergies;

function ExpSections(props) {
    const [showMsg, setshowMsg] = useState(false);
    const [loadForm, setloadForm] = useState(false);

    const [formData, setformData] = useState({
        fullName: '',
        email: '',
        cName: '',
        phone: '',
        message: ''
    });

    useEffect(() => {
        if (showMsg === true) {
            setTimeout(() => {
                setshowMsg(false);
            }, 3000);
        }
    }, [showMsg]);

    const handleChange = (e) => {
        if (e.target.name === 'full-name') {
            setformData(prev => ({ ...prev, fullName: e.target.value }));
        }
        if (e.target.name === 'phone') {
            setformData(prev => ({ ...prev, phone: e.target.value }));
        }
        if (e.target.name === 'c-name') {
            setformData(prev => ({ ...prev, cName: e.target.value }));
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
        setformData({ fullName: '', cName: '', phone: '', email: '', message: '' });
        setshowMsg(true);
        setloadForm(false);
    }

    const { character1, character2, titleImg, para, btntxt, successMsg, bottomPara } = props;
    return (
        <section className='exp_characters'>
            <div className="img_wrapper character1">
                <LazyLoadImg
                    url={character1}
                    alt=''
                />
            </div>
            <div className="content_box">
                <div className="icon_wrapper">
                    <LazyLoadImg
                        url={titleImg}
                        alt=''
                    />
                </div>
                {loadForm ?
                    <>
                        <form
                            className='global_form'
                            action=""
                            autoComplete='off'
                            onSubmit={handleSubmit}
                        >
                            <div className="global_input_wrapper">
                                <input
                                    type="text"
                                    required
                                    name='full-name'
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className='default border-0'
                                    placeholder='Name*' />
                            </div>
                            <div className="global_input_wrapper">
                                <input
                                    type="email"
                                    required
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='default border-0'
                                    placeholder='Email*' />
                            </div>
                            <div className="global_input_wrapper">
                                <input
                                    type="text"
                                    name='c-name'
                                    value={formData.cName}
                                    onChange={handleChange}
                                    className='default border-0'
                                    placeholder="Company's Name" />
                            </div>
                            <div className="global_input_wrapper">
                                <input
                                    type="text"
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className='default border-0'
                                    placeholder='Phone Number' />
                            </div>
                            <div className="global_input_wrapper mb-0">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className='default border-0'
                                    rows='7'
                                    placeholder='Message'></textarea>
                            </div>
                            <div className="text-center">
                                <button
                                    type='submit'
                                    className='text-uppercase'
                                >Submit</button>
                            </div>

                        </form>
                    </>
                    :
                    <div className="inner_wrapper">
                        {showMsg ?
                            <p className='para'>
                                {successMsg}
                            </p>
                            :
                            <ReadMore query='991'>
                                {para}
                            </ReadMore>
                        }
                        {showMsg ?
                            ''
                            :
                            <div className="bottom_wrapper">
                                <button
                                    onClick={() => setloadForm(true)}
                                    className='text-uppercase'
                                >{btntxt}</button>

                                <p>{bottomPara}</p>
                            </div>
                        }
                    </div>
                }
            </div>
            <div className="img_wrapper character2">
                <LazyLoadImg
                    url={character2}
                    alt=''
                />
            </div>
        </section >
    );
}