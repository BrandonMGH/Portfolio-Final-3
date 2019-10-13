import React from 'react'

//** PAGE COMPONENTS  **//
import NavigationBar from '../Navbar/Navbar.js'
import Title from '../Title/Title.js'
import AboutMe from '../AboutMe/AboutMe.js'
import Skills from '../Skills/Skills.js'
import Portfolio from '../Portfolio/Portfolio.js'
import ContactMe from '../ContactMe/ContactMe.js'
import Footer from '../Footer/Footer.js'


export default function Main() {

    const scrollIntoViewInfo = {
        Title: "TitleScroll",
        About: "AboutMeScroll",
        Skills: "SkillsScroll",
        Portfolio: "PortfolioScroll",
        Contact: "ContactMeScroll"
      }

    return (
        <div>
           <div><NavigationBar /></div>
           <div className={scrollIntoViewInfo.Title}><Title /></div>
           <div className={scrollIntoViewInfo.About}><AboutMe /></div>
           <div className={scrollIntoViewInfo.Skills}><Skills /></div>
           <div className={scrollIntoViewInfo.Portfolio}><Portfolio /></div>
           <div className={scrollIntoViewInfo.Contact}><ContactMe /></div>
           <Footer />

        </div>
    )
}
