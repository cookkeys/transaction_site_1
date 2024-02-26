import React from 'react'
import styles from "./styles/navbar.module.css"

export default function Navbar() {
  return (
    <div className={styles.outer_div}>
        <div className={styles.navBar}>
            <p>About</p>
            <p>Pricing</p>
            <p>Product</p>
            <p>Contact</p>
        </div>
    </div>
  )
}
