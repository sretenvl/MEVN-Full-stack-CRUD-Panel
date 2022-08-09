import * as getUserService from '../services/user/get'
import * as putUserService from '../services/user/put'
import * as postUserService from '../services/user/post'
import * as deleteUserService from '../services/user/delete'

export const fetchUsers = async (req, res) => {
    try{
        res.status(200).json((await getUserService.all()))
    } catch (e){
        res.status(500).json(e)
    }
}

export const fetchUser = async (req, res) => {
    try{
        res.status(200).json((await getUserService.byId(req.params.id)))
    } catch (e){
        res.status(500).json(e)
    }
}

export const createUser = async (req, res) => {
    try{
        const {
            name,
            email,
            password,
            phone,
            address
        } = req.body
        res.status(201).json((await postUserService.create({
            name,
            email,
            password,
            phone,
            address
        })))
    } catch (e){
        res.status(500).json(e)
    }
}

export const updateUser = async (req, res) => {
    try{
        const {
            name,
            email,
            password,
            phone,
            address
        } = req.body
        res.status(200).json((await putUserService.byId(req.params.id,{
            name,
            email,
            password,
            phone,
            address
        })))
    } catch (e){
        res.status(500).json(e)
    }
}

export const deleteUser = async (req, res) => {
    try{
        res.status(200).json((await deleteUserService.byId(req.params.id)))
    } catch (e){
        res.status(500).json(e)
    }
}