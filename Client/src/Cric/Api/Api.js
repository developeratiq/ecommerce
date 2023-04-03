import React from 'react'

export const Api = async() => {
   const Key = '8ab74e0b0a7e4034a0046c20b8221db0'
   const data =   await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${Key}`);
      const newsLists = await data.json();
      console.log(newsLists.articles
        );

}
