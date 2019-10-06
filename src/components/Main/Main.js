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
    return (
        <div>
           <NavigationBar />
           <Title />
           <AboutMe />
           <Skills />
           <Portfolio />
           <ContactMe />
           <Footer />

        </div>
    )
}
