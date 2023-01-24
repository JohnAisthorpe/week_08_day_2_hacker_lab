import React, {useState, useEffect} from 'react'
import StoryList from '../components/StoryList'


const MainContainer = () => {
    const [storyTitles, setStoryTitles] = useState([])
    const [searchText, setSearchText] = useState('');


    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(res => res.json())
            .then(data => data.slice(0,50))
            .then(data => fasdjk(data))
        
    }, [])

    const fasdjk = (ids) => {

    const storyPromises = ids.map(storyId => {
        return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
            .then(res => res.json())

    })

    Promise.all(storyPromises)
        .then(storyTitles => setStoryTitles(storyTitles))
    }


    return (
        <div> 
         <input
  type="text"
  value={searchText}
  onChange={e => setSearchText(e.target.value)}
/>
       <StoryList storyTitles={storyTitles} searchText={searchText} />

      
</div>

    )
}

export default MainContainer