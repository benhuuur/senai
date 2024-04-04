import style from './style.module.css'

/* eslint-disable react/prop-types */
export const Circle = ({status}) => {
    if (status == 'true')
        return <div className={style.true}></div>
    else
        return <div className={style.false}></div>
}