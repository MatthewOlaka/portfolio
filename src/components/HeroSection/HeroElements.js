import styled, { keyframes } from 'styled-components'
import image1 from '../../images/HeroImage1.png'
import image2 from '../../images/Image33.png'
//import image1 from '../../images/newImage.png'
//import image2 from '../../images/newhero.png'
/* import {Link} from 'react-scroll' */
import {MdMail, MdMailOutline} from 'react-icons/md'

export const HeroContainer = styled.div`
    //background: #48484f;
    //background: #2f2f30;
    //background: #3f3f40;
    background-color: #202731;
    display: flex;
    flex-direction: row;
    //justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 1000px;
    position: relative;
    z-index: 1;
    margin-top: -80px;
    overflow-x: hidden;

    /*Add :before styles */
`

export const Padding = styled.div`
    
     
    //box-sizing: border-box;
    width: 75%;
    height: 100%;
    max-width: 1000px;
    //background-color: red;
    margin: 0 auto;

  
    
`
/* export const LineContainer = styled.div`
   //position: fixed;
   top: 1000px;
   left: 0;
   width: 100%;
   height: 100%;
   text-align: center;
   overflow: hidden;
`

export const Svg = styled.svg`
   display: inline-block;
   height: 150%;
`

export const Path = styled.path`
   
` */

const anim = keyframes`
    from {
        bottom: -100%;

    }
    to {
        bottom: 30%;
    }

`


const anim2 = keyframes`
    from {
        left: 30%;
        width: 520px;

    }
    to {
        width: 0px;
        left: 50%;
    }

`
const anim3 = keyframes`
    from {
        left: -100%;
        
    }
    to {
        left: 0%;
    }

`



const slideDown = keyframes`
    0% {transform: translateY(0);}
    100% {transform: translateY(30px);opacity:1;}
`

/* 
const bounce = keyframes`
    100% { transform: translateY(-5%); }
  ` 
*/

export const Box1 = styled.div`
& {
    width: 520px;
    height: 520px;
    background-image: url(${image1});
    position: absolute;
    bottom: -100%;
    left: 30%;
    margin-left: 80px;
    animation: ${anim} 2s forwards, ${anim2} 2s forwards 3s;
    //z-index: 2;

   @media screen and (max-width: 960px) {
        display: none;
    }
}

    &:after {
        
        position: absolute;
        content: '';
        width: 520px;
        height: 520px;
        background-image: url(${image2});
        left: 0px;
        z-index: -1;
    }
`

export const Box2 = styled.div`
& {
    width: auto;
    height: auto;
    font-family: 'Sora';
    color: #fff;
    //font-size: 4.5em;
    //font-weight: 600;
    //line-height: 130px;
    position: relative;
    top: 250px;
    //left: 150px;
    overflow: hidden;
    //z-index: -1;
}
`


export const HeroH1 = styled.text`
    position: relative;
    font-family: 'Sora';
    left: -100%;
    font-size: 4.5em;
    font-weight: 600;
    line-height: 130px;
    animation: ${anim3} 2s forwards 3s;
    //margin-left: 10px;

    @media screen and (max-width: 960px) {
         font-size: 9vw;
         //animation: ${anim3} 2s forwards 3s;
         animation: ${anim3} 2s forwards 0.3s;
    }

    @media screen and (max-width: 457px) {
         font-size: 8vw;
         //animation: ${anim3} 2s forwards 3s;
    }

    
`

export const HeroH2 = styled.text`
    width: auto;
    height: auto;
    font-family: 'Sora';
    color: #fff;
    font-size: 1.2em;
    font-weight: 500;
    line-height: 26px;
    //top: -133px;
    position: relative;
    //left: 125px;
    opacity: 0;
    animation: ${slideDown} .5s forwards 3.7s;

    @media screen and (max-width: 768px) {
         font-size: 1.1em;
         animation: ${slideDown} .5s forwards 0.7s;
    }

    @media screen and (max-width: 375px) {
         font-size: 1em;
    }
`
export const HeroH3 = styled.text`
    width: auto;
    height: auto;
    font-family: 'Sora';
    color: #fff;
    font-size: 1.2em;
    font-weight: 500;
    line-height: 26px;
    //top: 400px;
    position: absolute;
    //left: 155px;
    opacity: 0;
    animation: ${slideDown} .5s forwards 4s;
    
    @media screen and (max-width: 768px) {
         font-size: 1.1em;
         animation: ${slideDown} .5s forwards 1s;
    }

    @media screen and (max-width: 375px) {
         font-size: 1em;
    }


`

export const BtnLink = styled.a`

    border-radius: 20px;
    background: ${({primary}) => (primary ? '#254D8C' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff':'#010606')};
    font-size: ${({fontBig}) => (fontBig? '30px':'20px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-family: 'Sora';
    background-image: -webkit-linear-gradient(92deg, #254D8C, #1B83C2);
    
  

    &:hover {
        transition: all 0.8s ease-in-out;
        background: ${({primary}) => (primary ? '#1B83C2' : '#254D8C')};
    }
    opacity: 0;
    animation: ${slideDown} .5s forwards 4s;

    @media screen and (max-width:768px){

        animation: ${slideDown} .5s forwards 1s;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 100px;
    //margin-left: -340px;
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 250px;
    height: 100px;
    //background: red;   
    @media screen and (max-width: 394px) {
        width: 50vw;
    } 
    
`

export const ArrowForward = styled(MdMail)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdMailOutline)`
    margin-left: 8px;
    font-size: 20px;
`
const animated_text = keyframes`

	0% { background-position: 0px 50%; }
	50% { background-position: 100% 50%; }
	100% { background-position: 0px 50%; }
`

export const Span = styled.span`

    //background: linear-gradient(-45deg, #6355a4, #6355a4, #e89a3e, #e89a3e);
    background: linear-gradient(-45deg, #e771c5, #6355a4, #007E84, #1B83C2);
	background-size: 300%;
	font-family: "Sora";
    font-size: 70px;
    font-weight: 700;
    background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: ${animated_text} 3s ease-in-out infinite;
	-moz-animation: ${animated_text} 3s ease-in-out infinite;
	-webkit-animation: ${animated_text} 3s ease-in-out infinite;

    @media screen and (max-width: 960px) {
         font-size: 9vw;
    }

`;

