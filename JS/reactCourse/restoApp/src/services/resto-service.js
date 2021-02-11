import * as http from './http.service'

export default class RestoService {

    getMenuItems = async () => {
        return http.get('menu');
    }
}


