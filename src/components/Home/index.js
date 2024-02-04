import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['i', 's', 'h', 'i',]
  const jobArray = [
    'A',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="shit"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>CS Undergrad / Frontend Dev / Amateur Photographer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <br />
          <a href="https://www.github.com/rishicds" className="flat-button" target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
          <br />
          <a href="https://www.linkedin.com/in/rishi-paul04/" className="flat-button" target="_blank" rel="noopener noreferrer">
            LINKEDIN
          </a>
          <br />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
