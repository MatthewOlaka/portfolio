import React, { useEffect } from 'react'
import { MoreCardsWrapper, MainContent1, Sticky, StickyBackground, CardFrame, Card, Front, Back, Img, Languages, Title, Icons, WebLink, GitHub, BackNumber, GitHubA, WebLinkA } from './MoreProjectsElements';
import backgroundCode from '../../images/backgroundCode.png'
//import CardFlipOnScroll from './ScrollAnimationScript';
//import {appendScript} from '../../hooks/useExternalScripts'






const MoreProjects = () => {
    useEffect(() => {
        class CardFlipOnScroll {
            constructor(wrapper, sticky) {
                this.wrapper = wrapper
                this.sticky = sticky
                this.cards = sticky.querySelectorAll(Card)
                this.length = this.cards.length

                this.start = 0
                this.end = 0
                this.step = 0
            }

            init() {
                // var innerHeight = "innerHeight"
                this.start = this.wrapper.offsetTop - 100
                this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - window.innerHeight * 1.2
                this.step = (this.end - this.start) / (this.length * 2)
            }


            animate() {
                //var scrollY = "scrollY"
                this.cards.forEach((card, i) => {
                    const s = this.start + this.step * i
                    const e = s + this.step * (this.length + 1)

                    if (window.scrollY <= s) {
                        card.style.transform = `
                    perspective(100vw)
                    translateX(100vw) 
                    rotateY(180deg)
                  `
                    } else if (window.scrollY > s && window.scrollY <= e - this.step) {
                        card.style.transform = `
                    perspective(100vw)
                    translateX(${100 + (window.scrollY - s) / (e - s) * -100}vw)
                    rotateY(180deg)
                  `
                    } else if (window.scrollY > e - this.step && window.scrollY <= e) {
                        card.style.transform = `
                    perspective(100vw)
                    translateX(${100 + (window.scrollY - s) / (e - s) * -100}vw)
                    rotateY(${180 + -(window.scrollY - (e - this.step)) / this.step * 180}deg)
                  `
                    } else if (window.scrollY > e) {
                        card.style.transform = `
                    perspective(100vw)
                    translateX(0vw) 
                    rotateY(0deg)
                  `
                    }
                })
            }
        }


        const mainContent1 = document.querySelector(MainContent1)
        const sticky = document.querySelector(Sticky)
        const cardFlipOnScroll = new CardFlipOnScroll(mainContent1, sticky)
        cardFlipOnScroll.init()

        window.addEventListener('scroll', () => {
            cardFlipOnScroll.animate()
        })

        window.addEventListener('resize', () => {
            cardFlipOnScroll.init()
        })

    }, []);



    return (
        <MoreCardsWrapper>

            <MainContent1>
                <Sticky>
                    <StickyBackground>
                        <Img src={backgroundCode} />
                    </StickyBackground>
                    <CardFrame>
                        <Card>
                            <Front>
                                <Icons><WebLinkA href="https://innovatory-minimum.000webhostapp.com/" target="_blank" rel="noreferrer"><WebLink /></WebLinkA><GitHubA href="https://github.com/MatthewOlaka/intelliautomations" target="_blank" rel="noreferrer"><GitHub /></GitHubA></Icons>
                                <Title>IntelliAutomation Website</Title>
                                {/* <WriteUp>Built a website that showcases an Interactive UI that is easy to use yet captivating.</WriteUp> */}
                                <Languages>HTML, CSS, Javascript</Languages>

                            </Front>
                            <Back><BackNumber>V</BackNumber></Back>
                        </Card>
                        <Card>
                            <Front>
                                <Icons><GitHubA href="https://github.com/MatthewOlaka/CSC360_Scheduler" target="_blank" rel="noreferrer"><GitHub /></GitHubA></Icons>
                                <Title>Scheduler</Title>
                                <Languages>C</Languages>
                            </Front>
                            <Back><BackNumber>VI</BackNumber></Back>
                        </Card>
                        <Card>
                            <Front>
                                <Icons><GitHubA href="https://github.com/MatthewOlaka/CSC360_LFS" target="_blank" rel="noreferrer"><GitHub /></GitHubA></Icons>
                                <Title>Log File System</Title>
                                <Languages>C</Languages>
                            </Front>
                            <Back><BackNumber>VII</BackNumber></Back>
                        </Card>
                        <Card>
                            <Front>
                                <Icons><GitHubA href="https://github.com/MatthewOlaka/CSC360_Shell" target="_blank" rel="noreferrer"><GitHub /></GitHubA> </Icons>
                                <Title>Unix Shell;</Title>
                                <Languages>C</Languages>
                            </Front>
                            <Back><BackNumber>VIII</BackNumber></Back>
                        </Card>

                    </CardFrame>
                </Sticky>
            </MainContent1>
        </MoreCardsWrapper>
    )
}

export default MoreProjects