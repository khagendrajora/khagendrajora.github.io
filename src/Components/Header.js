import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import React, { useRef } from 'react'

import { useEffect, useState } from 'react'
import Typed from 'typed.js'
// import styled from 'styled-components'
// const StyledSvg = styled.svg`
// position:fixed;
// `

export const Header = () => {
    const [elementText, setElementText] = useState('')
    const windowSize = useRef(window.innerWidth)
    const [showMenu, setShowMenu] = useState(false)

    const menuClickHandler = () => {
        setShowMenu(!showMenu)

    }

    const PersonlDetails = () => {
        const PersonlDetails = document.getElementById('personalDetail')
        if (PersonlDetails) {
            window.scrollTo({
                top: PersonlDetails.offsetTop,
                behavior: 'smooth'
            })
        }
    }

    const ContactMe = () => {
        const contacts = document.getElementById('contactme')
        if (contacts) {
            window.scrollTo({
                top: contacts.offsetTop,
                behavior: 'smooth'
            })
        }
    }
    const Projects = () => {
        const project = document.getElementById('project')
        if (project) {
            window.scrollTo({
                top: project.offsetTop,
                behavior: 'smooth'
            })
        }
    }
    useEffect(() => {
        const strings = ['Computer Engineer', 'Web Developer', 'Programmer']
        new Typed('#element', {
            strings,
            typeSpeed: 0.1

        })
        setElementText(strings)
    }, [])
    return (
        <>
            <header>

                {windowSize.current > 576 &&
                    <>
                        <nav>

                            <ul>
                                Khagendra Singh Jora
                            </ul>
                            <ul>
                                <li className="menu">Home</li>
                                <li className="menu" onClick={PersonlDetails}>About Me</li>
                                <li className="menu" onClick={ContactMe}>Contact</li>
                                <li className='menu' onClick={Projects}>Projects</li>

                            </ul>

                        </nav>

                        <svg id="wave" style={{
                            transform: 'rotate(180deg)',
                            transition: '0.3s',
                            position: 'fixed',
                            height: '20rem'
                        }} viewBox="0 0 1440 290" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(62, 200.688, 243, 1)" offset="0%"></stop><stop stop-color="rgba(78.415, 111.152, 205.281, 0.75)" offset="100%"></stop></linearGradient></defs><path style={{
                            transform: 'translate(0, 0px)',
                            opacity: '1',
                            position: 'fixed',
                            height: '20rem'
                        }} fill="url(#sw-gradient-0)" d="M0,145L80,154.7C160,164,320,184,480,198.2C640,213,800,222,960,222.3C1120,222,1280,213,1440,178.8C1600,145,1760,87,1920,91.8C2080,97,2240,164,2400,159.5C2560,155,2720,77,2880,72.5C3040,68,3200,135,3360,140.2C3520,145,3680,87,3840,62.8C4000,39,4160,48,4320,48.3C4480,48,4640,39,4800,29C4960,19,5120,10,5280,43.5C5440,77,5600,155,5760,164.3C5920,174,6080,116,6240,87C6400,58,6560,58,6720,62.8C6880,68,7040,77,7200,106.3C7360,135,7520,184,7680,212.7C7840,242,8000,251,8160,251.3C8320,251,8480,242,8640,222.3C8800,203,8960,174,9120,149.8C9280,126,9440,106,9600,96.7C9760,87,9920,87,10080,91.8C10240,97,10400,106,10560,91.8C10720,77,10880,39,11040,43.5C11200,48,11360,97,11440,120.8L11520,145L11520,290L11440,290C11360,290,11200,290,11040,290C10880,290,10720,290,10560,290C10400,290,10240,290,10080,290C9920,290,9760,290,9600,290C9440,290,9280,290,9120,290C8960,290,8800,290,8640,290C8480,290,8320,290,8160,290C8000,290,7840,290,7680,290C7520,290,7360,290,7200,290C7040,290,6880,290,6720,290C6560,290,6400,290,6240,290C6080,290,5920,290,5760,290C5600,290,5440,290,5280,290C5120,290,4960,290,4800,290C4640,290,4480,290,4320,290C4160,290,4000,290,3840,290C3680,290,3520,290,3360,290C3200,290,3040,290,2880,290C2720,290,2560,290,2400,290C2240,290,2080,290,1920,290C1760,290,1600,290,1440,290C1280,290,1120,290,960,290C800,290,640,290,480,290C320,290,160,290,80,290L0,290Z"></path></svg>

                    </>
                }
                {windowSize.current < 576 &&
                    <>
                        <div className='nav'>
                            <FontAwesomeIcon icon={faBars} className='menuIcon' onClick={menuClickHandler} />
                            <ul className='name'>
                                Khagendra Singh Jora

                            </ul>

                        </div>


                        <div className={showMenu ? "nav-item mobile-menu visible" : "mobile-menu nav-item"}>
                            <ul className='nav-elements'>
                                <li className="menu">Home</li>
                                <li className="menu" onClick={PersonlDetails}>About Me</li>
                                <li className="menu" onClick={ContactMe}>Contact</li>
                                <li className='menu' onClick={Projects}>Projects</li>
                            </ul>
                            <FontAwesomeIcon icon={faXmark} className='close' onClick={menuClickHandler} />
                        </div>
                        <svg id="wave" style={{ transform: 'rotate(180deg)', transition: '0.3s', position: 'fixed' }} viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(72.72, 142.219, 196.174, 1)" offset="0%"></stop><stop stop-color="rgba(0, 212.668, 255, 1)" offset="100%"></stop></linearGradient></defs><path style={{ transform: 'translate(0, 0px)', opacity: '1' }} fill="url(#sw-gradient-0)" d="M0,392L120,351.2C240,310,480,229,720,204.2C960,180,1200,212,1440,187.8C1680,163,1920,82,2160,65.3C2400,49,2640,98,2880,106.2C3120,114,3360,82,3600,65.3C3840,49,4080,49,4320,40.8C4560,33,4800,16,5040,81.7C5280,147,5520,294,5760,302.2C6000,310,6240,180,6480,163.3C6720,147,6960,245,7200,302.2C7440,359,7680,376,7920,383.8C8160,392,8400,392,8640,392C8880,392,9120,392,9360,326.7C9600,261,9840,131,10080,114.3C10320,98,10560,196,10800,228.7C11040,261,11280,229,11520,196C11760,163,12000,131,12240,122.5C12480,114,12720,131,12960,147C13200,163,13440,180,13680,163.3C13920,147,14160,98,14400,106.2C14640,114,14880,180,15120,204.2C15360,229,15600,212,15840,171.5C16080,131,16320,65,16560,40.8C16800,16,17040,33,17160,40.8L17280,49L17280,490L17160,490C17040,490,16800,490,16560,490C16320,490,16080,490,15840,490C15600,490,15360,490,15120,490C14880,490,14640,490,14400,490C14160,490,13920,490,13680,490C13440,490,13200,490,12960,490C12720,490,12480,490,12240,490C12000,490,11760,490,11520,490C11280,490,11040,490,10800,490C10560,490,10320,490,10080,490C9840,490,9600,490,9360,490C9120,490,8880,490,8640,490C8400,490,8160,490,7920,490C7680,490,7440,490,7200,490C6960,490,6720,490,6480,490C6240,490,6000,490,5760,490C5520,490,5280,490,5040,490C4800,490,4560,490,4320,490C4080,490,3840,490,3600,490C3360,490,3120,490,2880,490C2640,490,2400,490,2160,490C1920,490,1680,490,1440,490C1200,490,960,490,720,490C480,490,240,490,120,490L0,490Z"></path></svg>
                    </>
                }

                <div className="image">
                    <img src="/Assets/lap.jpg" alt='logo' />
                    <div className="info">

                        <h1>Hi I am Khagendra Singh Jora</h1>
                        <p>I am a <span id="element">{elementText}</span> </p>


                    </div>
                </div>
            </header >
        </>
    )
}
