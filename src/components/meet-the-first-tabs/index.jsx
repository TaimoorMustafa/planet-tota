import React, { useState } from 'react';
import {
    case_red,
} from '../../assets/images';

// flex Component
export const FirstTab = (props) => {
    const { Item } = props;
    const [closeDiv, setcloseDiv] = useState(true);
    return (
        <div className='the_first_tab' id={props.id}>
            <div className="inner_wrapper">
                <span className='profile_num'>
                    C.A.S.E FILE {Item.profileNum}
                    <font></font>
                </span>
                <div className="flex_wrapper">
                    <div className="left_col">
                        <div className="inner_flex">
                            <div className="wrap">
                                <img src={case_red} alt="" className="case_classified img_fluid" />
                                <div className='tags_sec mb-2'>
                                    <h5>Superpower</h5>
                                    <ul>
                                        <li>
                                            <div className="badge"><span className='font_Helvetica'>{Item.codeName}</span></div>
                                        </li>
                                    </ul>
                                </div>
                                <div className='tags_sec mb-2'>
                                    <h5>Superpower</h5>
                                    <ul>
                                        <li>
                                            <div className="badge"><span className='font_Helvetica'>{Item.name}</span></div>
                                        </li>
                                    </ul>
                                </div>
                                <div className='tags_sec mb-2'>
                                    <h5>Superpower</h5>
                                    <ul>
                                        {
                                            Item.powers.map((item, i) => {
                                                return (
                                                    <li key={i}><div className="badge"><span className='font_Helvetica'>{item}</span></div></li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className='tags_sec'>
                                    <h5>Classification</h5>
                                    <ul>
                                        {
                                            Item.classification.map((item, i) => {
                                                return (
                                                    <li key={i}><div className="badge"><span className='font_Helvetica'>{item}</span></div></li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="wrap">
                                <img src={Item.sideImg1} alt="" className="img_fluid" />
                            </div>
                            <div className="wrap">
                                <img src={Item.sideImg2} alt="" className="img_fluid" />
                            </div>
                        </div>
                        <div className="description">
                            <p className='desc font_Helvetica'>
                                {Item.bio}
                            </p>
                            <button
                                onClick={() => setcloseDiv(false)}
                            >
                                ReadMore
                            </button>
                        </div>
                    </div>
                    <div className="right_col">
                        <div className="img_wrapper">
                            <img src={Item.mainImage} alt="" className="img_fluid" />
                        </div>
                    </div>
                </div>
            </div>
            {closeDiv ?
                null
                :
                <div className="bottom_wrapper">
                    <span
                        className='sec_close'
                        onClick={() => setcloseDiv(true)}
                    >&times;</span>
                    <div className="inner_flex">
                        <div className="img_wrapper">
                            <img src={Item.readMore.img} alt="" className="img_fluid" />
                        </div>
                        <p className="para">
                            {Item.readMore.para}
                        </p>
                    </div>
                </div>
            }
            <div className="smoke_left">
                <img src={Item.smoke1} alt="" className="img_fluid" />
            </div>
            <div className="smoke_right">
                <img src={Item.smoke2} alt="" className="img_fluid" />
            </div>
        </div >
    );
}

// grid component
// export const FirstTab = (props) => {
//     const { Item } = props;
//     const [closeDiv, setcloseDiv] = useState(true);
//     return (
//         <div className='the_first_tab' id={props.id}>
//             <div className="inner_wrapper">
//                 <span className='profile_num'>
//                     C.A.S.E FILE {Item.profileNum}
//                     <font></font>
//                 </span>
//                 <div className="grid_container">
//                     <div className="grid_item first">
//                         <img src={case_red} alt="" className="case_classified img_fluid" />
//                         <div className='tags_sec mb-2'>
//                             <h5>Superpower</h5>
//                             <ul>
//                                 <li>
//                                     <div className="badge"><span className='font_Helvetica'>{Item.codeName}</span></div>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className='tags_sec mb-2'>
//                             <h5>Superpower</h5>
//                             <ul>
//                                 <li>
//                                     <div className="badge"><span className='font_Helvetica'>{Item.name}</span></div>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className='tags_sec mb-2'>
//                             <h5>Superpower</h5>
//                             <ul>
//                                 {
//                                     Item.powers.map((item, i) => {
//                                         return (
//                                             <li key={i}><div className="badge"><span className='font_Helvetica'>{item}</span></div></li>
//                                         );
//                                     })
//                                 }
//                             </ul>
//                         </div>
//                         <div className='tags_sec'>
//                             <h5>Classification</h5>
//                             <ul>
//                                 {
//                                     Item.classification.map((item, i) => {
//                                         return (
//                                             <li key={i}><div className="badge"><span className='font_Helvetica'>{item}</span></div></li>
//                                         );
//                                     })
//                                 }
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="grid_item second">
//                         <div className="wrap">
//                             <img src={Item.sideImg1} alt="" className="img_fluid" />
//                         </div>
//                         <div className="wrap">
//                             <img src={Item.sideImg2} alt="" className="img_fluid" />
//                         </div>
//                     </div>
//                     <div className="grid_item third">
//                         <div className="img_wrapper">
//                             <img src={Item.mainImage} alt="" className="img_fluid" />
//                         </div>
//                     </div>
//                     <div className="grid_item last">
//                         <p className='desc font_Helvetica'>
//                             {Item.bio}
//                         </p>
//                         <button
//                             onClick={() => setcloseDiv(false)}
//                         >
//                             ReadMore
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             {closeDiv ?
//                 null
//                 :
//                 <div className="bottom_wrapper">
//                     <span
//                         className='sec_close'
//                         onClick={() => setcloseDiv(true)}
//                     >&times;</span>
//                     <div className="inner_flex">
//                         <div className="img_wrapper">
//                             <img src={Item.readMore.img} alt="" className="img_fluid" />
//                         </div>
//                         <p className="para">
//                             {Item.readMore.para}
//                         </p>
//                     </div>
//                 </div>
//             }
//             <div className="smoke_left">
//                 <img src={Item.smoke1} alt="" className="img_fluid" />
//             </div>
//             <div className="smoke_right">
//                 <img src={Item.smoke2} alt="" className="img_fluid" />
//             </div>
//         </div >
//     );
// }

export const ClassificationTab = (props) => {
    const { Item } = props;
    const [closeDiv, setcloseDiv] = useState(true);
    return (
        <div className='classification_tab' id={props.id}>
            <div className="inner_wrapper">
                <div className="flex_wrapper">
                    <div className="left_col">
                        <div className="inner_flex">
                            <div className="wrap">
                                <img src={Item.img1} alt="" className="img_fluid" />
                            </div>
                            <div className="wrap">
                                <img src={Item.img2} alt="" className="img_fluid" />
                            </div>
                            <div className="wrap">
                                <img src={Item.img3} alt="" className="img_fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="right_col">
                        <div className="img_wrapper">
                            <img src={Item.hdImg} alt="" className="img_fluid" />
                        </div>
                        <p className='desc font_Helvetica'>
                            {Item.para}
                        </p>
                        <button
                            onClick={() => setcloseDiv(false)}
                        >
                            ReadMore
                        </button>
                    </div>
                </div>
            </div>
            {closeDiv ?
                null
                :
                <div className="bottom_wrapper">
                    <span
                        className='sec_close'
                        onClick={() => setcloseDiv(true)}
                    >&times;</span>
                    <div className="inner_flex">
                        <p className="para">
                            {Item.readMore.para}
                        </p>
                        <div className="img_wrapper">
                            <img src={Item.readMore.img} alt="" className="img_fluid" />
                        </div>
                    </div>
                </div>
            }
            <div className="smoke_left">
                <img src={Item.smoke1} alt="" className="img_fluid" />
            </div>
            <div className="smoke_right">
                <img src={Item.smoke2} alt="" className="img_fluid" />
            </div>
        </div >
    );
}

export const CorpsTab = (props) => {
    const { Item } = props;
    const [closeDiv, setcloseDiv] = useState(true);
    return (
        <div className='corp_tab' id={props.id}>
            <div className="inner_wrapper">
                <div className="flex_wrapper">
                    <div className="left_col">
                        <div className="wrap">
                            <img src={Item.img1} alt="" className="img_fluid" />
                        </div>
                    </div>
                    <div className="right_col">
                        <div className="img_wrapper">
                            <img src={Item.hdImg} alt="" className="img_fluid" />
                        </div>
                        <h4 className='sub_hd txt_white text-uppercase font_Quicksand'>EXPLORE THE PLANET</h4>
                        <p className='desc font_Quicksand'>
                            {Item.para}
                        </p>
                        <button
                            onClick={() => setcloseDiv(false)}
                            className='font_Quicksand'
                        >
                            ReadMore
                        </button>
                    </div>
                </div>
            </div>
            {closeDiv ?
                null
                :
                <div className="bottom_wrapper">
                    <span
                        className='sec_close'
                        onClick={() => setcloseDiv(true)}
                    >&times;</span>
                    <div className="inner_flex">
                        <p className="para font_Quicksand">
                            {Item.readMore.para}
                        </p>
                        <div className="img_wrapper">
                            <img src={Item.readMore.img} alt="" className="img_fluid" />
                        </div>
                    </div>
                </div>
            }
            <div className="smoke_left">
                <img src={Item.smoke1} alt="" className="img_fluid" />
            </div>
            <div className="smoke_right">
                <img src={Item.smoke2} alt="" className="img_fluid" />
            </div>
        </div >
    );
}

export const BodiesTab = (props) => {
    const { Item } = props;
    const [closeDiv, setcloseDiv] = useState(true);
    return (
        <div className='bodies_tab' id={props.id}>
            <div className="inner_wrapper">
                <div className="flex_wrapper">
                    <div className="left_col">
                        <div className="wrap">
                            <img src={Item.img} alt="" className="img_fluid" />
                        </div>
                    </div>
                    <div className="right_col">
                        <div className="img_wrapper">
                            <img src={Item.hdImg} alt="" className="img_fluid" />
                        </div>
                        <h4 className='sub_hd txt_white text-uppercase font_Quicksand'>EXPLORE THE PLANET</h4>
                        <p className='desc font_Quicksand'>
                            {Item.para}
                        </p>
                        <button
                            onClick={() => setcloseDiv(false)}
                            className='font_Quicksand'
                        >
                            ReadMore
                        </button>
                    </div>
                </div>
            </div>
            {closeDiv ?
                null
                :
                <div className="bottom_wrapper">
                    <span
                        className='sec_close'
                        onClick={() => setcloseDiv(true)}
                    >&times;</span>
                    <div className="inner_flex">
                        <div className="icon_wrapper">
                            <img src={Item.readMore.img1} alt="" className="img_fluid" />
                        </div>
                        <p className="para font_Quicksand">
                            {Item.readMore.para}
                        </p>
                        <div className="img_wrapper">
                            <img src={Item.readMore.img2} alt="" className="img_fluid" />
                        </div>
                    </div>
                </div>
            }
            <div className="smoke_left">
                <img src={Item.smoke1} alt="" className="img_fluid" />
            </div>
            <div className="smoke_right">
                <img src={Item.smoke2} alt="" className="img_fluid" />
            </div>
        </div >
    );
}