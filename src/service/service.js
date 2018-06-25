import axios from 'axios'
import auth from './auth'
<<<<<<< HEAD
URL = 'https://caseteambserver-nxczkpuyio.now.sh/';
=======
URL = 'https://caseteambserver-nrgwuntsge.now.sh/';
>>>>>>> 2e34a5d0a4a0424781e0417b05e7cd8556db51d1
const api = axios.create({
    baseURL: URL, // バックエンドB のURL:port を指定する
    headers: {
        'ContentType': 'application/json',
        'Authorization': auth.GetToken()
    },
    responseType: 'json'
});

class Http {
<<<<<<< HEAD
    constructor() {
    }
=======
    constructor() {}
>>>>>>> 2e34a5d0a4a0424781e0417b05e7cd8556db51d1
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
<<<<<<< HEAD

=======
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
>>>>>>> 2e34a5d0a4a0424781e0417b05e7cd8556db51d1
}
var http = new Http()
export default http;