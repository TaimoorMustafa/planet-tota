import {
    coming_nft,
    sec_img1,
    sec_img2,
    sec_img3,
    sec_img4,
    sec_img5,
    sec_img6,
    sec_img7,
    sec_img8,
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
} from '../../assets/images';

const slides = [
    { img: slide1, alt: 'metaVerse-banner1', url:'/' },
    { img: slide2, alt: 'metaVerse-banner2', url:'/meet-the-first' },
    { img: slide3, alt: 'metaVerse-banner3', url:'/in-production' },
    { img: slide4, alt: 'metaVerse-banner4', url:'/planet-tota-nfts' },
    { img: slide5, alt: 'metaVerse-banner5', url:'/in-production' },
]

const banners = [
    { img: sec_img1, alt: '', url:'/about-us',timer:false },
    { img: sec_img2, alt: '', url:'/meet-the-first',timer:false },
    { img: sec_img3, alt: '', url:'/planet-tota-metaverse',timer:false },
    { img: sec_img4, alt: '', url:'/become-a-citizen',timer:false} ,
    { img: sec_img5, alt: '', url:'/in-production',timer:false},
    { img: sec_img6, alt: '', url:'/planet-tota-nfts',timer:false },
    { img: sec_img7, alt: '', url:'/creators-collective',timer:false },
    { img: sec_img8, alt: '', url:'/explore-synergies',timer:false },
]

const nft={
    img:coming_nft,
    timer:{ep:'EPISODE 1',hd:'SEP MOVIE COSTUME NFTs',subHd:'MINT IN',countdown:'01/15/2022'},
    moreUrl:'/'
}

export {banners,slides,nft};