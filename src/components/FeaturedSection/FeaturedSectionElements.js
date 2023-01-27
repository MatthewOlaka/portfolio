import styled from 'styled-components'
/* import {Link} from 'react-scroll' */
import {MdArrowRightAlt, MdArrowRight} from 'react-icons/md'



export const FeatureContainer = styled.div`
    
    //background: #3f3f40;
    box-sizing: border-box;
    width: 100%;
    margin-top: -50px;
    background-color: #202731;
    height: 800px;
    overflow-x: hidden;

    @media screen and (max-width: 768px) {
         height: 1100px;
    }
    /*Add :before styles */
    
`

export const Padding = styled.div`
    
    
    //box-sizing: border-box;
    width: 65%;
    max-width: 1000px;
    background-color: #202731;
    margin: 0 auto;

  
    
`

export const Row = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1 col1' 'col2 col2';
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    //padding: 0 0 0 100px;
    //padding-left: 13vw;
    grid-area: col1;
    //background-color: blue;
    @media screen and (max-width: 768px) {
        //padding-right: 13vw;
    }
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    //padding: 0 0px;
    //margin-right: 50px;
    grid-area: col2;
    //background-color: yellow;

    display: block;
    margin-left: auto;
    margin-right: auto;
    

    //padding-right: 19vw;
    width: 80%;

    @media screen and (max-width: 768px) {
        margin-top: 70px;
        /* padding-right: 85%;
        padding-left: 20%; */
        display: block;
        margin-left: auto;
        margin-right: auto;
        width:58%;
    }
    @media screen and (max-width: 425px) {
        
        width: 100%;
    }

    
`

export const H2 = styled.h2`
    font-size: 2.8rem;
    color: #fff;
    font-family: 'Sora';
    
    margin-left: 0px;
    font-weight: 400;
    white-space: nowrap;

    @media screen and (max-width: 768px){
        font-size: 2.5rem;
        
    }
    @media screen and (max-width: 425px){
        font-size: 2rem;
        
    }
    
`

export const Bar = styled.div`
    border-bottom:13px solid #0087ca;
    //padding-top:7px;
    

    margin-left: 30px;
    
    margin-top: -18px;
    width: 355px;
    z-index: -1;
    background: #0087ca;
    //margin-right: 40px;

    @media screen and (max-width: 768px){
        width: 320px;
        
    }

    @media screen and (max-width: 425px){
        width: 260px;

        
        
    }
`

export const P = styled.p`
    color: #fff;
    font-family: 'Sora';
    font-size: 18px;
    margin-top: 50px;
`
export const Arrow = styled.div`

    display:inline-block;
    //float:left;
    cursor:pointer;
    margin-top: 50px;
    
    
  
  
  &:before{
    content:'';
    height:1px;
    width:10px;
    background-color: grey;
    display:block;
    float:left;
    position:relative;
    top:7px;
    transition:0.2s ease-in-out;
  }
  
  &:after{
    content:'';
    float:left;
    border-left:7px solid grey;
    border-right:7px solid transparent;
    border-top:7px solid transparent;
    border-bottom:7px solid transparent;
  }
  &:hover:after{
    border-left:7px solid #fff;
    border-right:7px solid transparent;
    border-top:7px solid transparent;
    border-bottom:7px solid transparent;
    transition: 1s;
  }
  
  &:hover:before{
    width:100px;
    background-color: #fff;
    //border-left: #000;
  }
  `

export const BtnText = styled.text`
    color: white;
    font-family: 'Sora';
    font-size: 20px;
    top: -5px;
    position: relative;

    
    
`


export const MockupImg = styled.img`
    height: 600px;
    width: auto;
    border-radius: 40px;
    //padding-right: 50px;

    @media screen and (max-width: 900px) {
        height: 500px;
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
    //transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-family: 'Sora';
    background-image: -webkit-linear-gradient(92deg, #254D8C, #1B83C2);
    
    
  

    &:hover {
        transition: all 0.8s ease-in-out;
        background: ${({primary}) => (primary ? '#1B83C2' : '#254D8C')};
    }
    
`

export const HeroBtnWrapper = styled.div`
    margin-top: 50px;
    //margin-left: -340px;
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 250px;
    height: 100px;
    //background: red;    
    
`

export const ArrowForward = styled(MdArrowRightAlt)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

