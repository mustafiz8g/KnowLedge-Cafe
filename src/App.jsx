
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime ,setReadingTime] =useState(0)
  const handleAddBookmark = blog => {
     const newBookmarks = [...bookmarks, blog] ;
     setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = time => {
    console.log('making as rad',time);
    setReadingTime(readingTime + time)
  }

  return (
    <>

    <Header></Header>
    <div className='container mx-auto md:flex'>
    <Blogs handleAddBookmark={handleAddBookmark}
    handleMarkAsRead ={handleMarkAsRead}
    ></Blogs>
    <Bookmarks bookmarks = {bookmarks} readingTime = {readingTime}></Bookmarks>
    </div>




    </>
  )
}

export default App
