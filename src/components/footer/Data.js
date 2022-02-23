import {
    faFacebookF,
    faTwitter,
    faYoutube,
    faInstagram,
    faDiscord,
    faSnapchatGhost,
    faLinkedin,
    faTelegramPlane,
    faRedditAlien
} from '@fortawesome/free-brands-svg-icons';

const fooNavItems = [
    { url: '/explore-synergies', txt: 'EXPLORE SYNERGIES' },
    { url: '/creators-collective', txt: "CREATOR'S COLLECTIVE" },
    { url: '/about-us', txt: 'ABOUT US' },
    { url: '/planet-tota-metaverse', txt: 'PLANET TOTA METAVERSE' },
    { url: '/planet-tota-nfts', txt: 'PLANET TOTA NFTs' },
    { url: '/meet-the-first', txt: "MEET THE `FIRSTs'" },
    { url: '/in-production', txt: "IN PRODUCTION" },
];
const socialItems = [
    { url: '/', icon: faSnapchatGhost },
    { url: '/', icon: faLinkedin },
    { url: '/', icon: faFacebookF },
    { url: '/', icon: faTwitter },
    { url: '/', icon: faYoutube },
    { url: '/', icon: faInstagram },
    { url: '/', icon: faDiscord },
    { url: '/', icon: faTelegramPlane },
    { url: '/', icon: faRedditAlien },
];

export {
    fooNavItems,
    socialItems
};