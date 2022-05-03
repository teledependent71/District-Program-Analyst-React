import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Uncommon Plush Shrew</title>
        <meta property="og:title" content="Uncommon Plush Shrew" />
      </Helmet>
    </div>
  )
}

export default Home
