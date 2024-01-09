import React from 'react'

const PersonalDetails = () => {
    const Resume = () => {
        const file = '/Assets/Khagendra_Singh Jora_Resume_18-10-2023-20-14-50.pdf'
        window.open(file, 'blank')
    }

    return (
        <>
            <div className='title'>Personal Details</div>
            <div className="container">
                <div className="Left">
                    <img src="Assets/Khagendra Singh .jpg" alt="khagendra" />
                </div>
                <div className="Right">
                    <div>
                        <div className="info">
                            <p>
                                Name:</p>
                            <span>Khagendra Singh Jora</span>
                        </div>
                        <hr />
                        <div className="info">
                            <p>
                                Education:</p>
                            <span>Bachlor in Computer Engineering</span>
                        </div>
                        <hr />
                        <div className="info">
                            <p>
                                Address:</p>
                            <span>Kathmandu, Nepal</span>
                        </div>
                        <hr />
                        <div className="info">
                            <p>Date of Birth:</p>
                            <span>08/10/2000</span>
                        </div>
                        <hr />
                    </div>
                    <button id='btn' onClick={Resume}>My Resume</button>
                </div>
            </div>
        </>
    )
}

export default PersonalDetails