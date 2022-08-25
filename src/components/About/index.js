import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDocker,
  faGitAlt,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import PyLogo from '../../assets/images/py-svg.svg'
import TfLogo from '../../assets/images/tf-svg.svg'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
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
            Hi! My name is Vivek Saravanan. I am currently a freshman studying
            computer science and mathematics at UW-Madison.
          </p>
          <p>
            I am naturally curious and I love to find creative solutions to
            complex problems. In my free time I like to solve algorithmic
            problems and play chess.
          </p>
          <p>
            I am experienced with working in Python, Java, and JavaScript. I
            have developed full-stack wep applications using technologies such
            as React, PostgreSQL, GraphQL, Flask, Node.js, and Spring Boot. I
            also enjoy learning about AI and machine learning. You can find some
            of my projects <a href="/portfolio">here</a>.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faDocker} color="#0DB7ED" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face3">
              <img
                src={PyLogo}
                style={{ height: 90, width: 90 }}
                alt="python logo"
              />
            </div>
            <div className="face4">
              <img
                src={TfLogo}
                style={{ height: 90, width: 90 }}
                alt="tensorflow logo"
              />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>

            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="line-scale" />
    </>
  )
}

export default About
