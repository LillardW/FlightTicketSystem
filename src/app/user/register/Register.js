import {Button, ButtonGroup, ControlLabel, FormControl, FormGroup} from "react-bootstrap";
import RegisterAction from "./RegisterAction";
import url from "../../common/url/Url";

class Register extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeIdNumber = this.handleChangeIdNumber.bind(this);
        this.handleChangePersonName = this.handleChangePersonName.bind(this);

        this.state = {
            User: {
                userName: '',
                password: '',
                userEmail: '',
                accountOwner: {
                    /*personId: '',
                    personName: ''*/
                }
            }
        };
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleChangeUserName(e) {
        let newValue = e.target.value;
        this.setState({
            User: {
                userName: newValue
            }
        });
    }

    handleChangePassword(e) {
        let newValue = e.target.value;
        this.setState({
            User: {
                password: newValue
            }
        });
    }

    handleChangeEmail(e) {
        let newValue = e.target.value;
        this.setState({
            User: {
                userEmail: newValue
            }
        });
    }

    handleChangeIdNumber(e) {
        let newValue = e.target.value;
        this.setState({
            User: Object.assign({
                accountOwner: Object.assign({
                        personId: newValue
                    }
                )
            })
        });
    }

    handleChangePersonName(e) {
        let newValue = e.target.value;
        this.setState({
            User: {
                accountOwner: {
                    personName: newValue
                }
            }
        });
    }

    onClickedSubmit() {
        let User = this.state.User;
        console.log(JSON.stringify(User));
        let url4Register = url.Register;
        axios.post(url4Register, User, {
            timeout: 1000
        }).then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        });
    }

    render() {
        const registerAction = new RegisterAction();
        return (
            <form>
                <FormGroup>
                    <ControlLabel htmlFor="userName">UserName</ControlLabel>
                    <FormControl id="userName" type="text" onChange={this.handleChangeUserName} value={this.state.User.userName}/>
                    <ControlLabel htmlFor="password">Password</ControlLabel>
                    <FormControl id="password" type="password" onChange={this.handleChangePassword} value={this.state.User.password}/>
                    <ControlLabel htmlFor="userEmail">Email</ControlLabel>
                    <FormControl id="userEmail" type="text" onChange={this.handleChangeEmail} value={this.state.User.userEmail}/>
                    <ControlLabel htmlFor="idNumber">ID Number</ControlLabel>
                    <FormControl id="idNumber" type="text" onChange={this.handleChangeIdNumber} value={this.state.User.accountOwner.personId}/>
                    <ControlLabel htmlFor="name">Name</ControlLabel>
                    <FormControl id="name" type="text" onChange={this.handleChangePersonName} value={this.state.User.accountOwner.personName}/>
                </FormGroup>
                <ButtonGroup>
                    <Button bsStyle="primary" onClick={registerAction.onClickedSubmit}>注册</Button>
                </ButtonGroup>
            </form>
        );
    }
}

export default Register;