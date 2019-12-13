import React, { useEffect } from 'react'
import { getAll } from '../actions/postActions';
import { connect } from 'react-redux';
import Post from './Post';

const Posts = (props) => {
    useEffect(() => {
        props.getAll(props.posts)
      }, [])

    return (
        <div>
        {props.posts &&
            props.posts.map(post =>{
                return(
                    <Post
                        key={post.id}
                        title={post.title} 
                        contents={post.contents}
                    />
                )
            })
        }
        </div>
    )
}

const mapStateToProps = ({ postReducer }) => ({
    posts: postReducer.posts
  })

export default connect(mapStateToProps, { getAll })(Posts);