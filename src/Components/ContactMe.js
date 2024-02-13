import { faFacebook, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


const ContactMe = () => {
    return (
        <>
            <div className='contactme' id='contactme'>
                <div className='left'>
                    <div className='title'>
                        Contact Me
                    </div>
                    <form>
                        <input type='text' name='name' id='name' className='form-control' placeholder=' Name' />
                        <input type='email' name='email' id='email' className='form-control' placeholder='&#xf0e0; Email' style={{ fontFamily: 'FontAwesome' }} />
                        <input type='number' name='phone' id='phone' className='form-control' placeholder='&#xf007; Phone' style={{ fontFamily: 'FontAwesome' }} />
                        <textarea name='message' rows='5' cols='2' id='message' className='form-control' placeholder='&#xf007; Message' style={{ fontFamily: 'FontAwesome', borderRadius: '1rem', resize: 'none', padding: '1rem', marginBottom: '2rem' }} />
                        <button type='submit'>Send Message</button>
                    </form>

                </div>
                <div className='right'>
                    <div className='social-links'>
                        <Link to='https://www.facebook.com/khagendra.jora'>
                            <FontAwesomeIcon icon={faFacebook} className='links' style={{ color: 'blue' }} /></Link>
                        <Link to=''>
                            <FontAwesomeIcon icon={faInstagram} className='links' style={{ color: 'red' }} /></Link>
                    </div>
                    <div className='social-links'>
                        <Link to='https://www.linkedin.com/in/khagendra-singh-jora-7a8808182/'>
                            <FontAwesomeIcon icon={faLinkedinIn} className='links' style={{ color: 'blue' }} /></Link>
                        <Link to='https://github.com/khagendrajora'>
                            <FontAwesomeIcon icon={faGithub} className='links' style={{ color: 'black' }} /></Link>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ContactMe