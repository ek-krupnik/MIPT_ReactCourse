import React, {useState} from 'react'
import s from './post.module.css'
import {DataChanges} from '../data_change/data_change'

export function Post({title,
                      description,
                      likes,
                      imageUrl,
                      comments,
                      id}
                    ) {

    const [counter, setCounter] = useState(likes)
    const [markerLiked, setMarkerLiked] = useState(false)
    const [markerDisliked, setMarkerDisliked] = useState(false)
    const likesColor = markerLiked ? 
                        "rgb(196, 242, 181)" : 
                        (markerDisliked ? "rgb(242, 181, 183)" : "rgb(255, 235, 205)")

    const like = () => {
        if (markerLiked) {
            setCounter((counter) => {return counter - 1})
            setMarkerLiked((marker) => {return false})
        }
        if (!markerDisliked && !markerLiked) {
            setCounter((counter) => {return counter + 1})
            setMarkerLiked((marker) => {return true})
        }
    }

    const dislike = () => {
        if (markerDisliked) {
            setCounter((counter) => {return counter + 1})
            setMarkerDisliked((marker) => {return false})
        }
        if (!markerDisliked && !markerLiked) {
            setCounter((counter) => {return counter - 1})
            setMarkerDisliked((marker) => {return true})
        }
    }

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
                    <img src={imageUrl} alt="Animal"/>
                </div>
            </div>

            <div className={s.likes_construction}>

                <div className={s.dislike} onClick={dislike}>
                    <span className={s.tooltiptext}> Seriously? </span>
                </div>

                <div className={s.counter} style={{backgroundColor: likesColor}}>
                    {counter}
                </div>

                <div className={s.like} onClick={like}></div>
            </div>
            
            <DataChanges id={id} commentsNum={comments}/>
        
        </>
    )

}