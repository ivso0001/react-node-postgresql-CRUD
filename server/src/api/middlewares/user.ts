import { UserInput } from '../../interfaces/user'
import { getConnection, getRepository } from 'typeorm'
import { User } from '../entities/user'

const postUser = async (user: UserInput) => {
    try {
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into(User)
            .values(user)
            .execute()
        return Promise.resolve({ 'success': 1 })
    } catch (e) {
        return Promise.reject(e)
    }
}

const putUser = async (user: UserInput, id: number) => {
    try {
        await getConnection()
            .createQueryBuilder()
            .update(User)
            .set(user)
            .where({ id })
            .execute()
        return Promise.resolve({ 'success': 2 })
    } catch (e) {
        return Promise.reject(e)
    }
}

const deleteUser = async (id: number) => {
    try {
        await getConnection()
            .createQueryBuilder()
            .delete()
            .from(User)
            .where({ id })
            .execute()
        return Promise.resolve({ 'success': 3 })
    } catch (e) {
        return Promise.reject(e)
    }
}

const getUser = async (id: number) => {
    try {
        const user = await getRepository(User).findOne(id)
        return Promise.resolve(user)
    } catch (e) {
        return Promise.reject(e)
    }
}

const getUsers = async (skip: number, take: number) => {
    const users = await getRepository(User).find({
        skip,
        take
    })
    return users
}

export { postUser, putUser, deleteUser, getUser, getUsers }