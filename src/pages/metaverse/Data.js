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
    madeyes_pro_img1,
    madeyes_pro_img2,
    madeyes_pro_img3,
    camap_char,
    camap_name,
    blue_smoke,
    red_smoke,
    green_smoke,
    thietciap_name,
    thietciap_char,
    sv02_char,
    sv02_name,
    tnt_lair_icon,
    tnt_lair1,
    lock_slide,

    tab_bluesmoke_l,
    tab_bluesmoke_r,

    tab1_char_1,
    tab1_char_1a,
    tab1_char_1b,
    tab1_char_1_btm,

    bodies_icon,
    menu_icon4,
    gadgets,
    locations,
    guns,
    vehicles,

    m_location_slide1,
    m_location_location1,
    m_location_name1,
    m_location_slide2,
    m_location_location2,
    m_location_name2,

    m_vehicles_slide1,
    m_vehicles_name1,
    m_vehicles_veh1,
    m_vehicles_slide2,
    m_vehicles_name2,
    m_vehicles_veh2,
    m_vehicles_slide3,
    m_vehicles_name3,
    m_vehicles_veh3,
} from '../../assets/images';

const charDataTab1=[
    {
        id:1215,
        img:pangolin,
        name:'Pangolin',
        lock:false,
        profile:{
            charImg:camap_char,
            discription:[
                {font:'Name:',span:'HOANG HAI'},
                {font:'Alias:',span:'CA MAP (SHARK)'},
                {font:'Date of Birth:',span:'NOT KNOWN'},
                {font:'Gender:',span:'MALE'},
                {font:'Height:',span:'180cms'},
                {font:'Weight:',span:'90kgs'},
                {font:'Eyes color:',span:'GREEN'},
                {font:'Identifiable markings:',span:'SHARP TEETH, PINTY EARS'},
                {font:'Family:',span:'NONE'},
                {font:'Education:',span:'SECOND GRADE'},
                {font:'Employment status:',span:'CONFIDENTIAL'},
                {font:'Last address:',span:'EARTH'},
            ],
            nameImg:camap_name,
            superpower:['Super strength','Super speed'],
            classification:['Lab Rat'],
            bio:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.",
            smoke:blue_smoke,
        },
        casefile:{
            profileNum:'0010',
            sideImg1:tab1_char_1a,
            sideImg2:tab1_char_1b,
            mainImage:tab1_char_1,
            smoke1:tab_bluesmoke_l,
            smoke2:tab_bluesmoke_r,
            codeName:'sep',
            name:'Minh Nguyen',
            powers:['Super strength','Super speed'],
            classification:['Natural'],
            bio:"The 'Right-Hand-Man' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident, does eventually become a beast nicknamed 'Savage'. His story is a sad one, but in no way justification of crimes.The 'Right-Hand-Man' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident, does eventually become a beast nicknamed 'Savage'. His story is a sad one, but in no way justification of crimes.",
            readMore:{
                img:tab1_char_1_btm,
                para:"The 'Right-Hand-Man' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident, does eventually become a beast nicknamed 'Savage'. His story is a sad one, but in no way justification of crimes.The 'Right-Hand-Man' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident, does eventually become a beast nicknamed 'Savage'. His story is a sad one, but in no way justification of crimes."
            }    
        },
    },
    {
        id:22231,
        img:woof,
        name:'Woof',
        lock:false,
        profile:{
            charImg:thietciap_char,
            discription:[
                {font:'Name:',span:'HOANG HAI'},
                {font:'Alias:',span:'CA MAP (SHARK)'},
                {font:'Date of Birth:',span:'NOT KNOWN'},
                {font:'Gender:',span:'MALE'},
                {font:'Height:',span:'180cms'},
                {font:'Weight:',span:'90kgs'},
                {font:'Eyes color:',span:'GREEN'},
                {font:'Identifiable markings:',span:'SHARP TEETH, PINTY EARS'},
                {font:'Family:',span:'NONE'},
                {font:'Education:',span:'SECOND GRADE'},
                {font:'Employment status:',span:'CONFIDENTIAL'},
                {font:'Last address:',span:'EARTH'},
            ],
            nameImg:thietciap_name,
            superpower:['Super strength','Super speed'],
            classification:['Lab Rat'],
            bio:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.",
            smoke:red_smoke,
        }
    },
    {
        id:332132,
        img:do_te,
        name:'Do Te',
        lock:false,
        profile:{
            charImg:sv02_char,
            discription:[
                {font:'Name:',span:'HOANG HAI'},
                {font:'Alias:',span:'CA MAP (SHARK)'},
                {font:'Date of Birth:',span:'NOT KNOWN'},
                {font:'Gender:',span:'MALE'},
                {font:'Height:',span:'180cms'},
                {font:'Weight:',span:'90kgs'},
                {font:'Eyes color:',span:'GREEN'},
                {font:'Identifiable markings:',span:'SHARP TEETH, PINTY EARS'},
                {font:'Family:',span:'NONE'},
                {font:'Education:',span:'SECOND GRADE'},
                {font:'Employment status:',span:'CONFIDENTIAL'},
                {font:'Last address:',span:'EARTH'},
            ],
            nameImg:sv02_name,
            superpower:['Super strength','Super speed'],
            classification:['Lab Rat'],
            bio:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.",
            smoke:green_smoke,
        }
    },
    {
        id:4213,
        img:ngon,
        name:'9 Ngon',
        lock:true,
        profile:{
            profileNum:'C.A.S.E. FILE 0040',
            sideImg1:madeyes_pro_img1,
            sideImg2:madeyes_pro_img2,
            mainImage:madeyes_pro_img3,
            powers:['Super strength','Super speed'],
            classification:['Natural'],
            bio:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident, does eventually become a beast nicknamed 'Savage'. His story is a sad one, but in no way justification of crimes."
        }
    },
    {
        id:515,
        img:sv02,
        name:'SV02',
        lock:true,
        profile:{
            profileNum:'C.A.S.E. FILE 0050',
            sideImg1:madeyes_pro_img1,
            sideImg2:madeyes_pro_img2,
            mainImage:madeyes_pro_img3,
            powers:['Super strength','Super speed'],
            classification:['Natural'],
            bio:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident, does eventually become a beast nicknamed 'Savage'. His story is a sad one, but in no way justification of crimes."
        }
    },
    {
        id:62132,
        img:cinderella,
        name:'Cinderella',
        lock:true,
        profile:{
            profileNum:'C.A.S.E. FILE 0060',
            sideImg1:madeyes_pro_img1,
            sideImg2:madeyes_pro_img2,
            mainImage:madeyes_pro_img3,
            powers:['Super strength','Super speed'],
            classification:['Natural'],
            bio:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident, does eventually become a beast nicknamed 'Savage'. His story is a sad one, but in no way justification of crimes."
        }
    },
    {
        id:72132,
        img:mad_eyes,
        name:'Mad Eyes',
        lock:true,
        profile:{
            profileNum:'C.A.S.E. FILE 0070',
            sideImg1:madeyes_pro_img1,
            sideImg2:madeyes_pro_img2,
            mainImage:madeyes_pro_img3,
            powers:['Super strength','Super speed'],
            classification:['Natural'],
            bio:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident, does eventually become a beast nicknamed 'Savage'. His story is a sad one, but in no way justification of crimes."
        }
    },
    {
        id:821321,
        img:fear,
        name:'Fear',
        lock:true,
        profile:{
            profileNum:'C.A.S.E. FILE 0080',
            sideImg1:madeyes_pro_img1,
            sideImg2:madeyes_pro_img2,
            mainImage:madeyes_pro_img3,
            powers:['Super strength','Super speed'],
            classification:['Natural'],
            bio:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident, does eventually become a beast nicknamed 'Savage'. His story is a sad one, but in no way justification of crimes."
        }
    },
    {
        id:92132,
        img:great_white,
        name:'Great White',
        lock:true,
        profile:{
            profileNum:'C.A.S.E. FILE 0090',
            sideImg1:madeyes_pro_img1,
            sideImg2:madeyes_pro_img2,
            mainImage:madeyes_pro_img3,
            powers:['Super strength','Super speed'],
            classification:['Natural'],
            bio:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident, does eventually become a beast nicknamed 'Savage'. His story is a sad one, but in no way justification of crimes."
        }
    },
    {
        id:1012,
        img:scout,
        name:'Scout',
        lock:true,
        profile:{
            profileNum:'C.A.S.E. FILE 0011',
            sideImg1:madeyes_pro_img1,
            sideImg2:madeyes_pro_img2,
            mainImage:madeyes_pro_img3,
            powers:['Super strength','Super speed'],
            classification:['Natural'],
            bio:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident, does eventually become a beast nicknamed 'Savage'. His story is a sad one, but in no way justification of crimes."
        }
    },
    {
        id:1121,
        img:dude,
        name:'Dude',
        lock:true,
        profile:{
            profileNum:'C.A.S.E. FILE 0012',
            sideImg1:madeyes_pro_img1,
            sideImg2:madeyes_pro_img2,
            mainImage:madeyes_pro_img3,
            powers:['Super strength','Super speed'],
            classification:['Natural'],
            bio:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident, does eventually become a beast nicknamed 'Savage'. His story is a sad one, but in no way justification of crimes."
        }
    },
    {
        id:122132,
        img:led,
        name:'Led',
        lock:true,
        profile:{
            profileNum:'C.A.S.E. FILE 0013',
            sideImg1:madeyes_pro_img1,
            sideImg2:madeyes_pro_img2,
            mainImage:madeyes_pro_img3,
            powers:['Super strength','Super speed'],
            classification:['Natural'],
            bio:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident, does eventually become a beast nicknamed 'Savage'. His story is a sad one, but in no way justification of crimes."
        }
    },
    {
        id:1322,
        img:cinderella,
        name:'Cinderella',
        lock:true,
        profile:{
            profileNum:'C.A.S.E. FILE 0014',
            sideImg1:madeyes_pro_img1,
            sideImg2:madeyes_pro_img2,
            mainImage:madeyes_pro_img3,
            powers:['Super strength','Super speed'],
            classification:['Natural'],
            bio:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident, does eventually become a beast nicknamed 'Savage'. His story is a sad one, but in no way justification of crimes."
        }
    },
];

