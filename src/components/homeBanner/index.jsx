import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { arrows_down } from '../../assets/images';
import { Link } from 'react-router-dom';

function HomeBanner(props) {
    const { content, id } = props;
    const [activeNav, setactiveNav] = useState(0);
    const slider = useRef();

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        fade: false,
        className: 'full_page_slider',
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: function (currentSlide, nextSlide) {
            setactiveNav(prev => prev = nextSlide);
        }
    }

    const updateSlide = (index) => {
        slider.current.slickGoTo(index);
        setactiveNav(prev => prev = index);
    }


    return (
        <section className='home_banner' id={id}>
            <Slider
                {...settings}
                ref={slider}
            >
                {
                    content.map((item, i) => {
                        return (
                            <Link
                                className="img_wrapper"
                                to={item.url}
                                key={i}>
                                <img
                                    src={item.img}
                                    alt={item.alt}
                                />
                            </Link>
                        );
                    })
                }
            </Slider>
            <div className="bottom_navigation">
                <div className="nav_wrapper">
                    <ul>
                        <li>
                            <button onClick={() => slider.current.slickPrev()}>
                                <img src={arrows_down} alt="" className='img_fluid arrow_left' />
                            </button>
                        </li>
                        <li>
                            <button onClick={() => slider.current.slickNext()}>
                                <img src={arrows_down} alt="" className='img_fluid arrow_right' />
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="dots_wrapper">
                    <ul>
                        {content.map((v, i) => {
                            return <li key={i} className={activeNav === i ? 'active' : ''}><button onClick={() => updateSlide(i)}><FontAwesomeIcon icon={faCircle} /></button></li>
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default HomeBanner;