import url from "../../common/url/Url";

export default class LoginAction {

    onClickedLogin() {
        let User = {
            userName: this.state.userName,
            password: this.state.password
        };
        let url4Login = url.Login;
        axios.post(url4Login, User, {
            timeout: 1000,
            withCredentials: true
        }).then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        });
    }

    resetData() {
        this.setState({
            userName: '',
            password: ''
        });
    }
}