export default class Pionet_Serv {

    constructor(){
        this._baseURL = 'http://test-api.marvilix.com/container/';
    }

    getResource = async (url) =>{
        const res = await fetch(this._baseURL + url)

        if(!res.ok){
            throw new Error(`Could not fetch  ${url}, received ${res.status}`);
        }

        return res.json()
    }

    getContainer = async (containerId) => {
        const res = await this.getResource(containerId);
        return this._transformItem(res);
    }

    getNotif = async (containerId, phoneNum) => {
        
        const response = await fetch(`https://cors-anywhere.herokuapp.com/${this._baseURL}${containerId}/sms`, {
            method: 'POST',
            body: phoneNum,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const res = await response.json();

        return this._transformItem(res);
    }

    _transformItem (body) {

        return Object.keys(body).reduce((acc, key) => {
            acc[key] = body[key] === '' ? 'n/a' : body[key];
            return acc;
        }, {});
    }
}