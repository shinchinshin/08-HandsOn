import React from 'react'
import classes from './Blog.module.css'

const Blog = (props) => {
  const { blog } = props

  return (
    <div className={classes.blogdiv}>
      <div className={classes.article}>
        <div className={classes.arHead}>
          <p className={classes.auth}>{blog.author}</p>
          <p>{blog.date}</p>
          <p>{blog.readingTime}</p>
        </div>
        <h3>{blog.header}</h3>
        <p>{blog.description}</p>
        <div className={classes.tags}>
          {blog.tags.map((tag) => {
            return <p key={`${tag}-${blog.header}`}> #{tag}</p>
          })}
        </div>
      </div>
    </div>
  )
}

export default Blog
