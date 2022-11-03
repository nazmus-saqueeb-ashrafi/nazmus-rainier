import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  getUserProfile,
 
} from '../controllers/userController.js'


router.post('/login', authUser)
router.post('/register', registerUser)
router.get('/profile/:id', getUserProfile)

export default router