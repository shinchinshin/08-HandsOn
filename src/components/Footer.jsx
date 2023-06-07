import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <div className={classes.main}>
      <footer className={classes.footermain}>
        <br />
        <h3>About Us</h3>
        <h3>Blog</h3>
        <h3>Career</h3>
        <h3>Contact Us</h3>
      </footer>
    </div>
  )
}

export default Footer
