import {Button, ControlLabel, FormControl, FormGroup, Grid} from "react-bootstrap";
import RegisterAction from "./RegisterAction";

class Register extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            userName: '',
            password: '',
            userEmail: '',
            personId: '',
            personName: ''
        };
    }

    handleChange(e) {
        const target = e.target;
        this.setState({
            [target.id]: target.value
        })
    }

    render() {
        const registerAction = new RegisterAction();
        let _self = this;
        return (
            <div onChange={(e) => this.handleChange(e)}>
                <Grid>
                    <form>
                        <FormGroup>
                            <ControlLabel htmlFor="userName">用户名</ControlLabel>
                            <FormControl id="userName" type="text" value={this.state.userName}/>
                            <ControlLabel htmlFor="password">密码</ControlLabel>
                            <FormControl id="password" type="password" value={this.state.password}/>
                            <ControlLabel htmlFor="userEmail">Email</ControlLabel>
                            <FormControl id="userEmail" type="text" value={this.state.userEmail}/>
                            <ControlLabel htmlFor="idNumber">身份证号码</ControlLabel>
                            <FormControl id="personId" type="text" value={this.state.personId}/>
                            <ControlLabel htmlFor="name">真实姓名</ControlLabel>
                            <FormControl id="personName" type="text" value={this.state.personName}/>
                        </FormGroup>
                        <Button bsStyle="primary" onClick={registerAction.onClickedSubmit.bind(_self)}>注册</Button>
                        <Button onClick={registerAction.resetData.bind(_self)}>重置</Button>
                    </form>
                </Grid>
            </div>
        );
    }
}

export default Register;