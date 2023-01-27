import styled from 'styled-components'

//import myImage from '../../images/pfp.png';

export const ProjectsContainer = styled.div`
    
    //background: #3f3f40;
    background-color: #202731;
    height: 200px;
    overflow-x: hidden;

    @media screen and (max-width: 768px) {
         //height: 1350px;
    }
    /*Add :before styles */
    
`

export const Padding = styled.div`
    
    
    //box-sizing: border-box;
    width: 75%;
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

    @media screen and (max-width: 400px) {
        font-size: 2rem;
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
