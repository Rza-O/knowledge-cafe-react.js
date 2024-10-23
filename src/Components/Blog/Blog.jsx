import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookMark, handleMarkAsRead }) => {
    const { title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;
    return (
        <div className='mb-20 space-y-5'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the ${title}`} />
            <div className='flex justify-between items-center mb-4'>
                <div className='flex'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='mr-1'>{reading_time} min read</span>
                    <button
                        onClick={() => handleAddToBookMark(blog)}
                        className='text-red-600 text-2xl'>
                        <FaBookmark />
                    </button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button
                onClick={()=>handleMarkAsRead(reading_time)}
                className='text-purple-800 underline'>
            Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;