const settingsTab1 = {
    arrows:false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 11,
    slidesToScroll: 1,
    focusOnSelect: true,
    className: "character_slider",
    responsive: [
        {
          breakpoint: 1550,
          settings: {
            slidesToShow: 9,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 665,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 525,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 410,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
    ]
};

const locationsData=[
    {
        id:101211,
        lockSlide:lock_slide,
        img:m_location_slide1,
        name:"FEAR'S Lair",
        lockData:false,
        profile:{
            case:"FEAR'S LAIR",
            doc:'HUDA 013738',
            smoke:blue_smoke,
            mainImg:m_location_location1,
            discription:[
                {font:'Name:',span:"TNT's LAIR"},
                {font:'Location:',span:"TNT'S ESTATE UNDERGROUND"},
                {font:'Security level:',span:'High'},
                {font:'Reported activities:',span:'NEFARIOUS'},
                {font:'Threat level:',span:'High'},
            ],
            nameImg:m_location_name1,
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.Lorem ipsum dolor sit amet, consectetuer adipiscinmg elit, sed diam nonummu nigh euismod tincidunt ut laroeet dolore.",
        }
    },
    {
        id:2113,
        lockSlide:lock_slide,
        img:m_location_slide2,
        name:"MAD EYES's LAIR",
        lockData:false,
        profile:{
            case:"MAD EYES'S LAIR",
            doc:'HUDA 013738',
            smoke:red_smoke,
            mainImg:m_location_location2,
            discription:[
                {font:'Name:',span:"TNT's LAIR"},
                {font:'Location:',span:"TNT'S ESTATE UNDERGROUND"},
                {font:'Security level:',span:'High'},
                {font:'Reported activities:',span:'NEFARIOUS'},
                {font:'Threat level:',span:'High'},
            ],
            nameImg:m_location_name2,
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.Lorem ipsum dolor sit amet, consectetuer adipiscinmg elit, sed diam nonummu nigh euismod tincidunt ut laroeet dolore.",
        }
    },
    {
        id:3213,
        lockSlide:lock_slide,
        img:tnt_lair_icon,
        name:"Lao Dai's Lab",
        lockData:true, 
        smoke:blue_smoke,
        profile:{
            mainImg:tnt_lair1,
            sideImg1:tnt_lair1,
            sideImg2:tnt_lair1,
            discription:[
                {font:'Name:',span:"MAD EYES's LAIR"},
                {font:'Date of Birth:',span:'NOT KNOWN'},
                {font:'Gender:',span:'MALE'},
                {font:'Eyes color:',span:'GREEN'},
                {font:'Family:',span:'NONE'},
                {font:'Education:',span:'SECOND GRADE'},
                {font:'Last address:',span:'EARTH'},
            ],
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.",
        }
    },
    {
        id:4112,
        lockSlide:lock_slide,
        img:tnt_lair_icon,
        name:"Glocoast's Lab",
        lockData:true,
        case:'CASE 22',
        doc:'DOC 013738',
        smoke:blue_smoke,
        profile:{
            mainImg:tnt_lair1,
            sideImg1:tnt_lair1,
            sideImg2:tnt_lair1,
            discription:[
                {font:'Name:',span:"MAD EYES's LAIR"},
                {font:'Date of Birth:',span:'NOT KNOWN'},
                {font:'Gender:',span:'MALE'},
                {font:'Eyes color:',span:'GREEN'},
                {font:'Family:',span:'NONE'},
                {font:'Education:',span:'SECOND GRADE'},
                {font:'Last address:',span:'EARTH'},
            ],
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.",
        }
    },
    {
        id:12354,
        lockSlide:lock_slide,
        img:tnt_lair_icon,
        name:"The High Street",
        lockData:true,
        case:'CASE 22',
        doc:'DOC 013738',
        smoke:blue_smoke,
        profile:{
            mainImg:tnt_lair1,
            sideImg1:tnt_lair1,
            sideImg2:tnt_lair1,
            discription:[
                {font:'Name:',span:"MAD EYES's LAIR"},
                {font:'Date of Birth:',span:'NOT KNOWN'},
                {font:'Gender:',span:'MALE'},
                {font:'Eyes color:',span:'GREEN'},
                {font:'Family:',span:'NONE'},
                {font:'Education:',span:'SECOND GRADE'},
                {font:'Last address:',span:'EARTH'},
            ],
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.",
        }
    },
    {
        id:6581,
        lockSlide:lock_slide,
        img:tnt_lair_icon,
        name:"Hantu's House",
        lockData:true,
        case:'CASE 22',
        doc:'DOC 013738',
        smoke:blue_smoke,
        profile:{
            mainImg:tnt_lair1,
            sideImg1:tnt_lair1,
            sideImg2:tnt_lair1,
            discription:[
                {font:'Name:',span:"MAD EYES's LAIR"},
                {font:'Date of Birth:',span:'NOT KNOWN'},
                {font:'Gender:',span:'MALE'},
                {font:'Eyes color:',span:'GREEN'},
                {font:'Family:',span:'NONE'},
                {font:'Education:',span:'SECOND GRADE'},
                {font:'Last address:',span:'EARTH'},
            ],
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.",
        }
    },
    {
        id:7000,
        lockSlide:lock_slide,
        img:tnt_lair_icon,
        name:"TNT's Estate",
        lockData:true,
        case:'CASE 22',
        doc:'DOC 013738',
        smoke:blue_smoke,
        profile:{
            mainImg:tnt_lair1,
            sideImg1:tnt_lair1,
            sideImg2:tnt_lair1,
            discription:[
                {font:'Name:',span:"MAD EYES's LAIR"},
                {font:'Date of Birth:',span:'NOT KNOWN'},
                {font:'Gender:',span:'MALE'},
                {font:'Eyes color:',span:'GREEN'},
                {font:'Family:',span:'NONE'},
                {font:'Education:',span:'SECOND GRADE'},
                {font:'Last address:',span:'EARTH'},
            ],
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.",
        }
    },
    {
        id:8824,
        lockSlide:lock_slide,
        img:tnt_lair_icon,
        name:"The French Villa",
        lockData:true,
        case:'CASE 22',
        doc:'DOC 013738',
        smoke:blue_smoke,
        profile:{
            mainImg:tnt_lair1,
            sideImg1:tnt_lair1,
            sideImg2:tnt_lair1,
            discription:[
                {font:'Name:',span:"MAD EYES's LAIR"},
                {font:'Date of Birth:',span:'NOT KNOWN'},
                {font:'Gender:',span:'MALE'},
                {font:'Eyes color:',span:'GREEN'},
                {font:'Family:',span:'NONE'},
                {font:'Education:',span:'SECOND GRADE'},
                {font:'Last address:',span:'EARTH'},
            ],
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.",
        }
    },
    {
        id:96211,
        lockSlide:lock_slide,
        img:tnt_lair_icon,
        name:"The Blue Street",
        lockData:true,
        case:'CASE 22',
        doc:'DOC 013738',
        smoke:blue_smoke,
        profile:{
            mainImg:tnt_lair1,
            sideImg1:tnt_lair1,
            sideImg2:tnt_lair1,
            discription:[
                {font:'Name:',span:"MAD EYES's LAIR"},
                {font:'Date of Birth:',span:'NOT KNOWN'},
                {font:'Gender:',span:'MALE'},
                {font:'Eyes color:',span:'GREEN'},
                {font:'Family:',span:'NONE'},
                {font:'Education:',span:'SECOND GRADE'},
                {font:'Last address:',span:'EARTH'},
            ],
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.",
        }
    },
    {
        id:103696,
        lockSlide:lock_slide,
        img:tnt_lair_icon,
        name:"Valhalla",
        lockData:true,
        case:'CASE 22',
        doc:'DOC 013738',
        smoke:blue_smoke,
        profile:{
            mainImg:tnt_lair1,
            sideImg1:tnt_lair1,
            sideImg2:tnt_lair1,
            discription:[
                {font:'Name:',span:"MAD EYES's LAIR"},
                {font:'Date of Birth:',span:'NOT KNOWN'},
                {font:'Gender:',span:'MALE'},
                {font:'Eyes color:',span:'GREEN'},
                {font:'Family:',span:'NONE'},
                {font:'Education:',span:'SECOND GRADE'},
                {font:'Last address:',span:'EARTH'},
            ],
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.",
        }
    },
    {
        id:11021485,
        lockSlide:lock_slide,
        img:tnt_lair_icon,
        name:"35th Street",
        lockData:true,
        case:'CASE 22',
        doc:'DOC 013738',
        smoke:blue_smoke,
        profile:{
            mainImg:tnt_lair1,
            sideImg1:tnt_lair1,
            sideImg2:tnt_lair1,
            discription:[
                {font:'Name:',span:"MAD EYES's LAIR"},
                {font:'Date of Birth:',span:'NOT KNOWN'},
                {font:'Gender:',span:'MALE'},
                {font:'Eyes color:',span:'GREEN'},
                {font:'Family:',span:'NONE'},
                {font:'Education:',span:'SECOND GRADE'},
                {font:'Last address:',span:'EARTH'},
            ],
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.",
        }
    },
    {
        id:122244,
        lockSlide:lock_slide,
        img:tnt_lair_icon,
        name:"Death Valley",
        lockData:true,
        case:'CASE 22',
        doc:'DOC 013738',
        smoke:blue_smoke,
        profile:{
            mainImg:tnt_lair1,
            sideImg1:tnt_lair1,
            sideImg2:tnt_lair1,
            discription:[
                {font:'Name:',span:"MAD EYES's LAIR"},
                {font:'Date of Birth:',span:'NOT KNOWN'},
                {font:'Gender:',span:'MALE'},
                {font:'Eyes color:',span:'GREEN'},
                {font:'Family:',span:'NONE'},
                {font:'Education:',span:'SECOND GRADE'},
                {font:'Last address:',span:'EARTH'},
            ],
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.",
        }
    },
    {
        id:1322044,
        lockSlide:lock_slide,
        img:tnt_lair_icon,
        name:"Dog House",
        lockData:true,
        case:'CASE 22',
        doc:'DOC 013738',
        smoke:blue_smoke,
        profile:{
            mainImg:tnt_lair1,
            sideImg1:tnt_lair1,
            sideImg2:tnt_lair1,
            discription:[
                {font:'Name:',span:"MAD EYES's LAIR"},
                {font:'Date of Birth:',span:'NOT KNOWN'},
                {font:'Gender:',span:'MALE'},
                {font:'Eyes color:',span:'GREEN'},
                {font:'Family:',span:'NONE'},
                {font:'Education:',span:'SECOND GRADE'},
                {font:'Last address:',span:'EARTH'},
            ],
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.",
        }
    },
]

const locationsSettings = {
    arrows:false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    focusOnSelect: true,
    className: "character_slider",
    responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
    ]
};

const vehicalsSettings = {
    arrows:false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    focusOnSelect: true,
    className: "character_slider",
    responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
    ]
};

