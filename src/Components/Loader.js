import React from 'react'
import styles from './Loader.module.css'
const Loader = () => {
    return (
        <div className="grid h-screen place-items-center">
    <div className={`${styles.pokeball} ${styles.bounce}`}></div>
        </div>
    )
}

export default Loader
