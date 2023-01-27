import React, { useRef, useEffect } from 'react'
import { CardWrapper, Card, Left, Middle, Right, Row, Languages, Icons, Title, StyledAchor, LinkText, Img, Number, Span, /* WebLink, */ GitHub, GitHubA /* , BigRow */ } from './ProjectCardsElements';
import hoverEffect from 'hover-effect';
import overlay1 from '../../images/overlay.png'




const ProjectCards = ({ title, languages, imagee1, imagee2, cardNumber, text, siteLink, gitHubLink }) => {

    const container = useRef();
    
    useEffect(() => {

        console.log(container.current);

        
        new hoverEffect({
            //parent: document.querySelector(Middle),
            parent: container.current,
            intensity: 0.5,

            image1: imagee1,
            image2: imagee2,
            displacementImage: overlay1

        });
        //})
        
    }, [container]);


    return (
        <CardWrapper>



            <Card>
                <Row>
                    <Left>
                        <Languages>{languages}</Languages>
                    </Left>
                    {/* <Pic> */}
                    <Middle

                        ref={container}
                        style={{ overflow: "hidden", borderRadius: 60 }}
                    >
                        {/* <Pic /> */}

                    </Middle>
                    {/* </Pic> */}
                    <Right>
                        <Title><Span>{title}</Span></Title>
                        <StyledAchor href={siteLink} target="_blank" rel="noreferrer">{/* <Link> */}
                            <LinkText>
                                {text}
                            </LinkText>
                        {/* </Link> */}</StyledAchor>
                        <Icons>{/* <WebLink /> */} <GitHubA href={gitHubLink} target="_blank" rel="noreferrer"><GitHub /></GitHubA></Icons>

                    </Right>
                    <Number><Img src={cardNumber} /></Number>
                </Row>
            </Card>





        </CardWrapper>
    )
}

export default ProjectCards