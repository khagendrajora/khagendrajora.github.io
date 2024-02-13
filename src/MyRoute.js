import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layouts } from './Components/Layouts'
import { HomePage } from './Pages/HomePage'



const MyRoute = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='' element={<Layouts />}>
                        <Route index element={<HomePage />} />

                    </Route>
                </Routes>
            </Router>

        </>
    )
}

export default MyRoute