import React, { useEffect } from 'react'
// import React, { useEffect, useState } from 'react'
// import { CountDownTimer, Header, HomeBanner, Footer, Loader, ScrollButton } from '../../components';
import { Header, HomeBanner, Footer, Loader, ScrollButton } from '../../components';
import { banners, slides } from './Data';
// import { banners, slides, nft } from './Data';
import { useNavigate } from 'react-router-dom';
// import { useNavigate, Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDiscord, faTelegramPlane, faTwitter } from '@fortawesome/free-brands-svg-icons';

function HomePage() {

    // const [isFinished, setisFinished] = useState(false);

    useEffect(() => {
        document.title = "Home | PlanerTota";
    });

    // const checkFinished = (i) => {
    //     return setisFinished(i);
    // }

    const navigate = useNavigate();

    return (
        <>
            <Header />
            <HomeBanner
                content={slides}
                id='req_sec1'
            />
            {/* <>
                {
                    isFinished
                        ?
                        <HomeBanner
                            content={slides}
                            id='req_sec1'
                        />
                        :
                        <NftComingSoon
                            checkFinished={checkFinished}
                        />
                }
            </> */}
            <section className='home_grid'>
                <div className="inner-section">
                    {banners.map((item, i) => {
                        return (
                            <div className="grid_item" key={i}>
                                <button
                                    className='link_btn'
                                    id={item.id}
                                    onClick={() => navigate(item.url)}>
                                    <Loader
                                        src={item.img}
                                    />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </section>
            <Footer />
            <ScrollButton />
        </>
    );
}

export default HomePage;

// function NftComingSoon(props) {
//     const navigate = useNavigate();
//     return (
//         <div className='coming_soon_nft'>
//             <div className="img_wrapper">
//                 <img src={nft.img} alt="" className="img_fluid" />
//             </div>

//             <div className="wrapper">
//                 <div className="counter">
//                     <font>{nft.timer.ep}</font>
//                     <h4>
//                         {nft.timer.hd}
//                     </h4>
//                     <h5>{nft.timer.subHd}</h5>
//                     <CountDownTimer
//                         countdown={nft.timer.countdown}
//                         checkFinished={props.checkFinished}
//                     />
//                 </div>
//                 <button
//                     onClick={() => navigate(nft.moreUrl)}
//                 >
//                     KNOW MORE
//                 </button>
//                 <h6>JOIN THE CONVERSATION</h6>
//                 <ul>
//                     {[faTwitter, faDiscord, faTelegramPlane].map((item, i) => {
//                         return (
//                             <li key={i}>
//                                 <Link to='/'>
//                                     <FontAwesomeIcon icon={item} />
//                                 </Link>
//                             </li>
//                         );
//                     })}
//                 </ul>
//             </div>
//         </div>
//     );
// }