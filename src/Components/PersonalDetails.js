import React from 'react'
import { Link } from 'react-router-dom'

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const PersonalDetails = () => {
    const Resume = () => {
        const file = '/Assets/Resume.pdf'
        window.open(file, 'blank')
    }

    return (
        <>
            <div id='personalDetail'></div>
            <Tooltip id="my-tooltip" />
            <div className='title'>Personal Detail</div>
            <div className="container">
                <div className="Left">
                    <img src="Assets/kj.JPG" alt="khagendra" style={{ width: "20rem" }} />
                </div>
                <div className="Right ">
                    <p>I am a self-motivated and tech-enthusiastic professional, always ready to face challenges with a proactive mindset. With a strong foundation in computer engineering and hands-on experience as a developer, I grow in dynamic environments that demand continuous learning and innovation.</p>

                    <h3>Education</h3>

                    <div>Bachelor of Computer Engineering- <Link to='https://acem.edu.np/'>Advanced College of Engineering and Management</Link></div>
                    <div><b>Leadership Experience</b>- Former President of PACE (Project Association of Computer and Electronics) </div>
                    <button id='btn' onClick={Resume}
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content='Click To View'>My Resume</button>
                </div>
            </div>
        </>
    )
}

export default PersonalDetails