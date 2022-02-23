import React, { useState } from 'react';
import {
    f8_fury,
    granted,
    welcome,
    locations_lock_screen,
    red_bar,
    tab1_locked_profile,
    fb_light,
    fb_approved,
    tab2_locked_profile,
    fb_fury_light,
    fb_cleared
} from '../../assets/images';
import { Container } from 'react-bootstrap';
import { FirstTab } from '../meet-the-first-tabs';

export const TheFirsts = (props) => {
    const { Item, lock, id } = props;
    const [showMore, setshowMore] = useState(false);
    return (
        <div className='metaverse_tab1' id={id}>
            {lock === true ?
                <div className="lock_img">
                    <img
                        src={tab1_locked_profile}
                        alt=''
                        className='img_fluid'
                    />
                </div>
                :
                <div className="char_data">
                    <div className="top_sec">
                        <div className="inner_wrapper">
                            <div className="cover_img border_st">
                                <img
                                    src={Item.charImg}
                                    alt=''
                                    className='img_fluid'
                                />
                                <img
                                    src={f8_fury}
                                    alt=''
                                    className='float_img img_fluid'
                                />
                                <span className='top_left'></span>
                                <span className='top_right'></span>
                                <span className='bottom_right'></span>
                            </div>
                            <div className="wrap">
                                {
                                    Item.discription.map(item => {
                                        return (
                                            <div className="left_content" key={Math.random()}>
                                                <h5><font>{item.font}</font><span>{item.span}</span></h5>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <div className="position_img">
                            <img
                                src={granted}
                                alt=''
                                className='img_fluid'
                            />
                        </div>
                        <div className="welcome_img">
                            <img
                                src={welcome}
                                alt=''
                                className='img_fluid'
                            />
                        </div>
                    </div>
                    <div className="bottom_sec">
                        <Container fluid>
                            <div className="flex_wrap">
                                <div className="img_wrap">
                                    <img
                                        src={Item.nameImg}
                                        alt=''
                                        className='img_fluid'
                                    />
                                </div>
                                <div className="wrap">
                                    <p className="para txt_white font_Quicksand">
                                        {Item.bio}
                                    </p>
                                    <button
                                        onClick={() => setshowMore(true)}
                                    >
                                        Open C.A.S.E File #1001
                                    </button>
                                </div>
                            </div>
                        </Container>
                        <img src={Item.smoke} className='img_fluid smoke left' alt="" />
                        <img src={Item.smoke} className='img_fluid smoke right' alt="" />
                    </div>
                    {
                        showMore ?
                            <>
                                <span
                                    className='sec_close'
                                    onClick={() => setshowMore(false)}
                                >&times;</span>
                                <FirstTab
                                    Item={props.casefile}
                                />
                            </>
                            :
                            null
                    }
                </div>
            }
        </div>
    );
}

export const Locations = (props) => {
    const { Item, lock, id } = props;
    return (
        <div className='metaverse_tab3' id={id}>
            {lock === true ?
                <div className="lock_img">
                    <img
                        src={locations_lock_screen}
                        alt=''
                        className='img_fluid'
                    />
                </div>
                :
                <div className="location_info">
                    <div className="top_sec">
                        <div className="flex_wrapper">
                            <div className="cover_img border_st">
                                <img
                                    src={Item.mainImg}
                                    alt=''
                                    className='img_fluid'
                                />
                                <span className='top_left'></span>
                                <span className='top_right'></span>
                                <span className='bottom_left'></span>
                                <span className='bottom_right'></span>
                            </div>
                            <div className="discription">
                                <img
                                    src={fb_approved}
                                    alt=''
                                    className='img-fluid fb_approved'
                                />
                                <div className="wrap">
                                    {
                                        Item.discription.map(item => {
                                            return (
                                                <div className="left_content" key={Math.random()}>
                                                    <h5><font>{item.font}</font><span>{item.span}</span></h5>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="doc">
                            <p className='font_Typewriter'>{Item.doc}</p>
                        </div>
                        <div className="case_no">
                            <p className='font_Typewriter'>{Item.case}</p>
                        </div>
                        <img
                            src={red_bar}
                            alt=''
                            className='img_fluid red_bar'
                        />
                    </div>
                    <div className="bottom_sec">
                        <Container>
                            <div className="flex_box">
                                <div className="img_wrapper">
                                    <img
                                        src={Item.nameImg}
                                        alt=""
                                        className="img-fluid" />
                                </div>
                                <p className="para txt_white font_Quicksand">
                                    {Item.disc}
                                </p>
                            </div>
                        </Container>
                        <img
                            src={Item.smoke}
                            alt=''
                            className='img_fluid smoke'
                        />
                        <img
                            src={fb_light}
                            alt=''
                            className='img_fluid fb_light'
                        />
                    </div>
                </div>
            }
        </div>
    );
}

export const Vehicals = (props) => {
    const { Item, lock, id } = props;
    return (
        <div className='metaverse_tab3' id={id}>
            {lock === true ?
                <div className="lock_img">
                    <img
                        src={tab2_locked_profile}
                        alt=''
                        className='img_fluid'
                    />
                </div>
                :
                <div className="location_info">
                    <div className="top_sec">
                        <div className="flex_wrapper">
                            <div className="cover_img border_st">
                                <img
                                    src={Item.mainImg}
                                    alt=''
                                    className='img_fluid'
                                />
                                <span className='top_left'></span>
                                <span className='top_right'></span>
                                <span className='bottom_left'></span>
                                <span className='bottom_right'></span>
                            </div>
                            <div className="discription">
                                <img
                                    src={fb_cleared}
                                    alt=''
                                    className='img-fluid fb_approved'
                                />
                                <div className="wrap">
                                    {
                                        Item.discription.map(item => {
                                            return (
                                                <div className="left_content" key={Math.random()}>
                                                    <h5><font>{item.font}</font><span>{item.span}</span></h5>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="doc">
                            <p className='font_Typewriter'>{Item.doc}</p>
                        </div>
                        <div className="case_no">
                            <p className='font_Typewriter'>{Item.case}</p>
                        </div>
                        <img
                            src={red_bar}
                            alt=''
                            className='img_fluid red_bar'
                        />
                    </div>
                    <div className="bottom_sec">
                        <Container>
                            <div className="flex_box">
                                <div className="img_wrapper">
                                    <img
                                        src={Item.nameImg}
                                        alt=""
                                        className="img-fluid" />
                                </div>
                                <p className="para txt_white font_Quicksand">
                                    {Item.disc}
                                </p>
                            </div>
                        </Container>
                        <img
                            src={Item.smoke}
                            alt=''
                            className='img_fluid smoke'
                        />
                        <img
                            src={fb_fury_light}
                            alt=''
                            className='img_fluid fb_light'
                        />
                    </div>
                </div>
            }
        </div>
    );
}