import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import Typed from 'typed.js'


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

    const Footers = () => {
        const contacts = document.getElementById('footer')
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
        var typed = new Typed('#element', {
            strings,
            typeSpeed: 0.1

        })
    })
    return (
        <>
            <header>

                {windowSize.current > 576 &&
                    <>
                        <nav>
                            {/* <h1> Khagendra Singh Jora</h1> */}
                            <ul>
                                Khagendra Singh Jora
                            </ul>
                            <ul>
                                <li className="menu">Home</li>
                                <li className="menu" onClick={PersonlDetails}>About Me</li>
                                <li className="menu" onClick={Footers}>Contact</li>
                                <li className='menu' onClick={Projects}>Projects</li>
                            </ul>
                        </nav>
                    </>
                }
                {windowSize.current < 576 &&
                    <>
                        <div className='nav'>
                            <ul className='name'>
                                Khagendra Singh Jora

                            </ul>
                            <FontAwesomeIcon icon={faBars} className='menuIcon' onClick={menuClickHandler} />
                        </div>

                        <div className={showMenu ? "nav-item mobile-menu visible" : "mobile-menu nav-item"}>
                            <ul className='nav-elements'>
                                <li className="menu">Home</li>
                                <li className="menu" onClick={PersonlDetails}>About Me</li>
                                <li className="menu" onClick={Footers}>Contact</li>
                                <li className='menu' onClick={Projects}>Projects</li>
                            </ul>
                            <FontAwesomeIcon icon={faXmark} className='close' onClick={menuClickHandler} />
                        </div>
                    </>
                }

                <div className="image">
                    <img src="/Assets/lap.jpg" alt='logo' />
                    <div className="info">

                        <h1>Hi I am Khagendra Singh Jora</h1>
                        <p>I am a <span id="element">{elementText}</span> </p>
                        {/* <!-- Element to contain animated typing --> */}

                    </div>
                </div>
            </header >
        </>
    )
}
