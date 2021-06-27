import express from 'express'
import router from 'express.Router()'

import {UserRouter} from '../controller'

router.post('/signup', Usercontroller.signup)

export {router}