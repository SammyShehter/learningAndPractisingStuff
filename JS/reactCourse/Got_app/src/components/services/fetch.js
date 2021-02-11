export default class Got_Service {

    constructor(){
        this._baseURL = 'https://anapioficeandfire.com/api/';
    }

    getResource = async (url) =>{
        const res = await fetch(`${this._baseURL}${url}`)

        if(!res.ok){
            throw new Error(`Could not fetch  ${url}, received ${res.status}`);
        }

        return res.json()
    }

    getChar = async (id) => {
        const res = await this.getResource(`characters/${id}/`);
        return this._transformItem(res);
    }

    getAllChars = async (page) => {
        const res = await this.getResource(`characters?page=${page}`);
        return res.map(this._transformItem);
    }

    getAllBooks = async () => {
        const res = await this.getResource(`books/`);
        return res.map(this._transformItem)
    }

    getBook = async (id) => {
        const res = await this.getResource(`books/${id}/`);
        return this._transformItem(res)
    }

    getAllHouses = async () => {
        const res = await this.getResource(`houses/`);
        return res.map(this._transformItem)
    }

    getHouse = async (id) => {
        const res = await this.getResource(`houses/${id}/`);
        return this._transformItem(res)
    }

    _transformItem (body) {

        //My way
        // return {
        //     name: body.name === '' ? 'n/a' : body.name,
        //     gender: body.gender === '' ? 'n/a' : body.gender,
        //     born: body.born === '' ? 'n/a' : body.born,
        //     died: body.died === '' ? 'n/a' : body.died,
        //     culture: body.culture === '' ? 'n/a' : body.culture
        // }

        //Artem's way
        return Object.keys(body).reduce((acc, key) => {
            acc[key] = body[key] === '' ? 'n/a' : body[key];
            return acc;
        }, {});
    }
}
