
import React from 'react'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'





export const Experience = () => {
    const HEX = () => {
        const file = '/Assets/HEx.jpg'
        window.open(file, 'blank')
    }
    const Dursikshya = () => {
        const file = 'Assets/dursikshya.jpg'
        window.open(file, '_blank')
    }
    const Techfest = () => {
        const file = 'Assets/Khagendra.png'
        window.open(file, '_blank')
    }
    const Docker = () => {

    }
    return (
        <>
            <Tooltip id="my-tooltip" />
            <div className="Experiences">
                <div className="skills">
                    <div className='title'>Skills</div>

                    <div className='programmingLanguages'>

                        <div className='icon'><img src='/Assets/letter-c.png'
                            alt='letter'
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content='C Programming'
                            data-tooltip-class-name='cProgramming'
                            data-tooltip-place='top'

                        /></div>
                        <div className='icon'><img src='/Assets/c-.png' alt='c'
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content='C++ Programming'
                            data-tooltip-class-name='oop'
                            data-tooltip-place='top'
                        /></div>
                        <div className='icon'><img src='/Assets/java-script.png' alt='js'
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content='JavaScript'
                            data-tooltip-class-name='js'
                            data-tooltip-place='top'
                        /></div>
                        <div className='icon'><img src='/Assets/ts.png' alt='ts'
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content='TypeScript'
                            data-tooltip-class-name='ts'
                            data-tooltip-place='top'
                        /></div>

                    </div>
                    <hr />
                    <div className='programmingLanguages'>
                        <div className='icon'><img src='/Assets/html-5.png' alt='html'
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content='HTML'
                            data-tooltip-class-name='html'
                            data-tooltip-place='top'
                        /></div>
                        <div className='icon'><img src='/Assets/css-3.png' alt='css'
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content='CSS'
                            data-tooltip-class-name='css'
                            data-tooltip-place='top'
                        /></div>
                        <div className='icon'><img src='/Assets/bootstrap.png' alt='bot'
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content='Bootstrap 5'
                            data-tooltip-class-name='bootstrap'
                            data-tooltip-place='top'
                        /></div>
                        <div className='icon'><img src='/Assets/tailwind.png' alt='tss'
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content='Tailwind Css'
                            data-tooltip-class-name='tss'
                            data-tooltip-place='top'
                        /></div>

                    </div>
                    <hr />
                    <div className='programmingLanguages'>
                        <div className='icon'><img src='/Assets/react.png' alt='react'
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content='React'
                            data-tooltip-class-name='react'
                            data-tooltip-place='top'
                        /></div>
                        <div className='icon'><img src='/Assets/express-js.png' alt='react'
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content='Express.Js'
                            data-tooltip-class-name='express'
                            data-tooltip-place='top'
                        /></div>
                        <div className='icon'><img src='/Assets/nodejs.png' alt='node'
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content='Node.JS'
                            data-tooltip-class-name='node'
                            data-tooltip-place='top'
                        /></div>
                    </div>
                    <hr />
                    <div className='programmingLanguages' >
                        <div className='icon'><img src='/Assets/mdb.png' alt='mdb_icon'
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content='MongoDb'
                            data-tooltip-class-name='mongodb'
                            data-tooltip-place='top'
                        /></div>

                    </div>
                    <hr />
                    <div className='programmingLanguages' >

                        <div className='icon'><img src='/Assets/github.png' alt='git_icon'
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content='Version Control Git'
                            data-tooltip-class-name='git'
                            data-tooltip-place='top' /></div>
                    </div>
                    <hr />
                </div>

                <div className="certificates">
                    <div className='title'>Participation</div>
                    <div className='workshops'>

                        <div className='certificate-one'>
                            <h1 className='one'>1.</h1>
                            <div className='file' onClick={HEX}><span>HEx Genius HACKATHON</span></div>
                        </div>
                        <div className='certificate-one'>
                            <h1 className='one'>2.</h1>
                            <div className='file' onClick={Dursikshya}><span>In-House Project Competition</span></div>
                        </div>
                        <div className='certificate-one'>
                            <h1 className='one'>3.</h1>
                            <div className='file' onClick={Docker}><span>3-day Workshop on Docker</span></div>
                        </div>
                        <div className='certificate-one'>
                            <h1 className='one'>4.</h1>
                            <div className='file' onClick={Techfest}><span>Participation in IIT Techfest Bombay</span></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
