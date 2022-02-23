import React, { useState, useEffect } from 'react';
import { Header, Footer, LazyLoadImg, ProgressiveLoader, ScrollButton } from '../../components';
import {
    creativeHd,
    creativeBanner,
    noLimitCharacter,
    imaginEngage,
    cloudIcon,
    uploadIcon,
    collective_banner_placeholder
} from '../../assets/images';

function TotaCreators() {

    useEffect(() => {
        document.title = "Tota Creators Collective | PlanerTota"
    });

    return (
        <>
            <Header />
            <main className='tota_creators top_pad'>
                <section className='creative_banner'>
                    <div className="column column_1">
                        <div className="img-wrapper">
                            <LazyLoadImg
                                url={creativeHd}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="column column_2">
                        <div className="img-wrapper">
                            <ProgressiveLoader
                                url={creativeBanner}
                                placeholder={collective_banner_placeholder}
                            />
                        </div>
                    </div>
                </section>

                <section className="noLimitSection">
                    <div className="container">
                        <div className="column column_1">
                            <div className="img-wrapper">
                                <LazyLoadImg
                                    url={noLimitCharacter}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="column column_2">
                            <div className="inner-wrapper">
                                <h1>no limits, no rules</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis nam repudiandae accusamus aspernatur officiis et necessitatibus vel, voluptates similique. Quia ab nemo assumenda, officia sapiente cum expedita optio velit.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis nam repudiandae accusamus aspernatur officiis et.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="noLimitSection2">
                    <div className="text_wrapper">
                        <div className="inner_wrapper">
                            <h1>no limits, no rules</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis nam repudiandae accusamus aspernatur officiis et necessitatibus vel, voluptates similique. Quia ab nemo assumenda, officia sapiente cum expedita optio velit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis nam repudiandae accusamus aspernatur officiis et.
                            </p>
                        </div>
                    </div>
                    <div className="images_Wrapper">
                        <div className="column column_1">
                            <LazyLoadImg
                                url={imaginEngage}
                                alt=""
                            />
                        </div>
                        <div className="column column_2">
                            <LazyLoadImg
                                url={cloudIcon}
                                alt=""
                            />
                        </div>
                    </div>
                </section>

                <section className="join_collective">
                    <div className="text_wrapper">
                        <h1>join the collective</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis nam repudiandae accusamus aspernatur officiis et necessitatibus vel, voluptates similique. Quia ab nemo assumenda, officia sapiente cum expedita optio velit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis nam repudiandae accusamus aspernatur officiis et.
                        </p>
                    </div>
                    <div className="inner_row">
                        <TotaForm />
                    </div>

                    <Footer fooClass="varient2" />
                </section>


            </main>
            <ScrollButton />

        </>
    );
}

function TotaForm() {
    const [formData, setformData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
        url: ''
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
        if (e.target.name === 'url') {
            setformData(prev => ({ ...prev, url: e.target.value }));
        }
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log('>>', formData);
        setformData({ fullName: '', phone: '', email: '', message: '', url: '' });
    }
    return (
        <form action='' autoComplete='off' onSubmit={handleSubmit} className='global_form'>
            <div className="column column_1">
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
            </div>
            <div className="column column_2">
                <div className="upload_wrapper">
                    <img src={uploadIcon} alt="" />
                    <p>Add a portfolio link or upload*</p>
                    <div className="global_input_wrapper">
                        <input
                            type="text"
                            name='url'
                            value={formData.url}
                            onChange={handleChange}
                            className='default'
                            placeholder='url' />
                    </div>
                    <div className="global_input_wrapper">
                        <button type='submit' className='bg_black text-uppercase'>Submit</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default TotaCreators;