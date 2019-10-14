import React from 'react'
import {Navbar, Nav, Form} from 'react-bootstrap'
import ScrollIntoView from 'react-scroll-into-view'

export default function NavigationBar() {

    const fixed = {
        position: `fixed`,
        width: `100vw`,
        zIndex: `1`
        
    }

    const textColor = {

        color: `white`
    }


    return (
        <div style={fixed}> 
            <Navbar bg="dark" className="color"expand="lg" >
                <Navbar.Brand ><span style={textColor}>My Portfolio</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                         <ScrollIntoView selector=".AboutMeScroll"><Nav.Link><span style={textColor}>About Me</span></Nav.Link></ScrollIntoView>
                         <ScrollIntoView selector=".SkillsScroll"><Nav.Link><span style={textColor}>Skills</span></Nav.Link></ScrollIntoView>
                         <ScrollIntoView selector=".PortfolioScroll"><Nav.Link><span style={textColor}>Portfolio</span></Nav.Link></ScrollIntoView>
                         <ScrollIntoView selector=".ContactMeScroll"><Nav.Link><span style={textColor}>Contact Me</span></Nav.Link></ScrollIntoView>
                    </Nav>
                    <Form inline>
                    <ScrollIntoView selector=".TitleScroll"><Nav.Link><span style={textColor}>Back to the Top</span></Nav.Link></ScrollIntoView>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
       </div>
    )
}