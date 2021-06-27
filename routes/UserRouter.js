import express from 'express'
import router from 'express.Router()'

import {UserRouter} from '../controllers'

router.post('/signup', Usercontroller.signup)

export {router}