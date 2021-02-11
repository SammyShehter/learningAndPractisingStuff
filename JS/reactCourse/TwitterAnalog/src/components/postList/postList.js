import React from 'react';
import PostListItem from '../postListItem';

const PostList = ({posts, onDelete, onLike, onImportant}) => {

    const elements = posts.map((item) => {
        const {id, label, important, liked} = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem 
                    label={label}
                    important={important}
                    liked = {liked}
                    deletePost={()=>{onDelete(id)}}
                    likePost={() => {onLike(id)}}
                    importantPost={() => {onImportant(id)}}
                />
                
            </li>
            
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
export default PostList;