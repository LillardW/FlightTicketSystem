import React, {Component} from "react";
import ReactDom from "react-dom";
import {BrowserRouter, Route, Link} from "react-router-dom";

import BasicFrame from "./app/home/BasicFrame";
import Test from "./app/component/Test";
import Login from "./app/component/Login";

ReactDom.render((
	<BrowserRouter>
		<div>
			<BasicFrame/>
			<Route exact path="/" component={Test}/>
				<Route path="/login" component={Login}/>
		</div>
	</BrowserRouter>
), document.getElementById("root"));
