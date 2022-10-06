import React from 'react'
import s from './test.module.css'
import {useState} from "react"
import {useEffect} from "react"

export function Test(props) {

    const title = `${props.value.title}`
    const description = `${props.value.text}`
    const likes = props.value.currentLikes
    const image_url = `${props.value.image}`

    const [counter, setCounter] = useState(likes)
    const [markerLiked, setMarkerLiked] = useState(false)
    const [markerDisliked, setMarkerDisliked] = useState(false)

    const dislike_button = markerDisliked ? '../images/dislike_den.png' : '../images/dislike_den.png'
    const like_button = markerLiked ? "red" : "green"

    const like = () => {
        if (markerLiked) {
            setCounter (counter - 1)
            setMarkerLiked (false)
        }
        if (!markerDisliked & !markerLiked) {
            setCounter (counter + 1)
            setMarkerLiked (true)
        }
    }

    const dislike = () => {
        var chimg = document.getElementsByClassName(s.dislike);
        if (markerDisliked) {
            setCounter (counter + 1)
            setMarkerDisliked (false)
            chimg.style.backgroundImage = "url('../images/dislike_den.png')";
        }
        if (!markerDisliked & !markerLiked) {
            setCounter (counter - 1)
            setMarkerDisliked (true)
            chimg.style.backgroundImage = "url('../images/dislike_set.png')";
            console.log(chimg.style.backgroundImage)
        }
    }

    // useEffect(() => {
    //     setCounter(JSON.parse(window.localStorage.getItem('counter')));
    // }, []);
    
    // useEffect(() => {
    //     window.localStorage.setItem('counter', counter);
    // }, [counter]);

    return (
        <>
            <div className={s.post_data}>
                <div className={s.title}>
                    {title}
                </div>

                <div className={s.description}>
                    {description}
                </div>

                <div className={s.image}>
                    <img
                        src={image_url}
                        alt="Animal"
                    />
                    
                </div>
            </div>
            <div className={s.likes_construction}>

                <div className={s.dislike} 
                     onClick={dislike} 
                    //  style={{backgroundImage: dislike_button}} 
                     >
                </div>

                <div className={s.counter}>
                    {counter}
                </div>

                <div className={s.like} 
                     onClick={like}
                     style={{backgroundColor: like_button}}>
                </div>
            </div>
        </>
    )

}