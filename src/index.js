import ReactDom from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";

import BasicFrame from "./app/home/BasicFrame";
import Test from "./app/component/Test";
import Login from "./app/user/login/Login";
import Register from "./app/user/register/Register";
import Ticket from "./app/ticket/Ticket";
import SearchTicket from "./app/ticket/searchTicket/SearchTicket";

ReactDom.render((
	<BrowserRouter>
		<div>
			<BasicFrame />
			<Route exact path="/" component={Test}/>
				<Route path="/index" component={Test}/>
				<Route path="/login" component={Login}/>
				<Route path="/register" component={Register}/>
				<Route path="/ticket" component={Ticket}/>
					<Route path="/searchticket" component={SearchTicket}/>
		</div>
	</BrowserRouter>
), document.getElementById("root"));
