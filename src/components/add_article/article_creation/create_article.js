import React, {useState} from 'react'
import s from "./create_article.module.scss"
import { ArticleForm } from '../articlle_form/add_article'
import { Post } from '../../post/post'

export function CreateArticle () {
    
    const [lineName, setLineName] = useState('')
    const [lineText, setLineText] = useState('')

    const [infoName, setInfoName] = useState([])
    const [infoText, setInfoText] = useState([])
    const [ind, setInd] = useState([])

    const phrases = ["Enter article title", "Enter article description"]
    const [textNumber, setNumber] = useState(0)

    const onChangeName = event => {
        const { value } = event.target
        setLineName(value)
    }
    const onChangeText = event => {
        const { value } = event.target
        setLineText(value)
    }

    const createPost = () => {
        setInfoName([...infoName, lineName])
        setInfoText([...infoText, lineText])
        setInd([...ind, textNumber])
        setNumber((counter) => {return counter + 1})
    }

    return(
        <>
            <div className={s.input}>

                <ArticleForm data={lineName} onChange={onChangeName} placeholder={"Enter article title"}/>
                <ArticleForm data={lineText} onChange={onChangeText} placeholder={"Enter article description"}/>

                <button onClick={createPost} className={s.button}>
                    Create post
                </button>
            </div>

                {ind.map((index) => 
                                <Post title={infoName[index]}
                                description={infoText[index]}
                                likes={0}
                                imageUrl={"https://basetop.ru/wp-content/uploads/2018/10/fenek-696x392.jpg"}
                                comments={0}
                                id={-1}/>)}
                
        </>
        )
}