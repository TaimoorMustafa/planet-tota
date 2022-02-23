import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import {
    arrows_down,
} from '../../assets/images';
import { LazyLoadImg } from '..';

import { HashLink } from 'react-router-hash-link';

function BasicSlider(props) {
    const { content, settings } = props;
    const charSlider = useRef(null);

    const [index, setindex] = useState();

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
                        let link = window.location.pathname + `/#${item.id}`;
                        return (
                            <HashLink
                                className={index === item.id ? 'select item' : 'item'}
                                key={Math.random()}
                                smooth
                                onClick={() => setindex(item.id)}
                                to={link}
                            >
                                {
                                    item.lockData ?
                                        <LazyLoadImg
                                            url={item.lockSlide}
                                            alt='' />
                                        :
                                        <>
                                            <LazyLoadImg
                                                url={item.img}
                                                alt='' />
                                            {item.name &&
                                                <h5 className="title">
                                                    {item.name}
                                                </h5>
                                            }
                                            {item.release &&
                                                <div className="release">
                                                    <h5
                                                        dangerouslySetInnerHTML={{ __html: item.release }}
                                                    >
                                                    </h5>
                                                </div>
                                            }
                                        </>
                                }
                            </HashLink >
                        );
                    })}
                </Slider>
                <div className="prev_btn nav_btn">
                    <img src={arrows_down} alt="" onClick={() => charSlider.current.slickPrev()} className="img_fluid" />
                </div>
                <div className="next_btn nav_btn">
                    <img src={arrows_down} alt="" onClick={() => charSlider.current.slickNext()} className="img_fluid" />
                </div>
            </div>
        </>
    );
}

export default BasicSlider;