const vehicalsData=[
    {
        id:101211,
        lockSlide:lock_slide,
        img:m_vehicles_slide1,
        name:"FEAR'S Lair",
        lockData:false,
        profile:{
            case:"FEAR'S LAIR",
            doc:'HUDA 013738',
            smoke:blue_smoke,
            mainImg:m_vehicles_veh1,
            discription:[
                {font:'Name:',span:"TNT's LAIR"},
                {font:'Location:',span:"TNT'S ESTATE UNDERGROUND"},
                {font:'Security level:',span:'High'},
                {font:'Reported activities:',span:'NEFARIOUS'},
                {font:'Threat level:',span:'High'},
            ],
            nameImg:m_vehicles_name1,
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.Lorem ipsum dolor sit amet, consectetuer adipiscinmg elit, sed diam nonummu nigh euismod tincidunt ut laroeet dolore.",
        }
    },
    {
        id:2113,
        lockSlide:lock_slide,
        img:m_vehicles_slide2,
        name:"MAD EYES's LAIR",
        lockData:false,
        profile:{
            case:"MAD EYES'S LAIR",
            doc:'HUDA 013738',
            smoke:red_smoke,
            mainImg:m_vehicles_veh2,
            discription:[
                {font:'Name:',span:"TNT's LAIR"},
                {font:'Location:',span:"TNT'S ESTATE UNDERGROUND"},
                {font:'Security level:',span:'High'},
                {font:'Reported activities:',span:'NEFARIOUS'},
                {font:'Threat level:',span:'High'},
            ],
            nameImg:m_vehicles_name1,
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.Lorem ipsum dolor sit amet, consectetuer adipiscinmg elit, sed diam nonummu nigh euismod tincidunt ut laroeet dolore.",
        }
    },
    {
        id:2113555,
        lockSlide:lock_slide,
        img:m_vehicles_slide3,
        name:"MAD EYES's LAIR",
        lockData:false,
        profile:{
            case:"MAD EYES'S LAIR",
            doc:'HUDA 013738',
            smoke:red_smoke,
            mainImg:m_vehicles_veh3,
            discription:[
                {font:'Name:',span:"TNT's LAIR"},
                {font:'Location:',span:"TNT'S ESTATE UNDERGROUND"},
                {font:'Security level:',span:'High'},
                {font:'Reported activities:',span:'NEFARIOUS'},
                {font:'Threat level:',span:'High'},
            ],
            nameImg:m_vehicles_name3,
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.Lorem ipsum dolor sit amet, consectetuer adipiscinmg elit, sed diam nonummu nigh euismod tincidunt ut laroeet dolore.",
        }
    },
    {
        id:3213,
        lockSlide:lock_slide,
        img:tnt_lair_icon,
        name:"Lao Dai's Lab",
        lockData:true, 
        smoke:blue_smoke,
        profile:{
            mainImg:tnt_lair1,
            sideImg1:tnt_lair1,
            sideImg2:tnt_lair1,
            discription:[
                {font:'Name:',span:"MAD EYES's LAIR"},
                {font:'Date of Birth:',span:'NOT KNOWN'},
                {font:'Gender:',span:'MALE'},
                {font:'Eyes color:',span:'GREEN'},
                {font:'Family:',span:'NONE'},
                {font:'Education:',span:'SECOND GRADE'},
                {font:'Last address:',span:'EARTH'},
            ],
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.",
        }
    },
    {
        id:4112,
        lockSlide:lock_slide,
        img:tnt_lair_icon,
        name:"Glocoast's Lab",
        lockData:true,
        case:'CASE 22',
        doc:'DOC 013738',
        smoke:blue_smoke,
        profile:{
            mainImg:tnt_lair1,
            sideImg1:tnt_lair1,
            sideImg2:tnt_lair1,
            discription:[
                {font:'Name:',span:"MAD EYES's LAIR"},
                {font:'Date of Birth:',span:'NOT KNOWN'},
                {font:'Gender:',span:'MALE'},
                {font:'Eyes color:',span:'GREEN'},
                {font:'Family:',span:'NONE'},
                {font:'Education:',span:'SECOND GRADE'},
                {font:'Last address:',span:'EARTH'},
            ],
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.",
        }
    },
    {
        id:12354,
        lockSlide:lock_slide,
        img:tnt_lair_icon,
        name:"The High Street",
        lockData:true,
        case:'CASE 22',
        doc:'DOC 013738',
        smoke:blue_smoke,
        profile:{
            mainImg:tnt_lair1,
            sideImg1:tnt_lair1,
            sideImg2:tnt_lair1,
            discription:[
                {font:'Name:',span:"MAD EYES's LAIR"},
                {font:'Date of Birth:',span:'NOT KNOWN'},
                {font:'Gender:',span:'MALE'},
                {font:'Eyes color:',span:'GREEN'},
                {font:'Family:',span:'NONE'},
                {font:'Education:',span:'SECOND GRADE'},
                {font:'Last address:',span:'EARTH'},
            ],
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.",
        }
    },
    {
        id:6581,
        lockSlide:lock_slide,
        img:tnt_lair_icon,
        name:"Hantu's House",
        lockData:true,
        case:'CASE 22',
        doc:'DOC 013738',
        smoke:blue_smoke,
        profile:{
            mainImg:tnt_lair1,
            sideImg1:tnt_lair1,
            sideImg2:tnt_lair1,
            discription:[
                {font:'Name:',span:"MAD EYES's LAIR"},
                {font:'Date of Birth:',span:'NOT KNOWN'},
                {font:'Gender:',span:'MALE'},
                {font:'Eyes color:',span:'GREEN'},
                {font:'Family:',span:'NONE'},
                {font:'Education:',span:'SECOND GRADE'},
                {font:'Last address:',span:'EARTH'},
            ],
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.",
        }
    },
    {
        id:7000,
        lockSlide:lock_slide,
        img:tnt_lair_icon,
        name:"TNT's Estate",
        lockData:true,
        case:'CASE 22',
        doc:'DOC 013738',
        smoke:blue_smoke,
        profile:{
            mainImg:tnt_lair1,
            sideImg1:tnt_lair1,
            sideImg2:tnt_lair1,
            discription:[
                {font:'Name:',span:"MAD EYES's LAIR"},
                {font:'Date of Birth:',span:'NOT KNOWN'},
                {font:'Gender:',span:'MALE'},
                {font:'Eyes color:',span:'GREEN'},
                {font:'Family:',span:'NONE'},
                {font:'Education:',span:'SECOND GRADE'},
                {font:'Last address:',span:'EARTH'},
            ],
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.",
        }
    },
    {
        id:8824,
        lockSlide:lock_slide,
        img:tnt_lair_icon,
        name:"The French Villa",
        lockData:true,
        case:'CASE 22',
        doc:'DOC 013738',
        smoke:blue_smoke,
        profile:{
            mainImg:tnt_lair1,
            sideImg1:tnt_lair1,
            sideImg2:tnt_lair1,
            discription:[
                {font:'Name:',span:"MAD EYES's LAIR"},
                {font:'Date of Birth:',span:'NOT KNOWN'},
                {font:'Gender:',span:'MALE'},
                {font:'Eyes color:',span:'GREEN'},
                {font:'Family:',span:'NONE'},
                {font:'Education:',span:'SECOND GRADE'},
                {font:'Last address:',span:'EARTH'},
            ],
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.",
        }
    },
    {
        id:96211,
        lockSlide:lock_slide,
        img:tnt_lair_icon,
        name:"The Blue Street",
        lockData:true,
        case:'CASE 22',
        doc:'DOC 013738',
        smoke:blue_smoke,
        profile:{
            mainImg:tnt_lair1,
            sideImg1:tnt_lair1,
            sideImg2:tnt_lair1,
            discription:[
                {font:'Name:',span:"MAD EYES's LAIR"},
                {font:'Date of Birth:',span:'NOT KNOWN'},
                {font:'Gender:',span:'MALE'},
                {font:'Eyes color:',span:'GREEN'},
                {font:'Family:',span:'NONE'},
                {font:'Education:',span:'SECOND GRADE'},
                {font:'Last address:',span:'EARTH'},
            ],
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.",
        }
    },
    {
        id:103696,
        lockSlide:lock_slide,
        img:tnt_lair_icon,
        name:"Valhalla",
        lockData:true,
        case:'CASE 22',
        doc:'DOC 013738',
        smoke:blue_smoke,
        profile:{
            mainImg:tnt_lair1,
            sideImg1:tnt_lair1,
            sideImg2:tnt_lair1,
            discription:[
                {font:'Name:',span:"MAD EYES's LAIR"},
                {font:'Date of Birth:',span:'NOT KNOWN'},
                {font:'Gender:',span:'MALE'},
                {font:'Eyes color:',span:'GREEN'},
                {font:'Family:',span:'NONE'},
                {font:'Education:',span:'SECOND GRADE'},
                {font:'Last address:',span:'EARTH'},
            ],
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.",
        }
    },
    {
        id:11021485,
        lockSlide:lock_slide,
        img:tnt_lair_icon,
        name:"35th Street",
        lockData:true,
        case:'CASE 22',
        doc:'DOC 013738',
        smoke:blue_smoke,
        profile:{
            mainImg:tnt_lair1,
            sideImg1:tnt_lair1,
            sideImg2:tnt_lair1,
            discription:[
                {font:'Name:',span:"MAD EYES's LAIR"},
                {font:'Date of Birth:',span:'NOT KNOWN'},
                {font:'Gender:',span:'MALE'},
                {font:'Eyes color:',span:'GREEN'},
                {font:'Family:',span:'NONE'},
                {font:'Education:',span:'SECOND GRADE'},
                {font:'Last address:',span:'EARTH'},
            ],
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.",
        }
    },
    {
        id:122244,
        lockSlide:lock_slide,
        img:tnt_lair_icon,
        name:"Death Valley",
        lockData:true,
        case:'CASE 22',
        doc:'DOC 013738',
        smoke:blue_smoke,
        profile:{
            mainImg:tnt_lair1,
            sideImg1:tnt_lair1,
            sideImg2:tnt_lair1,
            discription:[
                {font:'Name:',span:"MAD EYES's LAIR"},
                {font:'Date of Birth:',span:'NOT KNOWN'},
                {font:'Gender:',span:'MALE'},
                {font:'Eyes color:',span:'GREEN'},
                {font:'Family:',span:'NONE'},
                {font:'Education:',span:'SECOND GRADE'},
                {font:'Last address:',span:'EARTH'},
            ],
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.",
        }
    },
    {
        id:1322044,
        lockSlide:lock_slide,
        img:tnt_lair_icon,
        name:"Dog House",
        lockData:true,
        case:'CASE 22',
        doc:'DOC 013738',
        smoke:blue_smoke,
        profile:{
            mainImg:tnt_lair1,
            sideImg1:tnt_lair1,
            sideImg2:tnt_lair1,
            discription:[
                {font:'Name:',span:"MAD EYES's LAIR"},
                {font:'Date of Birth:',span:'NOT KNOWN'},
                {font:'Gender:',span:'MALE'},
                {font:'Eyes color:',span:'GREEN'},
                {font:'Family:',span:'NONE'},
                {font:'Education:',span:'SECOND GRADE'},
                {font:'Last address:',span:'EARTH'},
            ],
            disc:"A.K.A Khai. the 'Right-Hand-Main' of TNT with a bionic left arm that wrecks havoc. An experimental steroid infused brutal and beastly character who, following an incident.",
        }
    },
]

