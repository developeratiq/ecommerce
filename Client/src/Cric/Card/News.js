import React from 'react'
import Nav from '../Nav/Nav'
import Card from '../Card/Card'
import { useEffect, useState } from 'react'

function News() {
    const [newsData, setnewsData] = useState([]);


    const NewsApi = async () => {
        const Key = '8ab74e0b0a7e4034a0046c20b8221db0'
        const data = await fetch(`https://newsdata.io/api/1/news?apikey=pub_13773c0cb2f66f78083ed2fafded267f4d8bc&q=pegasus&language=en`);
        const newsLists = await data.json();
        setnewsData(newsLists.results)

    }

    console.log(newsData.results)
    useEffect(() => {

        NewsApi();

    }, [])



    return (
        <div>
            <Nav></Nav>
            <hr />
            <h1 style={{ textAlign: "center", marginTop: "10px", color: "Red" }}> News</h1>
            {

                newsData.map((n) => (
                    <>
                        <div class="card">
                            <div class="card-header">
                                Published at :{n.pubDate}
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">{n.description}</h5>
                                <p class="card-text">{n.content}</p>
                                <a href={n.link} target="_blank" class="btn btn-primary">Read Article</a>
                            </div>
                        </div>

                    </>

                ))
            }




        </div>
    )
}

export default News