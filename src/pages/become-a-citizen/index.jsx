import React, { useEffect } from 'react';
import { Header, Footer, LazyLoadImg, ScrollButton } from '../../components';
import {
    passports_banner,
    passports_img2,
    passports_img_bg,
    DOIT,
} from '../../assets/images';

import { passports } from './Data';

function BecomeACitizen() {

    useEffect(() => {
        document.title = "Become A Citizen | PlanerTota";
    });

    return (
        <>
            <Header />
            <main className=''>

                <section className='becom_citizen_banner pt-0 pt-md-5'>
                    <div className="img-wrapper py-4 py-md-5">
                        <LazyLoadImg
                            url={passports_banner}
                            alt='bannerImg'
                            className="bg-img-animation"
                        />
                    </div>
                    <div className="container">
                        <div className="inner-wrapper ">
                            <h1 className='font_Helvetica text-white mb-3'>UNLOCK THE PRIVILIDGES</h1>
                            <p className='font_Helvetica text-white'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                            </p>
                        </div>
                    </div>
                </section>

                <section className='second_banner'>
                    <div className="img-wrapper">
                        <LazyLoadImg
                            url={passports_img_bg}
                            alt=''
                            otherClass='bg-img'
                        />
                        <LazyLoadImg
                            url={passports_img2}
                            alt=''
                            otherClass='pass-img'
                        />
                    </div>
                </section>

                <section className="passports_main_wrapper mb-5 pb-5">
                    <Passport
                        passports={passports}
                    />
                </section>

            </main>
            <Footer />
            <ScrollButton />
        </>
    );
}

export default BecomeACitizen;


function Passport(props) {
    const { passports } = props;
    return (
        <>
            {
                passports.map((item, i) => {
                    let lockIcon = item.lockIcon;
                    return (
                        <section key={i} className={item.classes}>
                            <div className="upper_row">
                                <div className="shadow"></div>
                                <h1 className="passport_title_outline font_Helvetica_Bold">{item.bgTitle}</h1>
                                <div className="column column_1">
                                    <div className="img_wrapper">
                                        <LazyLoadImg
                                            url={item.cardImg}
                                            alt=''
                                        />
                                    </div>
                                </div>
                                <div className="column column_2">
                                    <div className="inner_wrapper">
                                        <h1 className="passport_title font_Helvetica_Bold">{item.title}</h1>
                                        <div className="img_wrapper">
                                            <LazyLoadImg
                                                url={item.cardSliceImg}
                                                alt=''
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lower_row">
                                <p className='font_Helvetica text-white'>
                                    {item.para}
                                </p>
                                <div className="locker_room">
                                    {
                                        item.benefits.map((item, i) => {
                                            return (
                                                <div key={i} className={i === 0 ? "locker first_locker" : "locker"}>
                                                    {i === 0 &&
                                                        <div className="img-wrapper doit_box">
                                                            <img src={DOIT} alt="" />
                                                        </div>
                                                    }
                                                    <h4>{item.hd}</h4>
                                                    <div className="box">
                                                        <div className="img-wrapper">
                                                            {item.lock ?
                                                                <LazyLoadImg
                                                                    url={lockIcon}
                                                                    alt=''
                                                                />
                                                                :
                                                                <ul>
                                                                    {item.list.map((item, i) => {
                                                                        return (
                                                                            <li key={i}>{item}</li>
                                                                        );
                                                                    })}
                                                                </ul>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </section>
                    );
                })
            }
        </>
    );
}