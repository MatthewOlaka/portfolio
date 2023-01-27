import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, StyledAchor,  NavItemSpacer } from './NavbarElements';
import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll/modules';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };


    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>

            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>
                            {/* <NavLogoImg src={Icon} /> */}
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <StyledAchor>
                                    <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>about me</NavLinks>
                                </StyledAchor>
                            </NavItem>
                            <NavItemSpacer>||</NavItemSpacer>
                            <NavItem>
                                <StyledAchor>
                                    <NavLinks to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>projects</NavLinks>
                                </StyledAchor>
                            </NavItem>
                            <NavItemSpacer>||</NavItemSpacer>
                            <NavItem>
                                <StyledAchor>
                                    <NavLinks to="moreprojects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>more projects</NavLinks>
                                </StyledAchor>
                            </NavItem>
                            <NavItemSpacer>||</NavItemSpacer>
                            <NavItem>
                                <StyledAchor>
                                    <NavLinks to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>contact me</NavLinks>
                                </StyledAchor>
                            </NavItem>
                        </NavMenu>
                       
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar