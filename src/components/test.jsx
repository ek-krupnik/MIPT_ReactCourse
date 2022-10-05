import React from 'react'
import s from './test.module.css'
import {useState} from "react"

export function Test(props) {

    const title = `${props.value.title}`
    const description = `${props.value.text}`
    const likes = props.value.currentLikes

    const [counter, setCounter] = useState(likes)

    const inc = () => {
        setCounter (counter + 1)
    }

    const dec = () => {
        setCounter (counter - 1)
    }

    return (
        <>
            <div className={s.title}>
                {title}
            </div>

            <div className={s.description}>
                {description}
            </div>

            <div className={s.likes_construction}>
                <div className={s.dislike} onClick={dec}>
                    -
                </div>

                <div className={s.counter}>
                    {counter}
                </div>

                <div className={s.like} onClick={inc}>
                    +
                </div>
            </div>
        </>
    )

}