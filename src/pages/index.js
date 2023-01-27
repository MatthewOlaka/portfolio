import React, {useState} from 'react'
import AboutMe from '../components/AboutMe'
import HeroSection from '../components/HeroSection'
import { projectObjOne,projectObjTwo,projectObjThree,projectObjFour } from '../components/ProjectCards/Data'
import Navbar from '../components/Navbar'
import ProjectCards from '../components/ProjectCards'
import Sidebar from '../components/Sidebar'
import chama1 from '../images/newnew.png'
import chama2 from '../images/chamalogo.png'
import monty1 from '../images/monty.png'
import monty2 from '../images/M.png'
import albums1 from '../images/ogwall.png'
import albums2 from '../images/arwall.png'
import pwimg1 from '../images/pwimg5.png'
import pwimg2 from '../images/pwimg4.png'

import NumberImgI from '../images/I.png';
import NumberImgII from '../images/II.png';
import NumberImgIII from '../images/III.png';
import NumberImgIV from '../images/IV.png';

import Projects from '../components/Projects'
import FeatureSection from '../components/FeaturedSection'
import MoreProjects from '../components/MoreProjects'
import ContactMe from '../components/ContactMe'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle}/>
    <HeroSection />
    <AboutMe />
    <Projects id="projects" number={'02'} title='Projects'/>
    <FeatureSection />
    <ProjectCards {...projectObjOne} imagee1 = {chama1} imagee2 = {chama2} cardNumber= {NumberImgI}/>
    
    <ProjectCards {...projectObjTwo} imagee1 = {monty2} imagee2 = {monty1} cardNumber= {NumberImgII} />
    <ProjectCards {...projectObjThree} imagee1 = {albums1} imagee2 = {albums2} cardNumber= {NumberImgIII} />
    <ProjectCards {...projectObjFour} imagee1 = {pwimg2} imagee2 = {pwimg1} cardNumber= {NumberImgIV}/>
    <Projects id="moreprojects" number={'03'} title='More Projects'/>
    <MoreProjects />
    <Projects id="contact" number={'04'} title='Contact Me'/>
    <ContactMe />
    {/* <ProjectCards /> */}
    {/* <InfoSection{...homeObjOne} />
    <InfoSection{...homeObjTwo} />
    <Features />
    <InfoSection{...homeObjThree} />
    <Footer /> */}
    </>
  )
}

export default Home