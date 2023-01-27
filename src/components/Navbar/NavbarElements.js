import styled, { keyframes } from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

const slideDown = keyframes`
    0% {transform: translateY(0);}
    100% {transform: translateY(10px);opacity:1;}
  `


export const Nav = styled.nav`
    //background: #2f2f30;
    //background-color: #3f3f40;
    //background-color: #202731;
    background: ${({scrollNav}) => (scrollNav ?  'rgba(32, 39, 49, 0.68)' :'#202731')};   
    box-shadow: ${({scrollNav}) => (scrollNav ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none')};
    backdrop-filter: ${({scrollNav}) => (scrollNav ? 'blur(4.9px)' : 'none')};
    -webkit-backdrop-filter: ${({scrollNav}) => (scrollNav ? 'blur(4.9px)' : 'none')};
    //border: 1px solid rgba(32, 39, 49, 0.96);
    border: ${({scrollNav}) => (scrollNav ? '1px solid rgba(32, 39, 49, 0.96)' : 'none')};;

    height: 80px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    
    //overflow-x: hidden;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        

       /*  overflow-x: visible; */
        
    }

`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
   // overflow: hidden;
`

export const NavLogo = styled(LinkR)`
    //color: #000;
    //color: ${({scrollNav}) => (scrollNav ? '#000' : '#000')};
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem; 
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

/* export const NavLogoImg = styled.img`
    width: 35px;
    height: auto;
` */

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({scrollNav}) => (scrollNav ? '#000' : '#fff')};
}
`

export const NavMenu = styled.ul`
    //margin-right: -22px;
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;


@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavItem = styled.li`
    height: 80px;
    opacity: 0;
    margin-top: 35px;
    animation: ${slideDown} .3s forwards 2s;
   
`

export const StyledAchor = styled.a`
//color: blue;
display: inline-block;
position: relative;
color: #0087ca;


&::after {
    content: '';
    position: absolute;
    width: 80%;
    transform: scaleX(0);
    height: 10px;
    bottom: 0;
    left: 20px;
    z-index: -1;
    
    background-color: #0087ca;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;

    
}

&:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 17px;
    font-family: 'Sora';

    /* &.active {
        border-bottom: 3px solid #1B83C2;
    } */
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #254D8C;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #1B83C2;
        color: #010606;
    }
`

export const NavItemSpacer = styled.h1`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    opacity: 0;
    margin-top: -25px;
    animation: ${slideDown} .3s forwards 3.5s;
   
`