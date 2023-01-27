import styled from 'styled-components'
import {FiInstagram} from 'react-icons/fi'
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";


/* export const SvgContainer = styled.div`
    
    height: 800px;
    background-color: #202731;
    //background-color: green;
    overflow-x: hidden;
    //position: sticky;

    
    
`
export const Wrapper = styled.div`
    height: 100px;

   
  
    

`
export const Extra = styled.div`
    height: 300px;
`

export const Sticky = styled.div`
    position: sticky;
    position: -webkit-sticky;
    background: #f83d23;
    width: 100px;
    height: 100px;
    top: -100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 6px #000;
    color: #fff;
`


export const Svg = styled.svg`
    
    //position: fixed;
    //background-color: yellow;
	margin: auto;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 600px;
	height: auto;
    
	//max-width: 500px;
	//max-height: 340px;

    display: block;
    margin-top: 200px;
    margin-left: auto;
    margin-right: auto;
   // width: 50%;
    //padding-left: 50vw;
    //z-index: 40;

    //position: fixed;
        //top: 0%;
        //left: 50%;
        //width: 35rem;
        //height: 15rem;
        //transform: translate(-50%, -50%);
        //stroke: $prime;
        //stroke-linecap: round;
        //stroke-linejoin: round;
        //stroke-width: 0.4rem;
        //fill: transparent;
        //transition: fill 250ms; 
    
`

export const Path = styled.path`
    
    stroke-dashoffset: 1000;
	stroke-dasharray: 1000;
    
`


 */

/* export const Sticky = styled.div`
  position: sticky;
  position: -webkit-sticky;
  background: #f83d23;
  width: 100px;
  height: 100px;
  top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 6px #000;
  color: #fff;
` */

export const Svg = styled.svg`
    position: sticky;
    position: -webkit-sticky;
	margin: auto;
	top: 30vh;
	left: 0;
	right: 0;
	bottom: 0;
	width: 800px;
	height: auto;
    display: flex;
    //margin-top: 400px;
    margin-left: auto;
    margin-right: auto;
    fill: blue;
    display: block;
    text-align: center;

   // overflow: hidden;

    @media screen and (max-width: 768px){
        display: none;
        
        
    }
   
    
`

export const Path = styled.path`
    
    stroke-dashoffset: 1000;
	stroke-dasharray: 1000;
    
`

export const Path2 = styled.path`
    
    stroke-dashoffset: 1000;
	stroke-dasharray: 1000;
    
`
export const Path3 = styled.path`
    
    stroke-dashoffset: 1000;
	stroke-dasharray: 1000;
    
`
export const Path4 = styled.path`
    
    stroke-dashoffset: 1000;
	stroke-dasharray: 1000;
    
`
export const Path5 = styled.path`
    
    stroke-dashoffset: 1000;
	stroke-dasharray: 1000;
    
`

export const Extra = styled.div`
    //width: 75%;
    margin: auto;
    //background-color: #ccc;
    background-color: #202731;
    height: 250px;

    @media screen and (max-width: 768px){
        height: 0px;
        
    }

    

`

export const Wrapper = styled.div`
    width: 75%;
    margin: auto;
    //background-color: red;
    background-color: #202731;
    height: 1100px;

    @media screen and (max-width: 768px){
        height: 400px;
        
    }

`

export const Container = styled.div`
    height: 1200px;
    background-color: #202731;
    //background-color: blue;
    margin-top: -50px;
    //overflow-x: hidden;

    @media screen and (max-width: 768px){
        height: 450px;
    }

    @media screen and (max-width: 425px){
        height: 600px;
    }

`

export const BackText = styled.div`
    margin-top: -200px;
    font-size: 300px;
    color: grey;
    font-family: 'Sora';
    z-index: 1;
    opacity: 0.5;
    justify-content: right;
    text-align: right;
    

`

export const Ul = styled.ul`
    display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem;
  list-style-type: none;
  font-size: 5rem;
  padding: 3rem;
  margin-top: 600px;
  //background-color: black;

  @media screen and (max-width: 768px){
    //margin-top: 0px;
    margin: 0rem;
    
  }
`

export const Li = styled.li`
    padding: 1rem;
`


export const GitHub = styled(FaGithub)`
   // margin-left: 8px;
    //font-size: 3vw;
    color: #fff;
    transition: 0.45s ease-in-out ;
    &:hover{
        color: #000;
        transform: translateY(-10px) scale(1.1);
    }
  `
  export const LinkedIn = styled(BsLinkedin)`
  // margin-left: 8px;
   //font-size: 3vw;
   color: #fff;
   transition: 0.5s ease-in-out ;
   &:hover{
       color: #1B83C2;
       transform: translateY(-10px) scale(1.1);
   }
 `
  export const Instagram = styled(FiInstagram)`
  // margin-left: 8px;
   //font-size: 3vw;
   color: #fff;
   transition: 0.5s ease-in-out ;
   &:hover{
       //color: #1B83C2;
       transform: translateY(-10px) scale(1.1);
       color: #bd22a2;
  
       
   }
 `
 export const Gmail = styled(SiGmail)`
 // margin-left: 8px;
  //font-size: 3vw;
  color: white;
  transition: 0.5s ease-in-out ;
  &:hover{
      //color: #1B83C2;
      transform: translateY(-10px) scale(1.1);
      color: #DC4233;
 
      
  }
`

export const FLink = styled.a`

`


