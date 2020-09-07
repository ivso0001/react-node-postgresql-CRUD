import * as express from 'express'
import { postUser, putUser, deleteUser, getUser, getUsers } from '../middlewares/user'
import { User } from '../../interfaces/user'

const USER = '/user'
const USERS = '/users'

const router = express.Router()

router.post(USER, async (req, res, next) => {
    try {
        const user: User = req.body
        const result = await postUser(user)
        res.json(result)
    } catch (e) {
        res.status(500).json(e)
    }
})

router.put(USER + '/:id', async (req, res, next) => {
    try {
        const user: User = req.body
        const id: number = Number(req.params.id)
        const result = await putUser(user, id)
        res.json(result)
    } catch (e) {
        res.status(500).json(e)
    }
})

router.delete(USER + '/:id', async (req, res, next) => {
    try {
        const id: number = Number(req.params.id)
        const result = await deleteUser(id)
        res.json(result)
    } catch (e) {
        res.status(500).json(e)
    }
})

router.get(USER + '/:id', async (req, res, next) => {
    try {
        const id: number = Number(req.params.id)
        const user = await getUser(id)
        res.json(user)
    } catch (e) {
        res.status(500).json(e)
    }
})

router.get(USERS, async (req, res, next) => {
    try {
        const users = await getUsers()
        res.json(users)
    } catch (e) {
        res.status(500).json(e)
    }
})

export default router