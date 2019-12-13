import React from 'react'
import { NavLink } from 'react-router-dom';

const Post = (props) => {
    return (
            <div className="post-card">
                <h4>{props.title}<br /></h4>
                    
                <NavLink to="/api/posts/:id">
                    <div className="contents">{props.contents}</div>
                </NavLink>
            </div>
    )
}

export default Post;
