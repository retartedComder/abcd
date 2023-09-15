import express from 'express'
import { AskQuestion } from '../controllers/Questions.js'
import { getAllquestions } from '../controllers/Questions.js'
import { deleteQuestion } from '../controllers/Questions.js'
import { voteQuestion } from '../controllers/Questions.js'
import auth from '../middlewares/auth.js'

const router = express.Router()

router.post('/Ask', auth, AskQuestion)
router.get('/get', getAllquestions)
router.delete('/delete/:id',auth, deleteQuestion)
router.patch('/vote/:id',auth, voteQuestion)

export default router 