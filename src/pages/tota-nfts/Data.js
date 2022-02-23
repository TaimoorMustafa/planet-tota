import { 
    cinderella,
    pangolin,
    woof,
    do_te,
    ngon,
    sv02,
    mad_eyes,
    fear,
    great_white,
    scout,
    dude,
    led,
    costume5,
    costume6,
    costume7,
    costume8,
    costume9,
    costume10,
 } from "../../assets/images";

const charData=[
    {
        id:102185,
        img:pangolin,
        name:'Pangolin',
        profile:[
          costume5,
          costume6,
          costume7,
          costume8,
          costume9,
          costume10,
        ]
    },
    {
        id:2218557,
        img:woof,
        name:'Woof',
        profile:[
          costume5,
          costume7,
          costume6,
          costume9,
          costume8,
          costume10,
        ]
    },
    {
        id:30124,
        img:do_te,
        name:'Do Te',
        profile:[
          costume10,
          costume6,
          costume7,
          costume8,
          costume9,
          costume5,
        ]
    },
    {
        id:4021457,
        img:ngon,
        name:'9 Ngon',
        profile:[
          costume5,
          costume8,
          costume7,
          costume6,
          costume9,
          costume10,
        ]
    },
    {
        id:5,
        img:sv02,
        name:'SV02',
        profile:[
          costume8,
          costume6,
          costume7,
          costume5,
          costume9,
          costume10,
        ]
    },
    {
        id:6,
        img:cinderella,
        name:'Cinderella',
        profile:[
          costume9,
          costume6,
          costume7,
          costume8,
          costume5,
          costume10,
        ]
    },
    {
        id:7,
        img:mad_eyes,
        name:'Mad Eyes',
        profile:[
          costume5,
          costume6,
          costume7,
          costume8,
          costume9,
          costume10,
        ]
    },
    {
        id:8,
        img:fear,
        name:'Fear',
        profile:[
          costume5,
          costume6,
          costume7,
          costume8,
          costume9,
          costume10,
        ]
    },
    {
        id:9,
        img:great_white,
        name:'Great White',
        profile:[
          costume5,
          costume6,
          costume7,
          costume8,
          costume9,
          costume10,
        ]
    },
    {
        id:10,
        img:scout,
        name:'Scout',
        profile:[
          costume5,
          costume6,
          costume7,
          costume8,
          costume9,
          costume10,
        ]
    },
    {
        id:11,
        img:dude,
        name:'Dude',
        profile:[
          costume5,
          costume6,
          costume7,
          costume8,
          costume9,
          costume10,
        ]
    },
    {
        id:12,
        img:led,
        name:'Led',
        profile:[
          costume5,
          costume6,
          costume7,
          costume8,
          costume9,
          costume10,
        ]
    },
    {
        id:13,
        img:cinderella,
        name:'Cinderella',
        profile:[
          costume5,
          costume6,
          costume7,
          costume8,
          costume9,
          costume10,
        ]
    },
]

const settings = {
    arrows:false,
    dots: false,
    infinite:false,
    speed: 300,
    slidesToShow: 11,
    slidesToScroll: 1,
    focusOnSelect: true,
    className: "character_slider",
    responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 9,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 825,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 510,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
      ]
};

export {
    charData,
    settings
}