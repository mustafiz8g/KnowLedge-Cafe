
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3">
            <div>
                <h3 className="text-4xl">Reading Time : {readingTime} </h3>
            </div>
            <h2 className="text-3xl">Bookmarks Blogs : {bookmarks.length}</h2>

        {
            bookmarks.map(bookmark => <Bookmark
                 key={bookmark.id}
            bookmark={bookmark}></Bookmark>)
        }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;