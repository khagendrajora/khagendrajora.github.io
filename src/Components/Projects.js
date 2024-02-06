import React from 'react'

const Projects = () => {
    return (
        <>
            <div className='projects' id='project'>
                <div className='title'>Projects</div>
                <p>Most of my projects are web based.</p>
                <br />
                <div className='works'>
                    <div className='app'>
                        <div className='innerapp'>
                            <div className='icon'><img src='/Assets/react.png' alt='react' /></div>
                            <div className='projectTitle'>Ecommerce Application using React</div>
                        </div>
                        <p>This is a full stack  ecommerce application made on react and nodejs and used mongodb for database.</p>
                        <div className='button-container'><button className='btn'><a href='https://khagendraecommerceapp.netlify.app/'>Live Demo</a></button></div>
                    </div>
                    <div className='app'>
                        <div className='innerapp'>
                            <div className='icon'><img src='/Assets/python.png' alt='python' /></div>
                            <div className='projectTitle'>Online Bidding Platform based on Recommended System Using Django</div>
                        </div>
                        <div><p>An online application in which bidder can bit over the products. And also able to watch livw bidding. The system is also inbuild with the Recommended system , which Recommends the customers based on his past search and behaviour. </p></div>
                        <div className='button-container'><button className='btn'><a href='https://github.com/imperiumbid/web'>Git Repo</a></button></div>
                    </div>
                    <div className='app'>
                        <div className='innerapp'>
                            <div className='icon'><img src='/Assets/python.png' alt='python' /></div>
                            <div className='projectTitle'>Community connect application using ML</div>
                        </div>
                        <p>An online platform where community people can intract on the issues of the society and provide suggestions on it. This application contains the ML part which detects the bad words and probhabits the user to use it. </p>
                        <div className='button-container'><button className='btn'><a href='https://github.com/khagendrajora/Tech_Army'>Git Repo</a></button></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects