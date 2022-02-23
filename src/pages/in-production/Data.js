import {
    char_ca_map,
    char_cho_muc,
    char_dote,
    char_giap,
    char_hantu,
    char_legend,
    char_milo,
    char_sep,
    char_simon,
    char_that,
    poster_android,
    poster_cho_muc,
    poster_dote,
    poster_kid,
    poster_sep,
    poster_simon_vu,
    tab_camap,
    tab_chomuc,
    tab_dote,
    tab_legends,
    tab_milo,
    tab_sep,
    tab_simon,
    tab_hantu,
    tab_that,
    tab_thiet_giap,
    poster_hantu,
} from '../../assets/images';
 
  
const slides = [
    {
        id:0 ,
        img:tab_sep,
        release:'MOVIE<br/>LIVE-ACTION<br/>2022'
    },
    {
        id:1 ,
        img:tab_simon,
        release:'Short FILMS SERIES<br/>LIVE-ACTION 2023',
    },
    {
        id:2 ,
        img:tab_camap,
        release:'Short FILMS SERIES<br/>LIVE-ACTION 2024',
    },
    {
        id:3 ,
        img:tab_dote,
        release:'MOVIE<br/>LIVE-ACTION<br/>2024'
    },
    
    {
        id:4 ,
        img:tab_thiet_giap,
        release:'Short FILMS SERIES<br/>LIVE-ACTION 2024',
    },
    {
        id:5 ,
        img:tab_hantu,
        release:'MOVIE<br/>LIVE-ACTION<br/>2025'
    },
    {
        id:6 ,
        img:tab_that,
        release:'EPISODIC SEIRES<br/>LIVE-ACTION<br/>2025'
    },
    {
        id:7 ,
        img:tab_legends,
        release:'EPISODIC SEIRES<br/>LIVE-ACTION<br/>2025'
    },
    {
        id:8 ,
        img:tab_chomuc,
        release:'EPISODIC SEIRES<br/>LIVE-ACTION<br/>2025'
    },
    {
        id:9 ,
        img:tab_milo,
        release:'EPISODIC SEIRES<br/>LIVE-ACTION<br/>2025'
    },
    {
        id:10 ,
        img:tab_legends,
        release:'EPISODIC SEIRES<br/>LIVE-ACTION<br/>2025'
    },
];

const settings = {
    accessibility: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    focusOnSelect: true,
    className: "basic_slider",
    responsive: [
        {
        breakpoint: 1400,
        settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
        }
        },
        {
        breakpoint: 1200,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
        }
        },
        {
        breakpoint: 991,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
        }
        },
        {
        breakpoint: 720,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
        },
        {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
        },
    ]
};

const productionData=[
    {
        locate1:0,
        poster:poster_sep,
        titleImg1:char_sep,
        myClass:"character_box char_sep",
        timeline1:'movie <br /> live-action <br /> 2022',
        para1:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolore nam neque a tempore pariatur voluptatem autem aliquid nobis, eos ut dolor unde nemo amet ducimus fuga iure. Nostrum, quisquam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolore nam neque a tempore pariatur voluptatem autem aliquid nobis.',
        btn1Link:'/',
        sec2:false,
        lastItem:false,
    },
    {
        locate1:3,
        poster:poster_dote,
        titleImg1:char_dote,
        myClass:"character_box char_dote",
        timeline1:'movie <br /> live-action <br /> 2022',
        para1:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolore nam neque a tempore pariatur voluptatem autem aliquid nobis, eos ut dolor unde nemo amet ducimus fuga iure. Nostrum, quisquam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolore nam neque a tempore pariatur voluptatem autem aliquid nobis.',
        btn1Link:'/',
        sec2:false,
        lastItem:false,
    },
    {
        locate1:5,
        poster:poster_hantu,
        titleImg1:char_hantu,
        myClass:"character_box char_hantu",
        timeline1:'movie <br /> live-action <br /> 2022',
        para1:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolore nam neque a tempore pariatur voluptatem autem aliquid nobis, eos ut dolor unde nemo amet ducimus fuga iure. Nostrum, quisquam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolore nam neque a tempore pariatur voluptatem autem aliquid nobis.',
        btn1Link:'/',
        sec2:false,
        lastItem:false,
    },
    {
        locate1:7,
        poster:poster_kid,
        titleImg1:char_legend,
        myClass:"character_box char_kid",
        timeline1:'movie/episodic series <br /> animation <br /> 2025',
        para1:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolore nam neque a tempore pariatur voluptatem autem aliquid nobis, eos ut dolor unde nemo amet ducimus fuga iure. Nostrum, quisquam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolore nam neque a tempore pariatur voluptatem autem aliquid nobis.',
        btn1Link:'/',
        sec2:false,
        lastItem:false,
    },
    {
        locate1:1,
        locate2:4,
        myClass:"character_box char_simon",
        poster:poster_simon_vu,
        titleImg1:char_simon,
        titleImg2:char_giap,
        timeline1:'short films series <br /> live-action <br /> 2023',
        timeline2:'short films series <br /> live-action <br /> 2024',
        para1:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolore nam neque a tempore pariatur voluptatem autem aliquid nobis, eos ut dolor unde nemo amet ducimus fuga iure. Nostrum, quisquam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolore nam neque a tempore pariatur voluptatem autem aliquid nobis.',
        para2:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolore nam neque a tempore pariatur voluptatem autem aliquid nobis, eos ut dolor unde nemo amet ducimus fuga iure. Nostrum, quisquam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolore nam neque a tempore pariatur voluptatem autem aliquid nobis.',
        btn1Link:'/',
        btn2ink:'/',
        sec2:true,
        lastItem:false,
    },
    {
        locate1:2,
        locate2:6,
        poster:poster_android,
        myClass:"character_box char_ca_map",
        titleImg1:char_ca_map,
        titleImg2:char_that,
        timeline1:'short films series <br /> live-action <br /> 2024',
        timeline2:'episodic series <br /> live-action <br /> 2025',
        para1:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolore nam neque a tempore pariatur voluptatem autem aliquid nobis, eos ut dolor unde nemo amet ducimus fuga iure. Nostrum, quisquam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolore nam neque a tempore pariatur voluptatem autem aliquid nobis.',
        para2:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolore nam neque a tempore pariatur voluptatem autem aliquid nobis, eos ut dolor unde nemo amet ducimus fuga iure. Nostrum, quisquam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolore nam neque a tempore pariatur voluptatem autem aliquid nobis.',
        btn1Link:'/',
        btn2ink:'/',
        sec2:true,
        lastItem:false,
    },
    {
        locate1:8,
        locate2:9,
        poster:poster_cho_muc,
        myClass:"character_box char_cho-muc",
        titleImg1:char_cho_muc,
        titleImg2:char_milo,
        timeline1:'episodic series <br /> live-action <br /> 2025',
        timeline2:'episodic series <br /> live-action <br /> 2026',
        para1:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolore nam neque a tempore pariatur voluptatem autem aliquid nobis, eos ut dolor unde nemo amet ducimus fuga iure. Nostrum, quisquam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolore nam neque a tempore pariatur voluptatem autem aliquid nobis.',
        para2:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolore nam neque a tempore pariatur voluptatem autem aliquid nobis, eos ut dolor unde nemo amet ducimus fuga iure. Nostrum, quisquam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolore nam neque a tempore pariatur voluptatem autem aliquid nobis.',
        btn1Link:'/',
        btn2ink:'/',
        sec2:true,
        lastItem:true,
    }
]


export {
    slides,
    settings,
    productionData
};