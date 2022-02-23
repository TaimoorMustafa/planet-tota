import React, { useRef } from 'react';
import Slider from 'react-slick';
// import {
//     arrows_down,
// } from '../../assets/images';

function ModalSlider(props) {
    const { content, loadModal, flag } = props;
    const slider = useRef(null);

    const settings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        className: "modal_slider",
        responsive: [
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <>
            <div className="slider_wrapper">
                <Slider
                    {...settings}
                    ref={slider}
                >
                    {content.map((item, i) => {
                        return (
                            <div
                                className="item_wrapper"
                                key={i}>
                                {flag ?
                                    <div
                                        className="wrapper"
                                        onClick={() => loadModal(item.source, flag)}>
                                        <img src={item.poster} alt="" className="img_fluid" />
                                    </div>
                                    :
                                    <div
                                        className="wrapper"
                                        onClick={() => loadModal(item, flag)}>
                                        <img src={item} alt="" className="img_fluid" />
                                    </div>
                                }
                            </div>
                        );
                    })}
                </Slider>
                {/* <div className="prev_btn nav_btn">
                    <img src={arrows_down} alt="" onClick={() => slider.current.slickPrev()} className="img_fluid" />
                </div>
                <div className="next_btn nav_btn">
                    <img src={arrows_down} alt="" onClick={() => slider.current.slickNext()} className="img_fluid" />
                </div> */}
            </div>
        </>
    );
}

export default ModalSlider;