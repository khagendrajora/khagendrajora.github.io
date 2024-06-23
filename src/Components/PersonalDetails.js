import React from 'react'

const PersonalDetails = () => {
    const Resume = () => {
        const file = '/Assets/Resume.pdf'
        window.open(file, 'blank')
    }

    return (
        <>
            <div id='personalDetail'></div>
            <div className='title'>Personal Detail</div>
            <div className="container">
                <div className="Left">
                    <img src="Assets/kj.JPG" alt="khagendra" style={{ width: "20rem" }} />
                </div>
                <div className="Right">
                    I believe myself as a self-motivated and tech enthusiastic. Always ready to face challenges.
                    Working as a developer.
                    <button id='btn' onClick={Resume}>My Resume</button>
                </div>
            </div>
        </>
    )
}

export default PersonalDetails