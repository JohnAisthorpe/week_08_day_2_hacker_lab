const StoryItem = ({storyTitle}) => {
      console.log(storyTitle)

    return (
        <li>
        
        {/* <a href={storyTitle.url ? storyTitle.url : `https://news.ycombinator.com/item?id=${storyTitle.id}`}>{storyTitle.title}</a> */}

        <div>{storyTitle.title}</div>



        
        </li>
    )
}

export default StoryItem