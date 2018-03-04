import {Button, ControlLabel, FormControl, FormGroup, Grid} from "react-bootstrap";
import LoginAction from "./LoginAction";

class Login extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            userName: '',
            password: '',
        };
    }

    handleChange(e) {
        const target = e.target;
        this.setState({
            [target.id]: target.value
        })
    }

    render() {
        const loginAction = new LoginAction();
        let _self = this;
        return (
            <div onChange={(e) => this.handleChange(e)}>
                <Grid>
                    <form>
                        <FormGroup>
                            <ControlLabel htmlFor="userName">UserName</ControlLabel>
                            <FormControl id="userName" type="text" value={this.state.userName}/>
                            <ControlLabel htmlFor="password">Password</ControlLabel>
                            <FormControl id="password" type="password" value={this.state.password}/>
                        </FormGroup>
                        <Button bsStyle="primary" onClick={loginAction.onClickedLogin.bind(_self)}>登录</Button>
                        <Button onClick={loginAction.resetData.bind(_self)}>重置</Button>
                    </form>
                </Grid>
            </div>
        );
    }
}

export default Login;