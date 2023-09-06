import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <div>
                <img src="https://avatars.githubusercontent.com/u/96742583" alt="Founder" />

                <h2>Priya Gaur</h2>
                <p>"Everything is possible if you are crazy, nothing is possible if you are lazy."</p>
            </div>
            <aside>
                <h2>Social Media</h2>

                <article>
                    <a href="http://www.linkedin.com/in/priya-77777-gaur" target={"blank"}> <AiFillLinkedin />  Linkedin
                    </a>
                    <a href="http://www.instagram.com/priyagaur7_" target={"blank"}> <AiFillInstagram />  Instagram
                    </a>
                    <a href="https://github.com/PriyaaGaur7" target={"blank"}> <AiFillGithub/>  Github
                    </a>
                </article>
            </aside>
            <a href="#home">
                <AiOutlineArrowUp />
            </a>
        </footer>
    )
}

export default Footer