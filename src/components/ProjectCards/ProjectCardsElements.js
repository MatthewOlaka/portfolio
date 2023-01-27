import styled, {keyframes} from 'styled-components'
/* import { Link as LinkR } from 'react-router-dom' */
/* import {Link as LinkS} from 'react-scroll' */
import { FiGithub } from 'react-icons/fi'
import { IoOpenOutline } from "react-icons/io5";

export const CardWrapper = styled.div`
    height: 750px;
    width: 100%;
    background-color: #202731;
    //background-color: #3f3f40;
    z-index: -20;
    //overflow-x: hidden;
    
    

`

export const Card = styled.div`
    height: 500px;
    width: 700px;
    //background-color: red;
    //background-image: linear-gradient(180deg, #6e6e6e, #3f3f40);
    //background-image: linear-gradient(180deg, #4D545F, #202731);
    background-image: linear-gradient(180deg, #353d49, #202731);
    
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 70px;
    border-style: solid;
    //border-color: #a1a1a1;
    border-color: #4D545F;
    border-width: 1px;
    //z-index:20;
    position: relative;
    //overflow: hidden;
    
    //opacity: 0.7;

    @media screen and (max-width: 768px) {

        /* height: 600px;
        width: 400px; */
        height: 600px;
        width: 55vw;

        
    }

    @media screen and (max-width: 425px) {

        height: 500px;
        width: 80vw;


}


`
export const Row = styled.div`
    display: grid;
    //grid-auto-columns: minmax(auto, 1fr);
    grid-template-columns: 0.5fr 2fr 2fr;
    
    //align-items: center;
    grid-template-areas: 'col1 col2 col3' 'col1 col2 col3' 'col1 . col3';
    overflow: hidden;
    //background-color: red;

    @media screen and (max-width: 768px) {
        grid-template-areas:  'col1 col1 col1' 'col2 col2 col2' 'col3 col3 col3';
        
        //grid-template-columns: 1fr;
        //grid-template-rows:  1fr 1fr 1fr;
        grid-template-rows:  0px 400px 1fr;
    }

    /* &:after{
     
        content: "";
        display: table;
        clear: both;

    } */
`

export const BigRow = styled.div`
//background: red;

    /* position: relative;     
    &:after{
     
        content: "";
        display: table;
        clear: both;

    } */
`

export const Left = styled.div`
    //background-color: yellow;
    //float: left;
    //width: 15%;
    //height: 500px;

    //height: 500px;
    //width: 100px;
    

    grid-area: col1;

    
    

`
export const Middle = styled.div`
    //background-color:  #202731;
    //background-color:  blue;
    //display: block;
    //float: left;
    //width: 40.5%;
    height: 400px;
    width: 300px;
    
    margin-top: 50px;
    //border-radius: 60px;
    //-webkit-border-radius: 30px;
    //-moz-border-radius: 10px;
    //margin-top: 70px;

    grid-area: col2;
    
    @media screen and (max-width: 768px) {

        height: 350px;
        width: 35vw;
        margin-left: 9vw;
       

    }

    @media screen and (max-width: 425px) {

        height: 300px;
        width: 60vw;
        margin-left: 9vw;
    }


`
/* export const Pic = styled.img`
    border-radius: 20;
    height: 200p;
    width: auto;
    
    //height: 200px;
    //width: auto;

` */
export const Right = styled.div`
    //background-color: pink;
    //float: left;
    //width: 42.5%;
    //height: 500px;
    //z-index: -3;
    height: 500px;
    width: 310px;
    grid-area: col3;

    @media screen and (max-width: 768px) {
        height: 200px;
        width: 400px;
       
    }

    @media screen and (max-width: 425px) {
        margin-top: -40px;
        
       
    }


`

export const Title = styled.div`
    font-size: 40px;
    font-family: 'Sora';
    margin-top: 100px;
    margin-left: 30px;
    color: #fff;
    font-weight: 600;
    //white-space: pre-wrap;


    @media screen and (max-width: 768px) {
    margin-top: 10px;
    margin-left: 30px;
    font-size: 5vw;

    }

    @media screen and (max-width: 425px) {
    
    font-size: 7vw;

    }
  
`

