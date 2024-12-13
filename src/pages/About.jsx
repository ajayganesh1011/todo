import React from 'react'
import Parent from '../components/Parent'

function About() {
    return (
        <>
            <div>
                <h1>About</h1>
                <p>This is a simple Todo application built with React and Bootstrap.</p>

                <h1>Features</h1>
                <ul>
                    <li>Simple and responsive design</li>
                    <li>Easy to use</li>
                    <li>Supports multiple tasks</li>
                </ul>
            </div>
            <div className="mt-5 mb-5 text-center">
                <Parent />
            </div>
        </>
    )
}

export default About