import React from 'react'
import PersonalDetails from '../Components/PersonalDetails'
import '../Components/Style.css'
import '../Animation.css'

import { Experience } from '../Components/Experience'
import Projects from '../Components/Projects'
import ContactMe from '../Components/ContactMe'




export const HomePage = () => {
    return (
        <>
            <PersonalDetails />
            <Experience />
            <Projects />
            <ContactMe />
        </>
    )
}
