import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import {
    arrows_down,
} from '../../assets/images';
import { LazyLoadImg } from '..';

function IndexSlider(props) {
    const { content, settings } = props;
    const charSlider = useRef(null);

    const [index, setindex] = useState();

    const handleClick = (i) => {
        if (i !== index) {
            setindex(prev => prev = i);
        }
    }

    useEffect(() => {
        setindex(content[0].id);
    }, [content]);

    return (
        <>
            <div className="slider_wrapper">
                <Slider
                    {...settings}
                    ref={charSlider}
                >
                    {content.map((item, i) => {
                        return (
                            <div
                                className={index === item.id ? 'select item' : 'item'}
                                onClick={() => handleClick(item.id)}
                                key={i}>
                                <LazyLoadImg
                                    url={item.img}
                                    alt=''
                                />
                                <h5 className='title font_Helvetica'>{item.name}</h5>
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
            {
                content.filter(data => data.id === index).map((item, i) => {
                    let Item = item.profile;
                    return (
                        <div key={i} className="costumes_wrapper mt-5">
                            {
                                Item.map((value, i) => {
                                    return (
                                        <LazyLoadImg
                                            url={value}
                                            alt=''
                                            key={i}
                                        />
                                    );
                                })
                            }
                        </div>
                    );
                })
            }
        </>
    );
}

export default IndexSlider;