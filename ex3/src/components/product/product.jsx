import style from './style.module.css'
import { Circle } from './circle/Circle'
/* eslint-disable react/prop-types */
export const Product = ({ name, desc, value, image, status }) => {
  return (
    <div className={style.body}>
      <div className={style.head}>
        <h1>{name}</h1>
        <Circle status={status} />
      </div>
      <h2>{desc}</h2>
      <p>{value} R$</p>
      <img src={image} alt={name} width={150} height={"auto"} />
    </div>
  )
}