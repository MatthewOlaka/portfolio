import React from 'react'
import { AboutContainer, H2, Row, H2Span, Column1, Column2, AboutP, PFPImg, Ul, Li, Bar1, Bar2, Padding, Span } from './AboutMeElements';
import PFPSrc from '../../images/pfp.png';
//import PFPSrc from '../../images/giffy.gif'


const AboutMe = () => {
    return (
        <AboutContainer id="about">
            <Padding>

            
            <H2><Span>01 /</Span> {/* &nbsp; */} About Me<H2Span></H2Span></H2>
            <Row>
                {/* <Column> */}
               
                <Column1>
                
                
                    <AboutP>
                        Hello! My name is Matthew Olaka. I am a computer science and statistics graduate that is passionate
                        about the creation of digital products that help people experience everyday life, not just endure it.
                        <br />
                        <br />
                        I have a strong attraction to full stack development, there's just something about completing a project
                        that looks great and works efficiently that is euphoric.
                        <br />
                        <br />
                        Here are some technologies ive worked with recently:
                        
                        <Ul>
                            <Li>Dart (Flutter)</Li>
                            <Bar1 />
                            <Li>React</Li>
                            <Bar2 />
                            <Li>Python</Li>
                            <Bar2 />
                            <Li>Java</Li>
                            <Bar2 />
                            <Li>JavaScript (ES6+)</Li>
                            <Bar1 />
                            <Li>HTML</Li>
                            <Bar2 />
                            <Li>CSS</Li>
                            <Bar2 />
                            <Li>R</Li>
                            <Bar2 />
                        </Ul>

                        <br />
                        <br />
                        I also recently established a company that is primarily a finance application which allows investment
                        groups to manage their progress, make transactions, save money and much more... but we're just about to get into that.
                    </AboutP>
                </Column1>
                <Column2><PFPImg src={PFPSrc} /></Column2>
                {/* </Column> */}
            </Row>
            </Padding>
        </AboutContainer>
    )
}

export default AboutMe