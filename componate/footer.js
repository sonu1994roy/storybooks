import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
function Footer() {
  return (
    <div  className='container'>
      <footer className={styles.footer}>
        
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
       
      </footer>
    </div>
  )
}

export default Footer
