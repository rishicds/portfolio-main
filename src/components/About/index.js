import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          Software Engineering Student based in India, specializing in technical education through hands-on learning and building applications.
          </p>
          <p>
          Currently pursuing a Bachelor of Technology in Computer Science and Engineering from RCC Institute of Information Technology, Kolkata.
          Have worked on various projects and have a keen interest in Web Development, Artificial Intelligence, and Machine Learning and Data Science.
          </p>
          <p>
          Also like to contribute to open source projects and have a passion for learning new technologies.
          </p>
          <p>
          Outside of coding, I enjoy playing video games, reading books, and photography.
          </p>
        </div>

        
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
