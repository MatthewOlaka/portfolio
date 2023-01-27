/* import Pace from 'pace-js'; */
//import Pace from 'react-pace-progress'

/* import { TweenMax } from 'gsap/gsap-core' */

/* import gsap from 'gsap' */
import "./styles.css";
import React, { useState } from 'react'
import { HeroContainer, Box1, Box2, HeroH1, HeroH2, HeroH3, HeroBtnWrapper, BtnLink, ArrowForward, ArrowRight, Span, Padding} from './HeroElements';
/* import ClipLoader from "react-spinners/ClipLoader";
 */
//import * as yourModuleName from 'module-name';
//const pacejs = require('pace-js');

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <>
           
                    <HeroContainer id='home'>

                        <Box1 />

                        <Padding>
                            <Box2>
                                <HeroH1>
                                    hi, <Span>Matty</Span> here.
                                </HeroH1>


                                <HeroH2>
                                    <br />I am a part time computer scientist and creative,<br /> but a full time self proclamined genius...<br />
                                </HeroH2>
                                <HeroH3>
                                    Jokes aside... welcome to my website!<br /> Scroll to find out more.
                                </HeroH3>


                                <HeroBtnWrapper>
                                    <BtnLink onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" href="mailto:matthew.olaka0@gmail.com" target="_blank" rel="noreferrer">
                                        Say Hi {hover ? <ArrowForward /> : <ArrowRight />}
                                    </BtnLink>
                                </HeroBtnWrapper>

                            </Box2>
                        </Padding>




                    </HeroContainer>

            


        </>
    )
}

export default HeroSection