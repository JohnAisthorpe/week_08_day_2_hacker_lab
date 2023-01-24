import StoryItem from "./StoryItem"

const StoryList = ({searchText, storyTitles}) => {

    // const storyItems = storyTitles.map((storyTitle, index) => {
    //     return <StoryItem key={index} storyTitle={storyTitle}/>
        
    // })

    const filteredItems = storyTitles.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
      


    return (
        <>
        <h1>Hacker News Links</h1>
        {/* {storyItems} */}
        {filteredItems.map(item => (
        <StoryItem key={item.id} item={item} storyTitle={item} />
        ))}

        
        </>
    )
}

export default StoryList