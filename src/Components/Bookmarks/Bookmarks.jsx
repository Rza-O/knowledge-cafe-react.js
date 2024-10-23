import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className='md:w-1/3 bg-gray-300 ml-5 mt-4 pt-4'>
            <div className='bg-purple-500 text-white p-4 m-5 rounded-xl text-center'>
                <h3 className='text-4xl'>Reading Time: {readingTime}</h3>
            </div>
            <h2 className='text-3xl text-center '>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
};

export default Bookmarks;