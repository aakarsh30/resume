import React from 'react'
import styles from './Appheader.module.css';
import Button from '../Button/Button';
export default function Appheader({children, ...props}) {
    

    return (
        <>
            <div className={styles.container} {...props}>

                <text className={styles.name}>Aakarsh Saxena</text>
                {children}
                
            </div>
        </>
    )
}