const tabItems = [
    {
        eventKey: 'the-first',
        img: menu_icon4,
        hd: 'The First',
        disc: {
            hd: 'The First',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur!'
        }
    },
    {
        eventKey: 'vehicles',
        img: vehicles,
        hd: 'Vehicles',
        disc: {
            hd: 'Vehicles',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur!'
        }
    },
    {
        eventKey: 'locations',
        img: locations,
        hd: 'Locations',
        disc: {
            hd: 'Locations',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur!'
        }
    },
    {
        eventKey: 'guns',
        img: guns,
        hd: 'Guns',
        disc: {
            hd: 'Guns',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur!'
        }
    },
    {
        eventKey: 'badges',
        img: bodies_icon,
        hd: 'Badges',
        disc: {
            hd: 'Badges',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur!'
        }
    },
    {
        eventKey: 'gadgets',
        img: gadgets,
        hd: 'Gadgets',
        disc: {
            hd: 'Gadgets',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus voluptate voluptatibus, id nisi, reprehenderit veniam laboriosam facere numquam possimus necessitatibus quisquam! Animi blanditiis fuga illo rem harum veniam tenetur!'
        }
    },
];

export {
    charDataTab1,
    settingsTab1,
    locationsData,
    locationsSettings,
    tabItems,
    vehicalsData,
    vehicalsSettings,
}