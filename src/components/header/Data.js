import {
    menu_icon1,
    menu_icon2,
    menu_icon3,
    menu_icon4,
    menu_icon5,
    menu_icon6,
    menu_icon7,
    menu_icon8,
    menu_icon9,
} from "../../assets/images";

import {
    faTwitter,
    faDiscord,
    faTelegramPlane,
} from '@fortawesome/free-brands-svg-icons';

const navItems = [
    { url: '/', img: menu_icon1, txt: 'Home' },
    { url: '/in-production', txt: 'In Production', img: menu_icon2 },
    { url: '/planet-tota-metaverse', txt: 'Planet Tota MetaVerse', img: menu_icon3 },
    { url: '/meet-the-first', txt: 'Meet the Firsts', img: menu_icon4 },
    { url: '/planet-tota-nfts', txt: 'Planet Tota Nfts', img: menu_icon5 },
    { url: '/become-a-citizen', txt: 'Become a Citizen', img: menu_icon6 },
    { url: '/explore-synergies', txt: 'Explore Synergies', img: menu_icon7 },
    { url: '/creators-collective', txt: 'Tota Creators Collective', img: menu_icon8 },
    { url: '/about-us', txt: 'About Us', img: menu_icon9 },
];

const socials = [
    { txt: 'JOIN US', url: '/', },
    { icon: faTwitter, url: '/', },
    { icon: faDiscord, url: '/', },
    { icon: faTelegramPlane, url: '/', },
];

export {
    navItems,
    socials
};