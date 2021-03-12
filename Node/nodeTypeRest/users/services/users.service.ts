import UsersDao from '../daos/users.dao';
import {CRUD} from '../../common/crud.interface';
import {UserDto} from '../dto/users.model';

class UsersService implements CRUD{
    async create(resource: UserDto) {
        return UsersDao.addUser(resource);
    }

    async deleteById(resourceId: string) {
        return UsersDao.removeUserById(resourceId);
    };

    async list(limit: number, page: number) {
        return UsersDao.getUsers();
    };

    async patchById(resource: UserDto) {
        return UsersDao.patchUserById(resource)
    };

    async readById(resourceId: string) {
        return UsersDao.getUserById(resourceId);
    };

    async updateById(resource: UserDto) {
        return UsersDao.putUserById(resource);
    };

    async getByEmail(email: string) {
        return UsersDao.getUserByEmail(email);
    }
}

export default new UsersService()