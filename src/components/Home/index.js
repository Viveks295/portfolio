import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState } from 'react'
import Loader from 'react-loaders'
import logo from '../../assets/images/laptop.gif'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 4000)
  // }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _11`}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _15`}>I</span>
            <span className={`${letterClass} _16`}>'m </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={' Vivek  Saravanan'.split('')}
              idx={17}
            />
            {/* <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Saravanan'.split('')}
              idx={24}
            /> */}
          </h1>
          <h2>computer science student | web development | machine learning</h2>
          <Link to="/contact" className="flat-button">
            contact me
          </Link>
          <Link to="/portfolio" className="flat-button">
            portfolio
          </Link>
        </div>
        <div className="laptop">
          <img className="lt-gif" src={logo} alt="coding" />
        </div>
      </div>
      <Loader type="line-scale" />
    </>
  )
}

export default Home
