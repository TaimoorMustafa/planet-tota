import React, { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { site_logo } from '../../assets/images';
import { Link, NavLink } from 'react-router-dom';
import { navItems, socials } from './Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header(props) {
    const [isMenuActive, setisMenuActive] = useState(false);

    const CloseMenu = () => {
        console.log('Clicked');
        return setisMenuActive(false);
    }

    return (
        <header className={props.headerClass && props.headerClass}>
            <Navbar expand="lg">
                <Container fluid className='px-4'>
                    <Navbar.Brand as={Link} to="/">
                        <img src={site_logo} alt="logo" />
                    </Navbar.Brand>
                    <div className='wrapper'>
                        <ul className='socials'>
                            {socials.map((item, i) => {
                                return (
                                    <li key={i}>
                                        <Link to={item.url}>
                                            {item.txt ?
                                                <>{item.txt}</>
                                                :
                                                <FontAwesomeIcon icon={item.icon} />
                                            }
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <button className='nav_toggle_btn' onClick={() => setisMenuActive(true)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <MyNav
                            navItems={navItems}
                            isActive={isMenuActive}
                            close={CloseMenu}
                            socials={socials}
                        />
                    </div>
                </Container>
            </Navbar>
            <div className={isMenuActive ? 'overlay_shadow active' : 'overlay_shadow'}></div>
        </header >
    );
}


function MyNav(props) {

    return (
        <div className={props.isActive ? 'side_navigation active' : 'side_navigation'}>
            <ul className='menu_ul'>
                <span className='close_btn' onClick={() => props.close()}>&times;</span>
                {
                    props.navItems.map((item, i) => {
                        return (
                            <li key={i}>
                                <NavLink
                                    to={item.url}
                                    className="nav_link"
                                >
                                    <div className="common_icon_st">
                                        <img src={item.img} alt="" className="img_fluid" />
                                    </div>
                                    {item.txt}</NavLink>
                            </li>
                        );
                    })
                }
            </ul >
            <ul className='socials'>
                {socials.map((item, i) => {
                    return (
                        <li key={i}>
                            <Link to={item.url}>
                                {item.txt ?
                                    <>{item.txt}</>
                                    :
                                    <FontAwesomeIcon icon={item.icon} />
                                }
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Header;