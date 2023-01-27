import React from 'react'
import { SidebarContainer,Icon, CloseIcon, SidebarWrapper, SidebarMenu, SideBtnWrap, SidebarLink, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
       <Icon onClick={toggle}>
           <CloseIcon />
       </Icon> 
       <SidebarWrapper>
           <SidebarMenu>
               <SidebarLink to='about' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>About Me</SidebarLink>
               <SidebarLink to='projects' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</SidebarLink>              
               <SidebarLink to='moreprojects' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>More Projects</SidebarLink>
               <SidebarLink to='contact' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact Me</SidebarLink>
               
           </SidebarMenu>
           <SideBtnWrap>
               <SidebarRoute onClick={() => window.location = 'mailto:matthew.olaka0@gmail.com'}>Say Hi</SidebarRoute>
           </SideBtnWrap>
       </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar