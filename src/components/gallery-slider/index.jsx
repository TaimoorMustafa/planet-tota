import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import {
    arrows_down,
} from '../../assets/images';
import { LazyLoadImg } from '..';

function BasicSlider(props) {
    const { slides, settings } = props;
    const charSlider = useRef(null);

    const [index, setindex] = useState();

    return (
        <>
            <div className="slider_wrapper">
                <Slider
                    {...settings}
                    ref={charSlider}
                >
                    {slides.map((item, i) => {
                        return (
                            <div
                                className='item'
                                key={i}
                                onClick={() => console.log('this')}
                            >
                                <LazyLoadImg
                                    url={item.img}
                                    alt=''
                                />
                            </div>
                        );
                    })}
                </Slider>
                <div className="next_btn nav_btn">
                    <img src={arrows_down} alt="" onClick={() => charSlider.current.slickNext()} className="img_fluid" />
                </div>
                <div className="prev_btn nav_btn">
                    <img src={arrows_down} alt="" onClick={() => charSlider.current.slickPrev()} className="img_fluid" />
                </div>
            </div>
        </>
    );
}

export default BasicSlider;