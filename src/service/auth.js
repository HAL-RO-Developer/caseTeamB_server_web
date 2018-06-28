class Auth{
    constructor(){
        this.token = localStorage['token'];
    }
    SetToken(t){
        this.token = t
        localStorage.setItem('token',t);
    }
    GetToken(){
        return localStorage['token']
    }
}
var auth = new Auth()
window.auth = auth
export default auth;
