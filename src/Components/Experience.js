import { hover } from '@testing-library/user-event/dist/hover'
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
                        <span>C</span>
                        <span>C++</span>
                    </div>
                    <hr />
                    <div className='programmingLanguages'>
                        <span>MERN</span>
                    </div>
                    <hr />
                    <div className='programmingLanguages' >
                        <span>GIT</span>
                    </div>
                    <hr />
                </div>

                <div className="certificates">
                    <div className='title'>Certificates</div>
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
