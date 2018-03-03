import url from "../../common/url/Url";

export default class RegisterAction {

    onClickedSubmit() {
        let User = this.state.User;
        let url4Register = url.Register;
        axios.post(url4Register,User,{
            timeout:1000
        }).then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        });
    }

};