import url from "../../common/url/Url";

export default class RegisterAction {

    onClickedSubmit() {
        let User = {
            userName: this.state.userName,
            password: this.state.password,
            userEmail: this.state.userEmail,
            accountOwner: {
                personId: this.state.personId,
                personName: this.state.personName
            }
        };
        let url4Register = url.Register;
        axios.post(url4Register, User, {
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
            password: '',
            userEmail: '',
            personId: '',
            personName: ''
        });
    }

};