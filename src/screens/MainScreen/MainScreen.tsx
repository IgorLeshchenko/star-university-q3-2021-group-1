import React from 'react'
import { Box, Button, TextField } from '@material-ui/core'

import Posts from '../../components/Posts'
import Layout from '../../components/Layout'
import { useStyles } from './style'

const MainScreen: React.FC = () => {
  const { button, sort, sortText, topNav, searchAndNewPost, post } = useStyles()

  return (
    <Layout>
      <Box py={10}>
        <div className={topNav}>
          <div className={sort}>
            <span className={sortText}>Sort by:</span>
            <Button variant='outlined' className={button}>
              New
            </Button>
            <Button variant='outlined' className={button}>
              TOP
            </Button>
          </div>
          <div className={searchAndNewPost}>
            <TextField id='standard-basic' label='Search' variant='standard' />
            <Button variant='contained' className={button}>
              Add new post
            </Button>
          </div>
        </div>
        <div className={post}>
          <Posts />
        </div>
      </Box>
    </Layout>
  )
}

export default MainScreen
