import {UserDto} from "../dto/users.model"
import shortid from 'shortid'
import debug from 'debug'

const log: debug.IDebugger = debug('app:in-memory-dao')

class UsersDao {
    private static instance: UsersDao
    users: Array<UserDto> = []

    constructor() {
        log('Created new instance of UsersDao')
    }

    static getInstance(): UsersDao {
        if(!UsersDao.instance) {
            UsersDao.instance = new UsersDao()
        }
        return UsersDao.instance
    }
}

export default UsersDao.getInstance()