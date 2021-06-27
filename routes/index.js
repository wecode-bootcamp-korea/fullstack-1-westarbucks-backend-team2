import express from 'express'
import router from 'express.Router()'

import UserRouter from './UserRouter'

router.use('/users', UserRouter)

export {router}