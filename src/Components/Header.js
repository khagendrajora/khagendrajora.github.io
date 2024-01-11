import React, { useRef } from 'react'
import { useEffect, useState } from 'react'

import Typed from 'typed.js'





export const Header = () => {
    const [elementText, setElementText] = useState('')
    const windowSize = useRef(window.innerWidth)

    const Footers = () => {
        const contacts = document.getElementById('footer')
        if (contacts) {
            window.scrollTo({
                top: contacts.offsetTop,
                behavior: 'smooth'
            })
        }
    }
    useEffect(() => {
        const strings = ['Computer Engineer', 'Web Developer', 'Programmer']
        var typed = new Typed('#element', {
            strings,
            typeSpeed: 0.1,
            onComplete: function () {
                setElementText(typed.strings[0])
                setTimeout(() => {
                    typed.reset();
                    typed.start();
                }, 2000)

            }
        })


    })
    return (
        <>
            <header>
                <nav>
                    {windowSize.current > 576 &&
                        // <h1> Khagendra Singh Jora</h1>
                        <>
                            <ul>
                                Khagendra Singh Jora
                            </ul>
                            <ul>
                                <li className="menu">Home</li>
                                <li className="menu">About Me</li>
                                <li className="menu" onClick={Footers}>Contact</li>

                            </ul>
                        </>
                    }
                    {windowSize.current < 576 &&
                        // <h1> Khagendra Singh Jora</h1>
                        <>
                            <ul>
                                Khagendra Singh Jora
                            </ul>
                        </>
                    }
                </nav>
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
