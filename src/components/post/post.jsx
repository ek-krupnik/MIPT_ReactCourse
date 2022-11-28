import React, {useState} from 'react'
import s from './post.module.css'
import {DataChanges} from '../data_change/data_change'

export function Post({title,
                      description,
                      likes,
                      imageUrl,
                      comments,
                      id}
                    ){

    const [counter, setCounter] = useState(likes)
    const [markerLiked, setMarkerLiked] = useState(false)
    const [markerDisliked, setMarkerDisliked] = useState(false)
    const likesColor = markerLiked ? 
                        "rgb(196, 242, 181)" : 
                        (markerDisliked ? "rgb(242, 181, 183)" : "rgb(255, 235, 205)")

    const like = () => {
        if (markerLiked) {
            setCounter(counter => counter - 1);
            setMarkerLiked(false);
            return;
        }
        if (!markerDisliked && !markerLiked) {
            setCounter(counter => counter + 1);
            setMarkerLiked(true);
            return;
        }
    }

    const dislike = () => {
        if (markerDisliked) {
            setCounter(counter => counter + 1);
            setMarkerDisliked(false);
            return;
        }
        if (!markerDisliked && !markerLiked) {
            setCounter(counter => counter - 1);
            setMarkerDisliked(true);   
            return;
        }
    }

    return (
        <>

            <div className={s.allCommon}>
                <div className={s.postData}>
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

                <div className={s.likesConstruction}>

                    <div className={s.dislike} onClick={dislike}>
                        <span className={s.tooltiptext}> Seriously? </span>
                    </div>

                    <div className={s.counter} style={{backgroundColor: likesColor}}>
                        {counter}
                    </div>

                    <div className={s.like} onClick={like}></div>
                </div>
                
                <DataChanges id={id} commentsNum={comments}/>
            </div>
        
        </>
    )

}