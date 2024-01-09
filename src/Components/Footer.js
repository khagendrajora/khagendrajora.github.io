import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


export const Footer = () => {
    return (
        <>
            <footer>
                <div className='contact'>Find Me On:</div>

                <div className='icons'>
                    <Link to='https://www.facebook.com/khagendra.jora'>
                        <FontAwesomeIcon icon={faFacebook} style={{ color: 'black' }} /></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to=''>
                        <FontAwesomeIcon icon={faInstagram} style={{ color: 'black' }} /></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to='https://www.linkedin.com/in/khagendra-singh-jora-7a8808182/'>
                        <FontAwesomeIcon icon={faLinkedinIn} style={{ color: 'black' }} /></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to='https://github.com/khagendrajora'>
                        <FontAwesomeIcon icon={faGithub} style={{ color: 'black' }} /></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            </footer >


        </>
    )
}
