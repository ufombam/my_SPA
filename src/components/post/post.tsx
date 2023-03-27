import './post.css';
import { ICurrentPost } from '../../UserInterface';

function Post ({
        currentPost,
        route,
        handleTabChange
    }:
    {
        currentPost: ICurrentPost,
        route: string,
        handleTabChange: any,
    }): JSX.Element {
    return (
        <div className="post-container" >
            <div className='post-header'>
                {currentPost.title}
            </div>
            <div className='post-image'>
                <img alt='news-img' src={`${currentPost.image}`} />
            </div>
            <div className='post-description'>
                <p>
                    {currentPost.description}
                </p>
            </div>
            <div className='post-footer' onClick={() => handleTabChange(route)}>
                Back to list
            </div>
        </div>
    );
}

export default Post;