import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const styles = StyleSheet.create({
	h1: {
		fontSize: "7.5em",
		margin: "15px 0px",
		fontWeight: "bold",
	},
	h2: {
		fontWeight: "bold",
	},
});
const Login = () => {


	  const [name, setName] = useState("");
	  const [email, setEmail] = useState("");
	  const [mobile, setMobileNumber] = useState("");
	  const [message, setMessage] = useState("");

	  let handleSubmit = async (e) => {
	    e.preventDefault();
	    try {
	      let res = await fetch("http://localhost:4000/hospital/add", {
	        method: "POST",
	        body: JSON.stringify({
	          name: name,
	          email: email,
	          mobile: mobile,
	        }),
	      });
	      let resJson = await res.json();
	      if (res.status === 200) {
	        setName("");
	        setEmail("");
	        setMessage("User created successfully");
	      } else {
	        setMessage("Some error occured");
	      }
	    } catch (err) {
	      console.log(err);
	    }
	  };


	return (
		<div style={{marginLeft: "52rem",marginRight: "75rem",marginTop: "20rem"}}> 
		<div style={{marginTop: "4rem", marginBottom: "4rem"}}>
			<ul style={{fontSize: 40}}>
					Add New Employee
			</ul>
			{/*<ul>
				<Link to="/dashboard" >
					Dashboard
				</Link>
			</ul>*/}
		</div>
		<Form >

	      <Form.Group className="mb-3" controlId="formBasicEmail">
	        <Form.Label>Name</Form.Label>
	        <Form.Control type="text" placeholder="Enter name"  onChange={(e) => setName(e.target.value)}/>
	        <Form.Text className="text-muted">
	          We'll never share your email with anyone else.
	        </Form.Text>
	      </Form.Group>

	      <div style={{marginTop: "2rem",marginBottom: "2rem"}}></div>	
	      <Form.Group className="mb-3" controlId="formBasicPassword">
	        <Form.Label>Email</Form.Label>
	        <Form.Control type="text" placeholder="Enter Designation" onChange={(e) => setEmail(e.target.value)}/>
	      </Form.Group>

	      <div style={{marginTop: "2rem",marginBottom: "2rem"}}></div>	
	      <Form.Group className="mb-3" controlId="formBasicPassword">
	        <Form.Label>Location</Form.Label>
	        <Form.Control type="text" placeholder="Enter Mobile Number" onChange={(e) => setMobileNumber(e.target.value)}/>
	      </Form.Group>

	      <div style={{marginTop: "2rem",marginBottom: "2rem"}}></div>	
	      <Form.Group className="mb-3" controlId="formBasicPassword">
	        <Form.Label>Salary</Form.Label>
	        <Form.Control type="text" placeholder="Enter Salary" />
	      </Form.Group>

	      <div style={{marginTop: "1rem",marginBottom: "1rem"}}></div>

	      <Form.Group className="mb-3" controlId="formBasicCheckbox">
	        <Form.Check type="checkbox" label=" Check me out" />
	      </Form.Group>

	      <Button onSubmit={handleSubmit} variant="primary" type="submit" style={{backgroundColor:"#ff0000", color:"#ffffff", fontSize:20, width:"150px"}}>
	        Submit
	      </Button>

    	</Form>
    	</div>
	);
};

export default Login;
