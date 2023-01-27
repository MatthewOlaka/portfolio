import styled from 'styled-components'
//import myImage from '../../images/pfp.png';

export const AboutContainer = styled.div`
    
    //background: #3f3f40;
    background-color: #202731;
    height: 1000px;
    overflow-x: hidden;

    @media screen and (max-width: 768px) {
         height: 1250px;
    }
    /*Add :before styles */
    
`
export const Padding = styled.div`
    
     
    //box-sizing: border-box;
    width: 80%;
    max-width: 1000px;
    background-color: #202731;
    margin: 0 auto;

  
    
`

export const H2 = styled.h2`
    font-size: 2.5rem;
    color: #fff;
    font-family: 'Sora';
    padding-bottom: 90px;
    margin-left: 0px;
    font-weight: 400;
    white-space: nowrap;

    @media screen and (max-width: 1024px) {
        font-size: 2.3rem;
    }

    @media screen and (max-width: 424px) {
        font-size: 2.3rem;
    }

    
`
export const H2Span = styled.span`
    /* background: #fff;
    padding: 5px 50px; */

    display: inline-block;
    width: 45%;
    height: 0.5px;
    background-color: #fff;
    vertical-align: middle;
    margin-left: 20px;
    overflow: auto;
    white-space: nowrap;

    @media screen and (max-width: 768px) {
        width: 15%;
    }
`

export const Span = styled.span`
    font-size: 3.8rem;
    font-family: 'Sora';
    //letter-spacing: 5px;

    @media screen and (max-width: 1024px) {
        font-size: 3.3rem;
    }
    @media screen and (max-width: 424px) {
        font-size: 2.3rem;
    }


`

export const Row = styled.div`
    display: grid;
    //background-color: blue;
    grid-auto-columns: minmax(auto, 1fr);
    //align-items: center;
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
    //background-color: red;
    margin-top: 40px;
    //padding: 0 0px;
    //margin-right: 50px;
    grid-area: col2;
    //background-color: yellow;

    display: block;

    justify-content: center;
    align-items: center;
    //margin-left: auto;
    //margin-right: auto;
    

    padding-left: 5vw;
    //width: 50%;

    @media screen and (max-width: 768px) {
        margin-top: 70px;
        /* padding-right: 85%;
        padding-left: 20%; */
        display: block;
       // margin-left: auto;
        //margin-right: auto;
        //width:28%;
        padding-left: 2vw;
        
    }

    
`
export const Li = styled.li`
   /*  border-bottom:5px solid #fff;
    padding-top:5px;

    margin-left: 2px;
    margin-right: 30px; */

    list-style: none;
	position: relative;
	padding:  0 0 0 25px;
    margin-top: 5px;
    //background-color: ;
    

    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 6px;
        height: 5px;
        width: 5px;
        border: 1px solid #0087ca;
        border-width: 2px 2px 0 0;
        transform: rotate(45deg);
    }
	

`

export const Bar1 = styled.div`
    border-bottom:5px solid #0087ca;
    //padding-top:7px;
    

    margin-left: 30px;
    margin-top: -5px;
    width: 85px;
    z-index: -1;
    background: #0087ca;
    //margin-right: 40px;
`
export const Bar2 = styled.div`
    border-bottom:5px solid #0087ca;
    //padding-top:7px;
    

    margin-left: 30px;
    margin-top: -5px;
    width: 40px;
    z-index: -1;
    background: #0087ca;
    //margin-right: 40px;
`

export const Ul = styled.ul`
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
    padding-top: 20px;
    
`

export const AboutP = styled.p`
    color: #fff;
    font-family: 'Sora';
    font-size: 1.1rem;
        @media screen and (max-width: 1024px) {
            font-size: 1rem;
        }
`


export const PFPImg = styled.img`
    height: 350px;
    width: auto;
    border-radius: 40px;

    //padding-right: 50px;
    transition: ease-in-out 0.8s;

    &:hover {

        color: #111; 
        background: #fff; 
        box-shadow: 0 0 80px #fff;
        

    }

    @media screen and (max-width: 1024px) {
        height: 300px;
    }

    @media screen and (max-width: 768px) {
        height: 330px;
        
    }

    @media screen and (max-width: 425px) {
        height: 300px;
        
    }
    @media screen and (max-width: 320px) {
        height: 250px;
        
    }

    
    
    
`

