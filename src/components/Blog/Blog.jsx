
import PropTypes from 'prop-types'; // ES6
import { IoBookmarkOutline } from "react-icons/io5";

const Blog = ({ blog,handleAddBookmark ,handleMarkAsRead}) => {
    const {title ,cover,author,author_img,reading_time,posted_date,hashtags} = blog;
    console.log(blog)
    return (
        <div className='mb-20 space-y-6'>
            <img className='w-full' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'> {author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read <button onClick={() => handleAddBookmark(blog)}><IoBookmarkOutline />
                    </button></span>
                </div>
            </div>
            <h1 className='text-4xl'>{title}</h1>
           <p>
            {
                hashtags.map((hash,idx) => <span className='mr-3' key={idx}><a href="">{hash}</a></span>)
            }
           </p>
           <button onClick={()=>handleMarkAsRead(reading_time)} className='text-purple-700'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func

}

export default Blog;