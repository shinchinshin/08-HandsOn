import React from 'react'
import classes from './Podhead.module.css'

const BlogHead = () => {
  return (
    <div>
      <div className={classes.bloghead}>
        <span>
          <svg width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="16" height="17" fill="none" stroke="currentColor" strokeWidth="2"></rect>
            <rect x="4" y="4" width="10" height="2" fill="currentColor" stroke="none"></rect>
            <rect x="4" y="8" width="8" height="2" fill="currentColor" stroke="none"></rect>
            <rect x="4" y="12" width="5" height="2" fill="currentColor" stroke="none"></rect>
          </svg>
          <h3>Blog</h3>
        </span>
        <a href="/">View All</a>
      </div>
    </div>
  )
}

export default BlogHead
