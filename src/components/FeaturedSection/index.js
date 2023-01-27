import React, { useState } from 'react'
import { FeatureContainer, Row, Column1, Column2, P, MockupImg, Padding, H2, Bar, HeroBtnWrapper, BtnLink, ArrowForward, ArrowRight } from './FeaturedSectionElements';
import MockupSrc from '../../images/giffy.gif';

const FeatureSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <FeatureContainer id="projects">

            <Padding>
                <Row>
                    {/* <Column> */}
                    <Column1>
                        {/* eslint-disable-next-line */}
                        <H2>Featured Project</H2>
                        <Bar />
                        <P>
                            Solely designed, developed and deployed a scalable cross platform application that
                            predominantly uses Flutter for the frontend and Node.js for the backend to connect
                            and utilize Firebase and Stripe services.
                        </P>
                        {/* <Arrow>
                            <BtnText>Try It Out</BtnText>
                        </Arrow> */}
                        <HeroBtnWrapper>
                           
                                <BtnLink onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true"  href="https://chama-app.com/#/download" target="_blank" rel="noreferrer">
                                    Try It {hover ? <ArrowForward /> : <ArrowRight />}
                                </BtnLink>
                            
                        </HeroBtnWrapper>
                    </Column1>
                    <Column2><MockupImg src={MockupSrc} /></Column2>
                    {/* </Column> */}
                </Row>
            </Padding>

        </FeatureContainer>

    )
}

export default FeatureSection