import React from 'react'
import PersonalDetails from '../Components/PersonalDetails'
import '../Components/Style.css'
import { Experience } from '../Components/Experience'
import Projects from '../Components/Projects'


export const HomePage = () => {
    return (
        <>
            <PersonalDetails />
            <Experience />
            <Projects />
        </>
    )
}
