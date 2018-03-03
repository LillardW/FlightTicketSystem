import {Link} from "react-router-dom";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

class BasicFrame extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">来呀 快活呀</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <LinkContainer to="/">
                        <NavItem>首页</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/ticket/searchTicket">
                        <NavItem>机票</NavItem>
                    </LinkContainer>
                </Nav>
                <Nav pullRight>

                    <LinkContainer to="/login">
                        <NavItem>登录</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/register">
                        <NavItem>注册</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>
        );
    }

}

export default BasicFrame;