import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_rkvb77c',
        'template_v9xq7io',
        refForm.current,
        'MvcVLImK2oTosHwMm'
      )
      .then(
        () => {
          alert('Message successfully sent! :)')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send message, please try again :(')
          window.location.reload(false)
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>Feel free to contact me with any questions you have</p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="message" name="message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Vivek Saravanan,
          <br />
          University of Wisconsin-Madison
          <br />
          <span>viveksaravanan295@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[43.077779240650905, -89.41777413545067]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker
              position={[43.077779240650905, -89.41777413545067]}
            ></Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="line-scale" />
    </>
  )
}

export default Contact
