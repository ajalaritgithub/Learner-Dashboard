import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import { Link } from "react-router-dom";


const Menu = () => {
	return (
		<div style={{marginTop: "4rem", marginBottom: "4rem"}}>
			<ul style={{fontSize: 40}}>
				<Link to="/login" >
					Add New Employee
				</Link>
			</ul>
			{/*<ul>
				<Link to="/dashboard" >
					Dashboard
				</Link>
			</ul>*/}
		</div>
	);
};

export default Menu;
