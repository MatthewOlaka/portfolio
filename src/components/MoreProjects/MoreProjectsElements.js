import styled from 'styled-components'
import { FiGithub } from 'react-icons/fi'
import { IoOpenOutline } from "react-icons/io5";

export const MoreCardsWrapper = styled.div`
    background-color: #202731;
    //font-family: 'Titan One', cursive;
    color: #2f2f2f;
    //overflow-x: hidden;


`


export const MainContent1 = styled.div`
    width: 100%;
    height: 500vh;
  `

export const Sticky = styled.div`
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  `

export const StickyBackground = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10vw;
  
  `

export const CardFrame = styled.div`
    position: absolute;
    width: 95vw;
    height: 30vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;

    

    @media screen and (max-width: 768px) {
      display: grid;
      height: initial;
      width: initial;
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(2, 1fr);
      gap: 13vw;
      justify-items: center;
    }
    
   `

export const Card = styled.div`
    width: 24%;
    height: 100%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20vw;
    transform-style: preserve-3d;
    position: relative;
    transform: perspective(100vw)
    translateX(100vw) 
    rotateY(180deg);
    transition: transform 0.01s;
    //transition: all 0.2s ease-in-out;

    @media screen and (max-width: 768px) {
      width: 35vw;
      height: 45vw;
    }

    
  `



export const Front = styled.div`
    /* position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 1vw;
    overflow: hidden;
    backface-visibility: hidden;
    background-color: #FFF;
    //font-size: 0.15em;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center; */

    
    width: 100%;
    height: 100%;
    border-radius: 1vw;
    overflow: hidden;
    backface-visibility: hidden;
    background-color: #FFF;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
    padding-right: 10px;
    transition: ease-in-out 0.5s;

    &:hover{
        transform: translateY(-20px) scale(1.05);
        
    }
  `

export const Back = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 1vw;
    overflow: hidden;
    backface-visibility: hidden; 
    transform: rotateY(180deg);
    //background-color: #E0DED7;
    background-color: #1A5062;
    //background-image: repeating-linear-gradient(0deg, #3B3A38, #3B3A38 33.3%, #ffffff00 0px, #ffffff00 67%);
    background-size: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
  `

export const BackNumber = styled.text`
    font-family: 'Academy Engraved LET';
    color: #fff;
    font-size: 5vw;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    //background-color: red;
    margin-top: 11vw;
    margin-left: -2.5vw;
    

`

export const Img = styled.img`
    width: 50vw;
    max-width: 600px;
    min-width: 450px;
    opacity: 0.7;


`


export const Title = styled.div`
    font-size: 2.4vw;
    font-family: 'Sora';
    font-weight: 600;
   // background-color: blue;
    text-align: center;

    @media screen and (max-width: 768px) {
      
      font-size: 3.5vw;
    }
`

/* export const WriteUp = styled.text`
    font-size: 1.5vw;
    font-family: 'Sora';
    text-align: left;
    //background-color: black;
    //font-weight: 600;

` */

export const Languages = styled.text`
    font-size: 1.1vw;
    font-family: 'Sora';
    //padding-bottom: 30px;
    //text-align: left;
    @media screen and (max-width: 768px) {
      
      font-size: 1.8vw;
    }
    

`
export const Icons = styled.div`
    //background-color: green;
    height: 5vw;
    width: 20vw;
    display: flex;
    align-items: center;
    justify-content: right;
    font-size: 3vw;
    
    //padding-right: 10px;
    /* justify-content: center;
    align-items: center; */
    @media screen and (max-width: 768px) {
      width: 30vw;
      font-size: 4vw;
    }

`

export const GitHub = styled(FiGithub)`
   // margin-left: 8px;
    //font-size: 3vw;
    transition: ease-in-out 0.5s;
    &:hover{
        color: #1B83C2;
        transform: translateY(-10px);
        
    }
    
`
export const GitHubA = styled.a`
  color: #2f2f2f;

`

export const WebLinkA = styled.a`
  color: #2f2f2f;

`

export const WebLink = styled(IoOpenOutline)`
   // margin-left: 8px;
   margin-right: 8px;
   margin-top: -10px;
    //font-size: 3vw;
    transition: ease-in-out 0.5s;
    &:hover{
        color: #1B83C2;
        transform: translateY(-10px);
    }
`
