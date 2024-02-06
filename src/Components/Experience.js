
import React from 'react'


export const Experience = () => {
    const HEX = () => {
        const file = '/Assets/HEx.jpg'
        window.open(file, 'blank')
    }
    const Dursikshya = () => {
        const file = 'Assets/dursikshya.jpg'
        window.open(file, '_blank')
    }
    const Docker = () => {

    }
    return (
        <>
            <div className="Experiences">
                <div className="skills">
                    <div className='title'>Skills</div>

                    <div className='programmingLanguages'>
                        <div className='icon'><img src='/Assets/letter-c.png' alt='letter' /></div>
                        <div className='icon'><img src='/Assets/c-.png' alt='c' /></div>
                        <div className='icon'><img src='/Assets/java-script.png' alt='js' /></div>

                    </div>
                    <hr />
                    <div className='programmingLanguages'>
                        <div className='icon'><img src='/Assets/html-5.png' alt='html' /></div>
                        <div className='icon'><img src='/Assets/css-3.png' alt='css' /></div>
                        <div className='icon'><img src='/Assets/bootstrap.png' alt='bot' /></div>
                        <div className='icon'><img src='/Assets/tailwind.png' alt='tss' /></div>

                    </div>
                    <hr />
                    <div className='programmingLanguages'>
                        <div className='icon'><img src='/Assets/react.png' alt='react' /></div>
                        <div className='icon'><img src='/Assets/express-js.png' alt='react' /></div>
                        <div className='icon'><img src='/Assets/nodejs.png' alt='node' /></div>
                    </div>
                    <hr />
                    <div className='programmingLanguages' >
                        <div className='icon'><img src='/Assets/mdb.png' alt='mdb_icon' /></div>

                    </div>
                    <hr />
                    <div className='programmingLanguages' >

                        <div className='icon'><img src='/Assets/github.png' alt='git_icon' /></div>
                    </div>
                    <hr />
                </div>

                <div className="certificates">
                    <div className='title'>Experience</div>
                    <div className='workshops'>
                        <div className='file' onClick={HEX}>HEx Genius HACKATHON</div><hr />
                        <div className='file' onClick={Dursikshya}>In-House Project Competition</div><hr />
                        <div className='file' onClick={Docker}>3-day Workshop on Docker</div><hr />
                    </div>

                </div>

            </div>

        </>
    )
}