/* export const Link = styled(LinkS)`
    //margin-top: 100px;
    margin-left: 30px;
    //z-index: 2;
   
   
` */

export const LinkText = styled.div`
    font-size: 18px;
    font-family: 'Sora';
    margin-top: 0px;
    margin-left: 30px;
    color: #fff;
    text-decoration: none;
    z-index: 20;
    white-space: nowrap;
    position: absolute;

    @media screen and (max-width: 768px) {
    
    font-size: 2.5vw;

    }
    @media screen and (max-width: 425px) {
    
    font-size: 3vw;

    }
   
   
`

export const Languages = styled.div`
    
    font-family: 'Sora';
    writing-mode: vertical-rl;
    text-orientation: sideways-right;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    color: #cdcdcd;
    font-size: 13px;
    margin-top: 100px;
    margin-left: 40px;
    padding-left: 20px;
    
    
  //text-align: center;
    //align-items: center;
    letter-spacing: 0.5px;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
    
`

export const StyledAchor = styled.a`
//color: blue;
display: inline-block;
position: absolute;
color: #0087ca;
margin-top: 80px;
margin-left: 5px;
//z-index: 0;


&::after {
    content: '';
    position: absolute;
    width: 150px;
    transform: scaleX(0);
    height: 10px;
    bottom: 0;
    top: 12px;
    left: 45px;
    z-index: 0;
    
    background-color: #0087ca;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;

    
}

&:hover::after {
    position: absolute;
    transform: scaleX(1);
    transform-origin: bottom left;
    //z-index: 5;
  
}

@media screen and (max-width: 768px) {
    margin-top: 10px;
    }

`

export const Number = styled.div`
    //position: absolute;
    //top: 0px;
    //z-index: 30;
    
`
export const Img = styled.img`
   // margin-top: -600px;
   width: 40%;
   height: auto;
    position: absolute;
    top: -50px;
    right: -70px;
    z-index: 3;

    @media screen and (max-width: 768px) {
        width: 60%;
        top: -60px;
        right: -40px;
    }

    @media screen and (max-width: 512px) {
        width: 90%;
        
    }
    
`
export const Icons = styled.div`
    //background-color: green;
    //height: 5vw;
    //width: 25vw;
    /* display: flex;
    align-items: center;
    justify-content: right; */
    font-size:30px;
    margin-top: 180px;
    margin-left: 35px;
    //position: absolute;
    
    //padding-right: 10px;
    /* justify-content: center;
    align-items: center; */
    @media screen and (max-width: 768px) {
      //width: 30vw;
      //font-size: ;
        margin-top: 60px;
        //font-size: 20vw;
        //margin-left: 35px;
    }

    @media screen and (max-width: 425px) {
        margin-top: 40px;
     
    }

`

export const GitHub = styled(FiGithub)`
    //margin-left: 7px;
    font-size: 25px;
    color: #fff;
    transition: ease-in-out 0.5s;
    &:hover{
        color: #1B83C2;
        transform: translateY(-10px); 
        font-size: 30px;
        
    }

    @media screen and (max-width: 768px) {
        font-size: 5vw;
    }

    /* @media screen and (max-width: 425px) {
        font-size: 5vw;
     
    } */

    
    
`
export const WebLink = styled(IoOpenOutline)`
   // margin-left: 8px;
   margin-right: 8px;
    //font-size: 3vw;
    color: #fff;
    transition: ease-in-out 0.5s;
    &:hover{
        color: #1B83C2;
        transform: translateY(-10px);
        
    }
`
export const GitHubA = styled.a`

`

const animated_text = keyframes`

	0% { background-position: 0px 50%; }
	50% { background-position: 100% 50%; }
	100% { background-position: 0px 50%; }
`

export const Span = styled.span`

    //background: linear-gradient(-45deg, #6355a4, #6355a4, #e89a3e, #e89a3e);
    background: linear-gradient(-45deg, #007E84, #1B83C2, #fff);
	background-size: 300%;
	//font-family: "Sora";
    //font-size: 70px;
    font-weight: 700;
    background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: ${animated_text} 3s ease-in-out infinite;
	-moz-animation: ${animated_text} 3s ease-in-out infinite;
	-webkit-animation: ${animated_text} 3s ease-in-out infinite;

   

`;
