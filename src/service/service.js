import axios from 'axios'
import auth from './auth'
URL = 'https://caseteambserver-nrgwuntsge.now.sh/';
const api = axios.create({
    baseURL: URL, // バックエンドB のURL:port を指定する
    headers: {
        'ContentType': 'application/json',
        'Authorization': auth.GetToken()
    },
    responseType: 'json'
});

class Http {
    constructor() {
    }
    signin(name, pass) {
        return api.post('signin', {
            name,
            pass
        })
    }
    signup(name, pass) {
        return api.post('signup', {
            name,
            pass
        })
        alert("Siginup");
    }
    getpin() {
        return api.post('goal/button')
    }
    getid() {
        // return  api.get('goal/button')
        return new Promise((callback) => {
            var res = {
                data: {
                    goal: "風呂掃除",
                    updated_at: "2018-6-24"
                }
            }
            callback(res)
        })
        return api.get('goal/button')
    }

    addgoal(button_id, goal) {
        return api.post('goal/goal', {
            button_id,
            goal

        })
    }
    addchild(nickname, birthday, sex) {
        return api.post('child', {
            nickname,
            birthday,
            sex

        })
    }
    getchild() {
        return api.get('child')
    }
    delechild(child_id) {
        return api.delete('child', {
            child_id
    }) 
 }
}
var http = new Http()
export default http;