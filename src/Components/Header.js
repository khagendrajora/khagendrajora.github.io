import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import Typed from 'typed.js'





export const Header = () => {
    const [elementText, setElementText] = useState('')
    const windowSize = useRef(window.innerWidth)
    useEffect(() => {
        var typed = new Typed('#element', {
            strings: ['Computer Engineer', 'Web Developer', 'Programmer'],
            typeSpeed: 1
        })
        setElementText(typed.strings[0])
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
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Me</a></li>
                                <li><a href="#">Contact</a></li>

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
