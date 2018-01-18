import React from 'react'
import styles from './header.css'

function Header() {
  return (
    <header className={styles.root}>
      <h1 className={styles.logo}>React-redux Workflow</h1>
    </header>
  )
}

export default Header
