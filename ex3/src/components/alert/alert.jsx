import style from './style.module.css'
/* eslint-disable react/prop-types */
export const Alert = ({ message }) => {
  return (
    <div className={style.body}>
      <h1>{message}</h1>
    </div>
  )
}