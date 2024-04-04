import { Tilt } from 'react-tilt'
import style from './style.module.css'
import Draggable from 'react-draggable'
/* eslint-disable react/prop-types */
export const Api = ({ name, status, species, type, gender, image }) => {
  const defaultOptions = {
    reverse: true,  // reverse the tilt direction
    max: 20,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  return (
    <Draggable>
      <div className={style.body}>
        <h1>{name}</h1>
        <h2>{status}</h2>
        <p>{species}</p>
        <p>{type}</p>
        <p>{gender}</p>
        <Tilt options={defaultOptions} style={{ height: "auto", width: "auto" }}>
          <img src={image} alt={name} width={150} height={"auto"} />
        </Tilt>
      </div>
    </Draggable>
  )
}