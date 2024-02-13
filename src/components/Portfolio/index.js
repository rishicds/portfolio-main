import { useEffect, useState } from 'react'
import {
  faPython,
  faCss3,
  faNode,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const Portfolio = () => {
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
              strArray={['M', 'y', '', 'P', 'r', 'o', 'j', 'e','c','t','s']}
              idx={15}
            />
          </h1>
          
          <p align="LEFT">
          I've embarked on numerous projects throughout the years, but these are the ones I hold closest to my heart. Many of them are open-source, so if you come across something that piques your interest, feel free to explore the codebase and contribute your ideas for further enhancements. Your collaboration is highly valued!
          </p>
          <p align='CENTER'>
          Here are some of the projects I've worked on:
          <ul>
            <li><a href="https://pawss.vercel.app/"className='link' target="_blank" rel="noopener noreferrer">Paws</a></li>
            <li><a href="https://debloga.vercel.app/"className='link' target="_blank" rel="noopener noreferrer">Deblog</a></li>
            <li><a href="https://safar-beta.vercel.app/" className='link' target="_blank" rel="noopener noreferrer">Safar</a></li>
            <li><a href="https://image-editor-beryl.vercel.app/"className='link' target="_blank" rel="noopener noreferrer">Pixlr</a></li>
          </ul>
        </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNode} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
