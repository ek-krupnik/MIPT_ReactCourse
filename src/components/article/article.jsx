import React, {useState, useEffect} from 'react'
import s from './article.module.scss'

import { Post } from '../post/post'
import { NotReadyData } from '../not_ready_data/not_ready_data'
import { getArticles } from '../../assets/pathces/get_article'

export function Articles() {

    const [data, setData] = useState(null)
    const [sortInd, setSortInd] = useState(0)

    useEffect(() => {
        getArticles().then(fetchedData => setData(fetchedData))
    }, [])

    // async = (keyMap) => {
    //     setData(keyMap.map(item => item[1]))
    // }

    const sort = () => {
        setSortInd(counter => (counter + 1) % 3)

        if (sortInd === 0) {

            (async () => {
                const keyMap = data.map(
                    (post) => {return [post.date, post]}
                )

                keyMap.sort(
                    (first, second) => {return new Date(first[0]) - new Date(second[0])}
                )

                await setData(keyMap.map(item => item[1]))
            })()
            console.log(1, data)
            return;
        }

        if (sortInd === 1) {

            (async () => {
                const keyMap = data.map(
                    (post) => {return [post.currentLikes, post]}
                )

                keyMap.sort(
                    (first, second) => {return first[0] - second[0]}
                )

                setData(keyMap.map(item => item[1]))
            })()
            console.log(2, data)
            return;
        }

        if (sortInd === 2) {

            (async () => {
                const keyMap = data.map(
                    (post) => {return [post.articleId, post]}
                )

                keyMap.sort(
                    (first, second) => {return first[0] - second[0]}
                )

                setData(keyMap.map(item => item[1]))
            })()
            console.log(0, data)
            return;
        }
    }

    return  <div>
                <button className={s.sort_button} onClick={sort}/>
                <div>{sortInd === 0 ? "by ID" : (sortInd === 1 ? "by date" : "by likes")}</div>
                <>
                {
                data
                    ? data.map(item => <Post title={item.title}
                                                description={item.text}
                                                likes={item.currentLikes}
                                                imageUrl={item.image}
                                                comments={item.commentsCount}
                                                id={item.articleId}
                                                date={item.date}/>)
                    : <NotReadyData/>
                }
                </>
            </div>

}
