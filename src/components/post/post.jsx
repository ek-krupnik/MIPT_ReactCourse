import React, {useState} from 'react'
import s from './post.module.scss'
import classNames from 'classnames/bind'
import {DataChanges} from '../data_change/data_change'

export function Post({title,
                      description,
                      likes,
                      imageUrl,
                      comments,
                      id,
                      date}
                    ){

    const cx = classNames.bind(s);
    
    const [line, setLine] = useState('')
    const [titleNew, setTitle] = useState(title)
    const [descriptionNew, setDescriptionNew] = useState(description)

    const [counter, setCounter] = useState(0)
    const [markerLiked, setMarkerLiked] = useState(false)
    const [markerDisliked, setMarkerDisliked] = useState(false)
    
    const [markerChangeTitleVisible, setMarkerChangeTitleVisible] = useState(false)
    const [markerChangeDescriptionVisible, setMarkerChangeDescriptionVisible] = useState(false)
    
    const color = markerLiked ? "green" : (markerDisliked ? "red" : "common")

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

    const showChangeDecription = () => {
        setMarkerChangeDescriptionVisible (marker => !marker)
    }
    const showChangeTitle = () => {
        setMarkerChangeTitleVisible (marker => !marker)
    }
    const changeTitle = () => {
        setTitle(line)
        setMarkerChangeTitleVisible (marker => !marker)
    }
    const changeDescription = () => {
        setDescriptionNew(line)
        setMarkerChangeDescriptionVisible (marker => !marker)
    }
    const onChange = event => {
        const { value } = event.target
        setLine(value)
    }

    return (
        <>

            <div className={s.all_common}>
                <div className={s.post_data}>
                    <div className={s.text_with_changer}>
                        <div className={s.title}>
                            {titleNew}
                        </div>
                        <button className={s.changer} onClick={showChangeTitle}/>
                        <div className={cx("change_line", {change_line_hidden: !markerChangeTitleVisible})}>
                           <input
                                className={s.change_line}
                                value={line}
                                onChange={onChange}
                                placeholder={"Enter new title..."}
                            />
                            <button onClick={changeTitle} className={s.button}>
                                Change
                            </button>
                        </div>
                    </div>
                    <div className={s.date}>
                        {date}
                    </div>

                    <div className={s.text_with_changer}>
                        <div className={s.description}>
                            {descriptionNew}
                        </div>
                        <button className={s.changer} onClick={showChangeDecription}/>
                        <div className={cx("change_line", {change_line_hidden: !markerChangeDescriptionVisible})}>
                           <input
                                className={s.change_line}
                                value={line}
                                onChange={onChange}
                                placeholder={"Enter new description..."}
                            />
                            <button onClick={changeDescription} className={s.button}>
                                Change
                            </button>
                        </div>
                    </div>

                    <div className={s.image}>
                        <img src={imageUrl} alt="Animal"/>
                    </div>
                </div>

                <div className={s.likes_construction}>

                    <div className={s.dislike} onClick={dislike}>
                        <span className={s.tooltiptext}> Seriously? </span>
                    </div>

                    <div className={cx("counter", [`counter_color_${color}`])}>
                        {counter + likes}
                    </div>

                    <div className={s.like} onClick={like}></div>
                </div>
                
                <DataChanges id={id} commentsNum={comments}/>
            </div>
        
        </>
    )

}